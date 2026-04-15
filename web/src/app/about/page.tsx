import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Trilogy Sunstone | Las Vegas 55+ Community",
  description:
    "Learn about Trilogy Sunstone, Las Vegas' premier 55+ active lifestyle community. New homes, amenities, and a vibrant neighborhood in Southern Nevada.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          About Trilogy Sunstone
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
          Las Vegas&apos; premier 55+ active lifestyle community—where new homes, amenities,
          and a vibrant neighborhood come together.
        </p>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-6">Our Community</h2>
            <p className="text-[#3d4544] leading-relaxed mb-4">
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="text-[#1c5087] hover:text-[#003a70] font-medium"
              >
                Trilogy Sunstone
              </Link>{" "}
              offers an active adult lifestyle in one of Las Vegas&apos; most sought-after
              areas. Residents enjoy a close-knit community, thoughtfully designed new homes,
              and amenities built for an engaged, healthy life.
            </p>
            <p className="text-[#3d4544] leading-relaxed">
              Whether you&apos;re downsizing, relocating, or looking for your next chapter,
              we&apos;re here to help you{" "}
              <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                find the right home
              </Link>{" "}
              and navigate the Trilogy Sunstone market with our{" "}
              <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                buyer&apos;s guide
              </Link>{" "}
              and personalized support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-8">
              Why Trilogy Sunstone
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">55+ Active Lifestyle</h3>
                <p className="text-[#6b7373] text-sm">
                  Community designed for active adults with amenities and events that support
                  your lifestyle.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">New Construction</h3>
                <p className="text-[#6b7373] text-sm">
                  Discover{" "}
                  <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                    new homes
                  </Link>{" "}
                  built for comfort, accessibility, and modern living.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">Las Vegas Location</h3>
                <p className="text-[#6b7373] text-sm">
                  Enjoy Southern Nevada&apos;s climate, entertainment, and healthcare while
                  living in a dedicated community.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-[#3d4544] mb-6">
              Explore{" "}
              <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                Trilogy Sunstone listings
              </Link>
              , read our{" "}
              <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                FAQ
              </Link>
              , or get in touch for personalized help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#1c5087] hover:bg-[#003a70] text-white font-semibold px-6 py-3 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
              >
                View Listings
              </Link>
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="inline-flex items-center justify-center border border-[#d9e0e2] bg-white text-[#3d4544] hover:bg-[#eaf0f2] font-semibold px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
              >
                Community Details
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#d9e0e2] bg-white text-[#3d4544] hover:bg-[#eaf0f2] font-semibold px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
