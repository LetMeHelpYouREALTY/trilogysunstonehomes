"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  COMMUNITY_MAP_SUBLABEL,
  DEFAULT_AMENITY_CATEGORY,
  directionsUrl,
  type AmenityCategoryId,
} from "@/lib/community-map";
import { AmenityMapFallback } from "@/components/nearby-amenity-map/amenity-map-fallback";
import {
  GOOGLE_MAPS_SCRIPT_BASE,
  MAP_CONTAINER_MIN_HEIGHT,
  type GoogleMapInstance,
  type GoogleMapsWindow,
  type GoogleMarker,
  type MapPlaceResult,
} from "@/components/nearby-amenity-map/types";

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
const mapsMapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function infoWindowHtml(place: MapPlaceResult): string {
  const rating =
    place.rating != null
      ? `<p class="text-sm text-gray-600">Rating: ${place.rating.toFixed(1)}</p>`
      : "";
  const address = place.address
    ? `<p class="text-sm text-gray-700 mt-1">${escapeHtml(place.address)}</p>`
    : "";
  const dir = directionsUrl(place.lat, place.lng, place.name);
  return `<div style="max-width:240px;padding:4px 0">
    <p style="font-weight:600;margin:0">${escapeHtml(place.name)}</p>
    ${rating}
    ${address}
    <p style="margin-top:8px"><a href="${dir}" target="_blank" rel="noopener noreferrer">Directions</a></p>
  </div>`;
}

function communityInfoHtml(): string {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  const dir = directionsUrl(lat, lng, COMMUNITY_MAP_LABEL);
  return `<div style="max-width:260px;padding:4px 0">
    <p style="font-weight:700;margin:0;color:#003a70">${escapeHtml(COMMUNITY_MAP_LABEL)}</p>
    <p style="font-size:13px;margin:4px 0 0">${escapeHtml(COMMUNITY_MAP_SUBLABEL)}</p>
    <p style="margin-top:8px"><a href="${dir}" target="_blank" rel="noopener noreferrer">Directions</a></p>
  </div>`;
}

let mapsScriptPromise: Promise<void> | null = null;

