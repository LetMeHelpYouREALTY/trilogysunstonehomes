import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Neighborhoods & Communities | ${SITE_NAME_SHORT}`,
  description:
    "Explore Trilogy Sunstone and nearby Las Vegas 55+ and active adult communities. Find the right neighborhood for your next home.",
  alternates: { canonical: "/neighborhoods" },
};

export default function NeighborhoodsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Neighborhoods We Serve
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
          Trilogy Sunstone and surrounding Las Vegas area communities.
        </p>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#3d4544] mb-8">Featured Community</h2>
            <div className="rounded-lg border border-[#d9e0e2] bg-[#eaf0f2] p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#1c5087] mb-2">
                <Link href="/neighborhoods/trilogy-sunstone" className="hover:text-[#003a70]">
                  Trilogy Sunstone
                </Link>
              </h3>
              <p className="text-[#3d4544] mb-4">
                Las Vegas&apos; premier 55+ active lifestyle community.{" "}
                <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  New homes
                </Link>{" "}
                for sale, resort-style amenities, and a vibrant neighborhood designed for active
                adults.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  Learn About the Community
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  View Trilogy Sunstone Listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Nearby Las Vegas Areas</h2>
            <p className="text-[#3d4544] mb-8">
              We also serve buyers and sellers in surrounding Southern Nevada communities. Ask
              us about Summerlin, Henderson, Green Valley, and more.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-white rounded-lg p-4 shadow">
                <span className="font-medium text-[#3d4544]">Summerlin</span>
                <p className="text-sm text-[#6b7373] mt-1">
                  Master-planned community west of Las Vegas.
                </p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow">
                <span className="font-medium text-[#3d4544]">Henderson</span>
                <p className="text-sm text-[#6b7373] mt-1">
                  Family and active adult communities southeast of Las Vegas.
                </p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow">
                <span className="font-medium text-[#3d4544]">Green Valley</span>
                <p className="text-sm text-[#6b7373] mt-1">Henderson area with strong 55+ options.</p>
              </li>
              <li className="bg-white rounded-lg p-4 shadow">
                <span className="font-medium text-[#3d4544]">North Las Vegas</span>
                <p className="text-sm text-[#6b7373] mt-1">
                  Growing area with new construction and value.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Not Sure Where to Start?</h2>
            <p className="text-[#3d4544] mb-6">
              Read our{" "}
              <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                buyer&apos;s guide
              </Link>{" "}
              or check the{" "}
              <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                FAQ
              </Link>
              .
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
