"use client";

import { useEffect, useRef, useState } from "react";
import { REALSCOUT_WEB_COMPONENTS_SCRIPT_URL } from "@/lib/realscout-widget";
import { RealScoutOfficeListings } from "@/components/realscout-office-listings";

type LoadState = "pending" | "ready" | "error";

/**
 * Loads RealScout web components only when the listings block nears the viewport (saves main-thread + network on LCP).
 */
export function LazyRealScoutOfficeListings() {
  const [loadState, setLoadState] = useState<LoadState>("pending");
  const containerRef = useRef<HTMLDivElement>(null);
  const appendOnce = useRef(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const loadScript = () => {
      if (document.querySelector(`script[src="${REALSCOUT_WEB_COMPONENTS_SCRIPT_URL}"]`)) {
        setLoadState("ready");
        return;
      }
      if (appendOnce.current) return;
      appendOnce.current = true;
      if (!document.querySelector(`link[rel="preconnect"][href="https://em.realscout.com"]`)) {
        const pre = document.createElement("link");
        pre.rel = "preconnect";
        pre.href = "https://em.realscout.com";
        pre.crossOrigin = "anonymous";
        document.head.appendChild(pre);
      }
      if (!document.querySelector(`link[rel="preconnect"][href="https://www.realscout.com"]`)) {
        const pre = document.createElement("link");
        pre.rel = "preconnect";
        pre.href = "https://www.realscout.com";
        pre.crossOrigin = "anonymous";
        document.head.appendChild(pre);
      }
      const script = document.createElement("script");
      script.src = REALSCOUT_WEB_COMPONENTS_SCRIPT_URL;
      script.type = "module";
      script.async = true;
      script.onload = () => setLoadState("ready");
      script.onerror = () => setLoadState("error");
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        loadScript();
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {loadState === "ready" ? (
        <RealScoutOfficeListings />
      ) : loadState === "error" ? (
        <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-800">
          Listings could not load. Use the inventory search links on this page or refresh.
        </p>
      ) : (
        <div
          className="realscout-wrapper flex min-h-[400px] w-full items-center justify-center rounded-lg border border-slate-200 bg-white shadow"
          aria-hidden="true"
        >
          <span className="text-sm text-slate-500">Loading listings…</span>
        </div>
      )}
    </div>
  );
}
