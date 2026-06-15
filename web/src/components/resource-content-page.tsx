import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RESOURCE_LOCAL_SECTION } from "@/lib/hyperlocal";
import { getHeroImageForResourceSlug } from "@/lib/hero-images";
import type { ResourcePage } from "@/lib/resource-pages";
import { breadcrumbListJsonLd } from "@/lib/schema";

type ResourceContentPageProps = {
  page: ResourcePage;
};

export function ResourceContentPage({ page }: ResourceContentPageProps) {
  const formatLabel = (href: string) =>
    href
      .replace(/^\/resources\//, "")
      .replace(/^\/+/, "")
      .split("/")
      .at(-1)
      ?.replaceAll("-", " ")
      .replace(/\b\w/g, (m) => m.toUpperCase()) ?? href;

  const resourcePath = `/resources/${page.slug.join("/")}`;
  const heroImage = getHeroImageForResourceSlug(page.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: page.h1, path: resourcePath },
        ])}
      />
      <main className="min-h-screen flex flex-col">
      <PageHero imageSrc={heroImage.src} imageAlt={heroImage.alt}>
        <h1 className="hero-title mb-4 text-center">{page.h1}</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90">{page.intro}</p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {page.sections.map((section) => (
              <article key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#3d4544]">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
            <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6">
              <h2 className="text-2xl font-bold text-[#3d4544]">{RESOURCE_LOCAL_SECTION.heading}</h2>
              {RESOURCE_LOCAL_SECTION.body.map((paragraph) => (
                <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-[#3d4544] leading-relaxed">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  Trilogy Sunstone community guide
                </Link>
                {" · "}
                <Link href="/contact" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  Contact Dr. Jan Duffy
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Need personalized guidance?</h2>
            <p className="text-[#3d4544] mb-6">
              Schedule a consultation with Dr. Jan Duffy to map your next step.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CalendlyPopupButton className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-6 py-3 hover:bg-[#789e35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8bb63e] focus:ring-offset-2">
                Schedule time with me
              </CalendlyPopupButton>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-md border border-[#d9e0e2] bg-white text-[#3d4544] font-semibold px-6 py-3 hover:bg-[#f7fafb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
              >
                View all resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {page.related.length > 0 ? (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6 text-center">Related resources</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {page.related.map((href) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-4 text-[#1c5087] font-medium hover:bg-white hover:text-[#003a70] transition-colors"
                    >
                      {formatLabel(href)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
    </main>
    </>
  );
}
