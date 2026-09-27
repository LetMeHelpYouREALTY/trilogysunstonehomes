import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { LazyNearbyAmenityMap } from "@/components/nearby-amenity-map/lazy-nearby-amenity-map";
import { PageHero } from "@/components/page-hero";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  COMMUNITY_NAME,
  GEO_SUBHEAD,
  REALTOR_POSITIONING,
  ZIP,
} from "@/lib/hyperlocal";
import {
  AMENITIES_CATEGORY_SECTIONS,
  AMENITIES_PAGE_FAQ,
  FEATURED_NEARBY_PLACES,
  NEARBY_AMENITIES_PATH,
} from "@/lib/nearby-amenities-content";
import {
  amenitiesRealEstateAgentJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  nearbyFeaturedPlacesItemListJsonLd,
  trilogySunstoneCommunityPlaceJsonLd,
} from "@/lib/schema";
import { AGENT_LICENSE_LINE, PHONE_DISPLAY, PHONE_E164 } from "@/lib/site-contact";
import { pageSeo } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  ...pageSeo({
    title: `Nearby Amenities in ${COMMUNITY_NAME}, Las Vegas | Maps, Healthcare & Golf`,
    description: `Interactive map and hyperlocal guide to restaurants, grocery, parks, golf, and healthcare near ${COMMUNITY_NAME} (${ZIP}) in northwest Las Vegas—Skye Canyon errands, Red Rock Canyon, and commute times.`,
    path: NEARBY_AMENITIES_PATH,
  }),
};

export default function NearbyAmenitiesPage() {
  return (
    <>
      <JsonLd data={trilogySunstoneCommunityPlaceJsonLd()} />
      <JsonLd data={nearbyFeaturedPlacesItemListJsonLd(FEATURED_NEARBY_PLACES)} />
      <JsonLd data={faqPageJsonLd(AMENITIES_PAGE_FAQ)} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Nearby Amenities", path: NEARBY_AMENITIES_PATH },
        ])}
      />
      <JsonLd data={amenitiesRealEstateAgentJsonLd()} />
      <div className="pb-24 md:pb-0">
        <main className="flex min-h-screen flex-col">
          <PageHero image="amenities" size="default">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
              {GEO_SUBHEAD}
            </p>
            <h1 className="hero-title mb-4 text-white drop-shadow-sm">
              Nearby Amenities in {COMMUNITY_NAME}, Las Vegas
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/95">
              Healthcare, golf, parks, grocery, and northwest Las Vegas errands—mapped from the
              Cabochon Club sales center so you can compare daily-life distances before you buy.
            </p>
          </PageHero>

          <section className="py-16 md:py-20 bg-[#eaf0f2]" aria-labelledby="amenity-map-heading">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <h2 id="amenity-map-heading" className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
                  Interactive amenity map
                </h2>
                <p className="text-[#4e5655] mb-8 leading-relaxed">
                  Filter by category to explore places within a few miles of {COMMUNITY_NAME}. If
                  live search is unavailable, you still get a centered map embed plus verified
                  places for that category.
                </p>
                <LazyNearbyAmenityMap />
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-white" aria-labelledby="hyperlocal-guide-heading">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h2
                  id="hyperlocal-guide-heading"
                  className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-8"
                >
                  Hyperlocal guide by category
                </h2>
                <div className="space-y-10">
                  {AMENITIES_CATEGORY_SECTIONS.map((section) => (
                    <article key={section.id} id={section.id}>
                      <h3 className="text-xl font-semibold text-[#1c5087] mb-3">{section.heading}</h3>
                      <p className="text-[#4e5655] leading-relaxed">{section.body}</p>
                    </article>
                  ))}
                </div>
                <ul className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Featured verified places">
                  {FEATURED_NEARBY_PLACES.map((place) => (
                    <li key={place.name} className="card-elevated bg-[#eaf0f2] p-5">
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-[#eaf0f2]" aria-labelledby="amenities-faq-heading">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <h2 id="amenities-faq-heading" className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-8">
                  Nearby amenities FAQ
                </h2>
                <dl className="space-y-6">
                  {AMENITIES_PAGE_FAQ.map((item) => (
                    <div key={item.question} className="card-elevated bg-white p-6">
                      <dt className="font-semibold text-[#3d4544]">{item.question}</dt>
                      <dd className="mt-2 text-[#4e5655] leading-relaxed">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="section-cta py-16 md:py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-4 tracking-tight">
                Tour {COMMUNITY_NAME} with a local REALTOR®
              </h2>
              <p className="text-xl text-[#eaf0f2] mb-4 max-w-2xl mx-auto">{REALTOR_POSITIONING}</p>
              <p className="text-sm text-[#d9e0e2] mb-8">{AGENT_LICENSE_LINE}</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CalendlyPopupButton className="btn-primary-solid">Schedule a conversation</CalendlyPopupButton>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <RealScoutSearchCta variant="hero" className="sm:min-w-0" />
              </div>
              <p className="mt-6 text-sm text-[#d9e0e2]">
                Pair this map with our{" "}
                <Link href="/neighborhoods/trilogy-sunstone" className="link-accent">
                  community overview
                </Link>{" "}
                and{" "}
                <Link href="/amenities/cabochon-club" className="link-accent">
                  Cabochon Club guide
                </Link>
                .
              </p>
            </div>
          </section>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
