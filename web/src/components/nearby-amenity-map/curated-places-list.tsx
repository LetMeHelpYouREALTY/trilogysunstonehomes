import type { FeaturedNearbyPlace } from "@/lib/nearby-amenities-content";
import { COMMUNITY_MAP_LABEL } from "@/lib/community-map";

type CuratedPlacesListProps = {
  places: readonly FeaturedNearbyPlace[];
  heading?: string;
};

export function CuratedPlacesList({ places, heading }: CuratedPlacesListProps) {
  if (places.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-[#3d4544]">
        {heading ?? `Featured places near ${COMMUNITY_MAP_LABEL}`}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {places.map((place) => (
          <li key={place.name} className="card-elevated bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#1c5087]">
              {place.category}
            </p>
            <p className="mt-1 font-semibold text-[#3d4544]">{place.name}</p>
            {place.streetAddress ? (
              <p className="mt-1 text-sm text-[#6b7373]">
                {place.streetAddress}, {place.addressLocality}, {place.addressRegion}{" "}
                {place.postalCode}
              </p>
            ) : null}
            <p className="mt-2 text-sm text-[#4e5655]">{place.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
