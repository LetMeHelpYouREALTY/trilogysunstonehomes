"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  COMMUNITY_MAP_SUBLABEL,
  DEFAULT_AMENITY_CATEGORY,
  directionsUrl,
  type AmenityCategoryId,
} from "@/lib/community-map";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { featuredPlacesForCategory } from "@/lib/nearby-amenities-content";
import { searchCategory } from "@/lib/nearby-places-search";
import { AmenityMapFallback } from "@/components/nearby-amenity-map/amenity-map-fallback";
import { CuratedPlacesList } from "@/components/nearby-amenity-map/curated-places-list";
import { MAP_CONTAINER_MIN_HEIGHT, type MapPlaceResult } from "@/components/nearby-amenity-map/types";

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
const mapsMapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();

function buildPlaceInfoContent(place: MapPlaceResult): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "240px";
  root.style.padding = "4px 0";

  const title = document.createElement("p");
  title.style.fontWeight = "600";
  title.style.margin = "0";
  title.textContent = place.name;
  root.appendChild(title);

  if (place.address) {
    const addr = document.createElement("p");
    addr.style.fontSize = "13px";
    addr.style.margin = "4px 0 0";
    addr.textContent = place.address;
    root.appendChild(addr);
  }

  const linkWrap = document.createElement("p");
  linkWrap.style.marginTop = "8px";
  const link = document.createElement("a");
  link.href = directionsUrl(place.lat, place.lng, place.name);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  linkWrap.appendChild(link);
  root.appendChild(linkWrap);

  return root;
}

function buildCommunityInfoContent(): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "260px";
  root.style.padding = "4px 0";

  const title = document.createElement("p");
  title.style.fontWeight = "700";
  title.style.margin = "0";
  title.style.color = "#003a70";
  title.textContent = COMMUNITY_MAP_LABEL;
  root.appendChild(title);

  const sub = document.createElement("p");
  sub.style.fontSize = "13px";
  sub.style.margin = "4px 0 0";
  sub.textContent = COMMUNITY_MAP_SUBLABEL;
  root.appendChild(sub);

  const linkWrap = document.createElement("p");
  linkWrap.style.marginTop = "8px";
  const link = document.createElement("a");
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  link.href = directionsUrl(lat, lng, COMMUNITY_MAP_LABEL);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  linkWrap.appendChild(link);
  root.appendChild(linkWrap);

  return root;
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
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [category, setCategory] = useState<AmenityCategoryId>(defaultCategory);
  const [useFallback, setUseFallback] = useState(!mapsApiKey || mapsAuthFailed);
  const [loading, setLoading] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const [showCuratedList, setShowCuratedList] = useState(false);

  const enterFallback = useCallback(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current = null;
    }
    if (mapRef.current) {
      mapRef.current.replaceChildren();
    }
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    setUseFallback(true);
    setLiveMessage("Map unavailable—showing static map and verified places.");
  }, []);

  useEffect(() => {
    if (!mapsApiKey) return;

    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => {
      m.setMap(null);
      google.maps.event.clearInstanceListeners(m);
    });
    markersRef.current = [];
  }, []);

  const initMapIfNeeded = useCallback(async () => {
    if (!mapsApiKey) throw new Error("Missing maps API key");
    if (mapsAuthFailed) throw new Error("Maps auth failed");
    await loadGoogleMaps(mapsApiKey);
    if (mapInstanceRef.current || !mapRef.current) return;

    const { lat, lng } = COMMUNITY_MAP_CENTER;
    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 13,
      ...(mapsMapId ? { mapId: mapsMapId } : {}),
    });
    infoWindowRef.current = new google.maps.InfoWindow();
  }, []);

  const addMarker = useCallback(
    (map: google.maps.Map, place: MapPlaceResult | "community") => {
      const infoWindow = infoWindowRef.current;
      if (!infoWindow) return;

      if (place === "community") {
        const { lat, lng } = COMMUNITY_MAP_CENTER;
        const marker = new google.maps.Marker({
          map,
          position: { lat, lng },
          title: COMMUNITY_MAP_LABEL,
          icon: { url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
        });
        marker.addListener("click", () => {
          infoWindow.setContent(buildCommunityInfoContent());
          infoWindow.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
        return;
      }

      const marker = new google.maps.Marker({
        map,
        position: { lat: place.lat, lng: place.lng },
        title: place.name,
      });
      marker.addListener("click", () => {
        infoWindow.setContent(buildPlaceInfoContent(place));
        infoWindow.open({ map, anchor: marker });
      });
      markersRef.current.push(marker);
    },
    [],
  );

  const renderPlaces = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapsApiKey || mapsAuthFailed) {
        enterFallback();
        return;
      }
      setLoading(true);
      setShowCuratedList(false);
      setLiveMessage("Loading nearby places…");
      try {
        await initMapIfNeeded();
        const map = mapInstanceRef.current;
        if (!map) throw new Error("Map missing");

        clearMarkers();
        addMarker(map, "community");

        let places: MapPlaceResult[] = [];
        try {
          places = await searchCategory(categoryId);
        } catch {
          places = [];
          setShowCuratedList(true);
        }

        const bounds = new google.maps.LatLngBounds();
        bounds.extend(COMMUNITY_MAP_CENTER);

        places.forEach((p) => {
          addMarker(map, p);
          bounds.extend({ lat: p.lat, lng: p.lng });
        });

        if (places.length > 0) {
          map.fitBounds(bounds);
        } else {
          map.setCenter(COMMUNITY_MAP_CENTER);
          setShowCuratedList(true);
        }

        const catLabel = AMENITY_CATEGORIES.find((c) => c.id === categoryId)?.label ?? "Places";
        setLiveMessage(
          places.length > 0
            ? `Showing ${places.length} ${catLabel} near ${COMMUNITY_MAP_LABEL}.`
            : `No live ${catLabel} results in this radius—see verified places below.`,
        );
      } catch {
        enterFallback();
      } finally {
        setLoading(false);
      }
    },
    [addMarker, clearMarkers, enterFallback, initMapIfNeeded],
  );

  useEffect(() => {
    if (useFallback) return;
    void renderPlaces(category);
  }, [category, renderPlaces, useFallback]);

  useEffect(() => {
    if (!mapsApiKey) return;
    loadGoogleMaps(mapsApiKey).catch(() => {
      enterFallback();
    });
  }, [enterFallback]);

  useEffect(() => {
    return () => clearMarkers();
  }, [clearMarkers]);

  if (useFallback) {
    const label = AMENITY_CATEGORIES.find((c) => c.id === category)?.label;
    return (
      <div>
        <CategoryFilters category={category} compact={compact} onSelect={setCategory} />
        <AmenityMapFallback activeCategory={category} activeCategoryLabel={label} />
      </div>
    );
  }

  const curated = featuredPlacesForCategory(category);
  const catLabel = AMENITY_CATEGORIES.find((c) => c.id === category)?.label;

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
      {showCuratedList ? (
        <div className="mt-6">
          <CuratedPlacesList
            places={curated}
            heading={`Verified places (${catLabel ?? "nearby"})`}
          />
        </div>
      ) : null}
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
