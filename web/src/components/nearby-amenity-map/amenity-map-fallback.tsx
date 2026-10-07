import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  COMMUNITY_MAP_SUBLABEL,
  directionsUrl,
  googleMapsEmbedUrl,
  type AmenityCategoryId,
} from "@/lib/community-map";
import { featuredPlacesForCategory } from "@/lib/nearby-amenities-content";
import { CuratedPlacesList } from "@/components/nearby-amenity-map/curated-places-list";
import { MAP_CONTAINER_MIN_HEIGHT } from "@/components/nearby-amenity-map/types";

type AmenityMapFallbackProps = {
  activeCategory?: AmenityCategoryId;
  activeCategoryLabel?: string;
};

export function AmenityMapFallback({
  activeCategory = "healthcare",
  activeCategoryLabel,
}: AmenityMapFallbackProps) {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  const embedSrc = googleMapsEmbedUrl(lat, lng);
  const curated = featuredPlacesForCategory(activeCategory);
  const label =
    activeCategoryLabel ??
    AMENITY_CATEGORIES.find((c) => c.id === activeCategory)?.label;

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#6b7373]">
        Showing a map centered on {COMMUNITY_MAP_LABEL}
        {label ? ` (${label})` : ""} and verified nearby places for this category.
      </p>
      <div
        className="overflow-hidden rounded-lg border border-[#d9e0e2] bg-white shadow-sm"
        style={{ minHeight: MAP_CONTAINER_MIN_HEIGHT }}
      >
        <iframe
          title={`Map centered on ${COMMUNITY_MAP_LABEL}`}
          src={embedSrc}
          className="h-full w-full border-0"
          style={{ minHeight: MAP_CONTAINER_MIN_HEIGHT }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <CuratedPlacesList
        places={curated}
        heading={`Verified places (${label ?? "nearby"})`}
      />
      <p className="text-xs text-[#6b7373]">
        Community center: {COMMUNITY_MAP_SUBLABEL}. Filter categories on this page:{" "}
        {AMENITY_CATEGORIES.map((c) => c.label).join(", ")}.
      </p>
      <p className="text-sm">
        <a
          href={directionsUrl(lat, lng, COMMUNITY_MAP_LABEL)}
          className="font-medium text-[#1c5087] hover:text-[#003a70] underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open directions to {COMMUNITY_MAP_LABEL} in Google Maps
        </a>
      </p>
    </div>
  );
}
