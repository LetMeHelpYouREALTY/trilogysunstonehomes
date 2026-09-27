/**
 * Map center and amenity discovery config for Trilogy Sunstone.
 * Center: OpenStreetMap Nominatim geocode for the sales office / Cabochon Club address
 * (9560 Lapis Ln, Las Vegas, NV 89143 — Lapis Lane, Trilogy at Sunstone).
 */
import { ADDRESS_LINE } from "@/lib/site-contact";
import { CLUB_NAME, COMMUNITY_NAME } from "@/lib/hyperlocal";

export const COMMUNITY_MAP_CENTER = {
  lat: 36.3299818,
  lng: -115.3098728,
  /** Human-readable source for PR / docs */
  geocodeSource:
    "OpenStreetMap Nominatim (Lapis Lane / Trilogy at Sunstone, 89143), aligned with sales office address",
} as const;

export const COMMUNITY_MAP_LABEL = COMMUNITY_NAME;
export const COMMUNITY_MAP_SUBLABEL = `${CLUB_NAME} · ${ADDRESS_LINE}`;

export type AmenityCategoryId =
  | "healthcare"
  | "golf"
  | "parks"
  | "community"
  | "grocery"
  | "restaurants"
  | "cafes"
  | "pharmacies"
  | "shopping"
  | "fitness"
  | "parking";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types — see Google place type tables */
  primaryTypes: readonly string[];
  ariaLabel: string;
};

/** 55+ active adult: healthcare, recreation, and errands first; schools omitted from filters. */
export const AMENITY_CATEGORIES: readonly AmenityCategory[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor", "medical_clinic"],
    ariaLabel: "Show hospitals and medical clinics near Trilogy Sunstone",
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
    ariaLabel: "Show golf courses near Trilogy Sunstone",
  },
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park", "national_park"],
    ariaLabel: "Show parks and outdoor recreation near Trilogy Sunstone",
  },
  {
    id: "community",
    label: "Recreation",
    primaryTypes: ["community_center", "sports_complex"],
    ariaLabel: "Show community and recreation centers near Trilogy Sunstone",
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
    ariaLabel: "Show grocery stores near Trilogy Sunstone",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
    ariaLabel: "Show restaurants near Trilogy Sunstone",
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
    ariaLabel: "Show cafes near Trilogy Sunstone",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy"],
    ariaLabel: "Show pharmacies near Trilogy Sunstone",
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
    ariaLabel: "Show shopping near Trilogy Sunstone",
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
    ariaLabel: "Show gyms and fitness centers near Trilogy Sunstone",
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
    ariaLabel: "Show parking near Trilogy Sunstone",
  },
] as const;

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = "healthcare";

/** Default search radius in meters for nearby place search */
export const AMENITY_SEARCH_RADIUS_M = 8000;

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 14): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function directionsUrl(lat: number, lng: number, placeName?: string): string {
  const q = placeName
    ? encodeURIComponent(`${placeName} @ ${lat},${lng}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}
