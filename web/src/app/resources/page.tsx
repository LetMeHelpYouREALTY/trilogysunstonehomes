import type { Metadata } from "next";
import Link from "next/link";
import { COMMUNITY_NAME, LOCAL_CONTEXT_PARAGRAPH, ZIP } from "@/lib/hyperlocal";
import { getAllResourcePages } from "@/lib/resource-pages";
import { pageSeo } from "@/lib/seo-metadata";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: `Trilogy Sunstone Resources (${ZIP}) | ${SITE_NAME_SHORT}`,
    description:
      `Browse ${COMMUNITY_NAME} and northwest Las Vegas homebuyer resources from Dr. Jan Duffy—financing, Shea Homes building, design, and ownership guidance in 89143.`,
    path: "/resources",
  }),
};

const sections = [
  "berkshire-hathaway-home-services-resources",
  "trilogy-sunstone-homes-by-dr-jan-duffy-resources",
  "building-resources",
  "designing-resources",
];

export default function ResourcesHubPage() {
  const pages = getAllResourcePages();
  const featured = pages.filter((page) => page.slug.length === 1 && sections.includes(page.slug[0]));
  const other = pages.filter((page) => !(page.slug.length === 1 && sections.includes(page.slug[0])));

  const toHref = (slug: string[]) => `/resources/${slug.join("/")}`;

  return (
    <main className="min-h-screen flex flex-col">
      <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="hero-title mb-4">Resource Library</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90 mb-3">
          Practical guidance for buying, financing, building, and owning at {COMMUNITY_NAME} in
          northwest Las Vegas (zip {ZIP}) and the greater Las Vegas 55+ market.
        </p>
        <p className="text-base md:text-lg max-w-3xl text-center text-white/80">
          {LOCAL_CONTEXT_PARAGRAPH}
        </p>
      </section>

      <section className="py-10 md:py-12 bg-[#1c5087]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Start with the {COMMUNITY_NAME} community page
          </h2>
          <p className="text-white/90 mb-5 leading-relaxed">
            Floor plans, HOA context, Cabochon Club amenities, and current inventory for zip{" "}
            {ZIP}—then return here for financing, building, and ownership guides.
          </p>
          <Link
            href="/neighborhoods/trilogy-sunstone"
            className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-6 py-3 hover:bg-[#789e35] transition-colors"
          >
            Explore {COMMUNITY_NAME} community guide
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Resource categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((page) => (
              <Link
                key={page.slug.join("/")}
                href={toHref(page.slug)}
                className="rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-5 hover:bg-white transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#1c5087] mb-2">{page.h1}</h3>
                <p className="text-[#3d4544] text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-6">All resources</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {other.map((page) => (
              <li key={page.slug.join("/")}>
                <Link
                  href={toHref(page.slug)}
                  className="block rounded-lg border border-[#d9e0e2] bg-white p-4 text-[#1c5087] font-medium hover:text-[#003a70] hover:bg-[#f7fafb] transition-colors"
                >
                  {page.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
