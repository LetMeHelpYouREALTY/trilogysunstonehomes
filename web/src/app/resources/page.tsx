import type { Metadata } from "next";
import Link from "next/link";
import { getAllResourcePages } from "@/lib/resource-pages";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `Resources | ${SITE_NAME_SHORT}`,
  description:
    "Browse Trilogy Sunstone and Las Vegas homebuyer resources from Dr. Jan Duffy, including financing, building, and ownership guidance.",
  alternates: { canonical: "/resources" },
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Resource Library</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90">
          Practical guidance for buying, financing, building, and owning in Trilogy Sunstone and
          the greater Las Vegas market.
        </p>
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
