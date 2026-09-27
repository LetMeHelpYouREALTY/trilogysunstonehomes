import Link from "next/link";
import { LazyNearbyAmenityMap } from "@/components/nearby-amenity-map/lazy-nearby-amenity-map";
import { COMMUNITY_NAME } from "@/lib/hyperlocal";
import { NEARBY_AMENITIES_PATH } from "@/lib/nearby-amenities-content";

type NearbyAmenityMapSectionProps = {
  /** Homepage-style centered heading */
  centered?: boolean;
  compact?: boolean;
  id?: string;
};

export function NearbyAmenityMapSection({
  centered = true,
  compact = false,
  id = "whats-nearby",
}: NearbyAmenityMapSectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 bg-white" aria-labelledby={`${id}-heading`}>
      <div className="container mx-auto px-4">
        <div className={centered ? "mx-auto max-w-5xl text-center" : "mx-auto max-w-5xl"}>
          <h2
            id={`${id}-heading`}
            className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-3"
          >
            Life Near {COMMUNITY_NAME}
          </h2>
          <p className="text-[#6b7373] mb-2 max-w-3xl mx-auto">
            Explore healthcare, golf, parks, grocery, and everyday errands on an interactive map
            centered on the Cabochon Club sales office—filter by category to see what northwest
            Las Vegas buyers actually drive to.
          </p>
          <p className="mb-8">
            <Link
              href={NEARBY_AMENITIES_PATH}
              className="text-sm font-medium text-[#1c5087] hover:text-[#003a70] underline-offset-2 hover:underline"
            >
              Full nearby amenities guide →
            </Link>
          </p>
          <LazyNearbyAmenityMap compact={compact} />
        </div>
      </div>
    </section>
  );
}