function ensureMapsScript(): Promise<void> {
  if (!mapsApiKey) {
    return Promise.reject(new Error("Missing maps API key"));
  }
  const w = window as GoogleMapsWindow;
  if (w.google?.maps?.importLibrary) {
    return Promise.resolve();
  }
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-google-maps-loader="true"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script failed")));
      return;
    }
    const script = document.createElement("script");
    script.dataset.googleMapsLoader = "true";
    script.src = `${GOOGLE_MAPS_SCRIPT_BASE}?key=${encodeURIComponent(mapsApiKey)}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Maps script failed"));
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

type PlaceInstance = {
  id?: string;
  displayName?: string;
  formattedAddress?: string;
  rating?: number;
  googleMapsURI?: string;
  location?: { lat: () => number; lng: () => number } | { lat: number; lng: number };
};

function readLatLng(location: PlaceInstance["location"]): { lat: number; lng: number } | null {
  if (!location) return null;
  if (typeof (location as { lat: () => number }).lat === "function") {
    const loc = location as { lat: () => number; lng: () => number };
    return { lat: loc.lat(), lng: loc.lng() };
  }
  const loc = location as { lat: number; lng: number };
  return { lat: loc.lat, lng: loc.lng };
}

function placeToResult(place: PlaceInstance, index: number): MapPlaceResult | null {
  const coords = readLatLng(place.location);
  if (!coords) return null;
  return {
    id: place.id ?? `place-${index}`,
    name: place.displayName ?? "Place",
    lat: coords.lat,
    lng: coords.lng,
    address: place.formattedAddress,
    rating: place.rating,
    googleMapsUri: place.googleMapsURI,
  };
}

async function searchNearbyPlaces(categoryId: AmenityCategoryId): Promise<MapPlaceResult[]> {
  const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return [];

  await ensureMapsScript();
  const w = window as GoogleMapsWindow;
  const maps = w.google!.maps;
  const { lat, lng } = COMMUNITY_MAP_CENTER;

  try {
    const placesLib = (await maps.importLibrary("places")) as {
      Place: {
        searchNearby: (req: Record<string, unknown>) => Promise<{ places: PlaceInstance[] }>;
      };
    };
    const { places } = await placesLib.Place.searchNearby({
      fields: ["displayName", "location", "formattedAddress", "rating", "googleMapsURI", "id"],
      locationRestriction: {
        center: { lat, lng },
        radius: AMENITY_SEARCH_RADIUS_M,
      },
      includedPrimaryTypes: [...category.primaryTypes],
      maxResultCount: 15,
      rankPreference: "DISTANCE",
    });

    return places
      .map((p, index) => placeToResult(p, index))
      .filter((p): p is MapPlaceResult => p != null);
  } catch {
    return legacyNearbySearch(maps, category.primaryTypes[0] ?? "point_of_interest", lat, lng);
  }
}

function legacyNearbySearch(
  maps: NonNullable<GoogleMapsWindow["google"]>["maps"],
  type: string,
  lat: number,
  lng: number,
): Promise<MapPlaceResult[]> {
  return new Promise((resolve) => {
    const host = document.createElement("div");
    host.style.display = "none";
    document.body.appendChild(host);
    const map = new maps.Map(host, { center: { lat, lng }, zoom: 14 });

    type PlacesServiceCtor = new (mapEl: unknown) => {
      nearbySearch: (
        req: Record<string, unknown>,
        cb: (
          results: Array<{
            place_id?: string;
            name?: string;
            geometry?: { location?: { lat: () => number; lng: () => number } };
            vicinity?: string;
            rating?: number;
          }> | null,
          status: string,
        ) => void,
      ) => void;
    };

    const placesNamespace = (maps as unknown as { places?: { PlacesService: PlacesServiceCtor } })
      .places;
    if (!placesNamespace?.PlacesService) {
      host.remove();
      resolve([]);
      return;
    }

    const service = new placesNamespace.PlacesService(map);
    service.nearbySearch(
      {
        location: new maps.LatLng(lat, lng),
        radius: AMENITY_SEARCH_RADIUS_M,
        type,
      },
      (results, status) => {
        host.remove();
        if (status !== "OK" || !results) {
          resolve([]);
          return;
        }
        const mapped: MapPlaceResult[] = [];
        for (const [i, r] of results.slice(0, 15).entries()) {
          const loc = r.geometry?.location;
          if (!loc) continue;
          mapped.push({
            id: r.place_id ?? `legacy-${i}`,
            name: r.name ?? "Place",
            lat: loc.lat(),
            lng: loc.lng(),
            address: r.vicinity,
            rating: r.rating,
          });
        }
        resolve(mapped);
      },
    );
  });
}

type NearbyAmenityMapProps = {
  defaultCategory?: AmenityCategoryId;
  compact?: boolean;
};

export function NearbyAmenityMap({
  defaultCategory = DEFAULT_AMENITY_CATEGORY,
  compact = false,
}: NearbyAmenityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<GoogleMapInstance | null>(null);
  const infoWindowRef = useRef<InstanceType<
    NonNullable<GoogleMapsWindow["google"]>["maps"]["InfoWindow"]
  > | null>(null);
  const markersRef = useRef<GoogleMarker[]>([]);
  const [category, setCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [useFallback, setUseFallback] = useState(!mapsApiKey);
  const [loading, setLoading] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  const clearMarkers = useCallback(() => {
    const google = (window as GoogleMapsWindow).google;
    markersRef.current.forEach((m) => {
      m.setMap(null);
      google?.maps?.event.clearInstanceListeners(m);
    });
    markersRef.current = [];
  }, []);

  const initMapIfNeeded = useCallback(async () => {
    await ensureMapsScript();
    const w = window as GoogleMapsWindow;
    const maps = w.google!.maps;
    if (mapInstanceRef.current || !mapRef.current) return;

    const { lat, lng } = COMMUNITY_MAP_CENTER;
    mapInstanceRef.current = new maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 13,
      ...(mapsMapId ? { mapId: mapsMapId } : {}),
    });
    infoWindowRef.current = new maps.InfoWindow();
  }, []);

  const addMarker = useCallback(
    (
      maps: NonNullable<GoogleMapsWindow["google"]>["maps"],
      map: GoogleMapInstance,
      place: MapPlaceResult | "community",
    ) => {
      const infoWindow = infoWindowRef.current!;
      if (place === "community") {
        const { lat, lng } = COMMUNITY_MAP_CENTER;
        const marker = new maps.Marker({
          map,
          position: { lat, lng },
          title: COMMUNITY_MAP_LABEL,
          icon: { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
        });
        marker.addListener("click", () => {
          infoWindow.setContent?.(communityInfoHtml());
          infoWindow.open(map, marker);
        });
        markersRef.current.push(marker);
        return;
      }

      const marker = new maps.Marker({
        map,
        position: { lat: place.lat, lng: place.lng },
        title: place.name,
      });
      marker.addListener("click", () => {
        infoWindow.setContent?.(infoWindowHtml(place));
        infoWindow.open(map, marker);
      });
      markersRef.current.push(marker);
    },
    [],
  );

  const renderPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapsApiKey) {
        setUseFallback(true);
        return;
      }
      setLoading(true);
      setLiveMessage("Loading nearby places…");
      try {
        await initMapIfNeeded();
        const w = window as GoogleMapsWindow;
        const maps = w.google!.maps;
        const map = mapInstanceRef.current;
        if (!map) throw new Error("Map missing");

        clearMarkers();
        addMarker(maps, map, "community");

        const places = await searchNearbyPlaces(categoryId);
        const bounds = new maps.LatLngBounds();
        bounds.extend(COMMUNITY_MAP_CENTER);

        places.forEach((p) => {
          addMarker(maps, map, p);
          bounds.extend({ lat: p.lat, lng: p.lng });
        });

        if (places.length > 0) {
          map.fitBounds(bounds);
        } else {
          map.setCenter(COMMUNITY_MAP_CENTER);
        }

        const catLabel = AMENITY_CATEGORIES.find((c) => c.id === categoryId)?.label ?? "Places";
        setLiveMessage(
          places.length > 0
            ? `Showing ${places.length} ${catLabel} near ${COMMUNITY_MAP_LABEL}.`
            : `No ${catLabel} results in this radius—try another category.`,
        );
        setUseFallback(false);
      } catch {
        setUseFallback(true);
        setLiveMessage("Map unavailable—showing static map and featured places.");
      } finally {
        setLoading(false);
      }
    },
    [addMarker, clearMarkers, initMapIfNeeded],
  );

  useEffect(() => {
    if (useFallback) return;
    void renderPlaces(category);
  }, [category, renderPlaces, useFallback]);

  useEffect(() => {
    return () => clearMarkers();
  }, [clearMarkers]);

  if (useFallback) {
    const label = AMENITY_CATEGORIES.find((c) => c.id === category)?.label;
    return (
      <div>
        <CategoryFilters category={category} compact={compact} onSelect={setCategory} />
        <AmenityMapFallback activeCategoryLabel={label} />
      </div>
    );
  }

  return (
    <div>
      <CategoryFilters category={category} compact={compact} onSelect={setCategory} />
      <p className="sr-only" role="status" aria-live="polite">
        {liveMessage}
      </p>
      <div
        className="relative overflow-hidden rounded-lg border border-[#d9e0e2] bg-[#eaf0f2] shadow-sm"
        style={{ minHeight: MAP_CONTAINER_MIN_HEIGHT }}
      >
        {loading ? (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 text-sm text-[#6b7373]"
            aria-hidden="true"
          >
            Loading map…
          </div>
        ) : null}
        <div
          ref={mapRef}
          className="h-full w-full"
          style={{ minHeight: MAP_CONTAINER_MIN_HEIGHT }}
          aria-label={`Interactive map of amenities near ${COMMUNITY_MAP_LABEL}`}
          role="application"
        />
      </div>
    </div>
  );
}

type CategoryFiltersProps = {
  category: AmenityCategoryId;
  compact?: boolean;
  onSelect: (id: AmenityCategoryId) => void;
};

function CategoryFilters({ category, compact, onSelect }: CategoryFiltersProps) {
  return (
    <div
      className={cn("mb-4 flex flex-wrap gap-2", compact ? "justify-center" : "justify-start")}
      role="tablist"
      aria-label="Filter nearby amenities by category"
    >
      {AMENITY_CATEGORIES.map((cat) => {
        const selected = cat.id === category;
        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-label={cat.ariaLabel}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2",
              selected
                ? "border-[#1c5087] bg-[#1c5087] text-white"
                : "border-[#d9e0e2] bg-white text-[#4e5655] hover:border-[#1c5087]/40 hover:text-[#1c5087]",
            )}
            onClick={() => onSelect(cat.id)}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
