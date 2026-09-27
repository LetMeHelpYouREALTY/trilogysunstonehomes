import {
  AMENITY_CATEGORIES,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_LABEL,
  COMMUNITY_MAP_SUBLABEL,
  directionsUrl,
  googleMapsEmbedUrl,
} from "@/lib/community-map";
import { FEATURED_NEARBY_PLACES } from "@/lib/nearby-amenities-content";
import { MAP_CONTAINER_MIN_HEIGHT } from "@/components/nearby-amenity-map/types";

type AmenityMapFallbackProps = {
  activeCategoryLabel?: string;
};

export function AmenityMapFallback({ activeCategoryLabel }: AmenityMapFallbackProps) {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  const embedSrc = googleMapsEmbedUrl(lat, lng);

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#6b7373]">
        Interactive amenity search requires a Google Maps API key. Showing a map centered on{" "}
        {COMMUNITY_MAP_LABEL}
        {activeCategoryLabel ? ` (${activeCategoryLabel})` : ""}.
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
      <div>
        <h3 className="mb-3 text-lg font-semibold text-[#3d4544]">
          Featured places near {COMMUNITY_MAP_LABEL}
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {FEATURED_NEARBY_PLACES.map((place) => (
            <li key={place.name} className="card-elevated bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#1c5087]">
                {place.category}
              </p>
              <p className="mt-1 font-semibold text-[#3d4544]">{place.name}</p>
              <p className="mt-1 text-sm text-[#6b7373]">
                {place.streetAddress}, {place.addressLocality}, {place.addressRegion}{" "}
                {place.postalCode}
              </p>
              <p className="mt-2 text-sm text-[#4e5655]">{place.summary}</p>
            </li>
          ))}
        </ul>
      </div>
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
