import {
  AMENITY_CATEGORIES,
  AMENITY_SEARCH_RADIUS_M,
  COMMUNITY_MAP_CENTER,
  type AmenityCategoryId,
} from "@/lib/community-map";
import type { MapPlaceResult } from "@/components/nearby-amenity-map/types";

const cache = new Map<string, Promise<MapPlaceResult[]>>();

function readLatLng(
  location: google.maps.places.Place["location"],
): { lat: number; lng: number } | null {
  if (!location) return null;
  if (typeof location.lat === "function") {
    return { lat: location.lat(), lng: location.lng() };
  }
  const json = location.toJSON?.();
  if (json) return { lat: json.lat, lng: json.lng };
  return null;
}

function placeToResult(place: google.maps.places.Place, index: number): MapPlaceResult | null {
  const coords = readLatLng(place.location);
  if (!coords) return null;
  let name = "Place";
  const displayName = place.displayName;
  if (typeof displayName === "string") {
    name = displayName;
  } else if (displayName && typeof displayName === "object" && "text" in displayName) {
    name = String((displayName as { text?: string }).text ?? "Place");
  }
  return {
    id: place.id ?? `place-${index}`,
    name,
    lat: coords.lat,
    lng: coords.lng,
    address: place.formattedAddress ?? undefined,
    googleMapsUri: place.googleMapsURI ?? undefined,
  };
}

export function searchCategory(categoryId: AmenityCategoryId): Promise<MapPlaceResult[]> {
  const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return Promise.resolve([]);

  let p = cache.get(categoryId);
  if (!p) {
    const center = COMMUNITY_MAP_CENTER;
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI", "id"],
        locationRestriction: { center, radius: AMENITY_SEARCH_RADIUS_M },
        includedPrimaryTypes: [...category.primaryTypes],
        maxResultCount: 10,
        rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference & string,
      });
      return places
        .map((place, index) => placeToResult(place, index))
        .filter((place): place is MapPlaceResult => place != null);
    })();
    p.catch(() => {
      cache.delete(categoryId);
    });
    cache.set(categoryId, p);
  }
  return p;
}
