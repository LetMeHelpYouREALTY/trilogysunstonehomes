"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MAP_CONTAINER_MIN_HEIGHT } from "@/components/nearby-amenity-map/types";

const NearbyAmenityMap = dynamic(
  () =>
    import("@/components/nearby-amenity-map/nearby-amenity-map").then((m) => m.NearbyAmenityMap),
  { ssr: false },
);

type LazyNearbyAmenityMapProps = {
  compact?: boolean;
};

/**
 * Loads the Google Maps amenity map when the section enters the viewport.
 */
export function LazyNearbyAmenityMap({ compact = false }: LazyNearbyAmenityMapProps) {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="w-full" style={{ minHeight: MAP_CONTAINER_MIN_HEIGHT }}>
      {visible ? (
        <NearbyAmenityMap compact={compact} />
      ) : (
        <div
          className="flex min-h-[420px] items-center justify-center rounded-lg border border-[#d9e0e2] bg-[#eaf0f2] text-sm text-[#6b7373]"
          aria-hidden="true"
        >
          Map loads when you scroll here…
        </div>
      )}
    </div>
  );
}
