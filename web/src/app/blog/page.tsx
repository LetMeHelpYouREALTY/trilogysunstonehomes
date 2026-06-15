import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { PageHero } from "@/components/page-hero";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { COMMUNITY_NAME, GEO_SUBHEAD, REALTOR_POSITIONING, ZIP } from "@/lib/hyperlocal";
import { getOptimizedImageUrl } from "@/lib/image-url";
import { getRssImageMap } from "@/lib/rss-images";
import { pageSeo } from "@/lib/seo-metadata";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: `Trilogy Sunstone & Las Vegas 55+ Blog | ${SITE_NAME_SHORT}`,
    description:
      `Articles on ${COMMUNITY_NAME} (${ZIP}) buying strategy, financing, Shea Homes building, Cabochon Club lifestyle, and northwest Las Vegas 55+ homeownership from Dr. Jan Duffy.`,
    path: "/blog",
  }),
};

export default async function BlogPage() {
  const rssImageMap = await getRssImageMap();
  const posts = BLOG_POSTS.map((post) => ({
    ...post,
    image: rssImageMap.get(post.slug) ?? post.image,
  }));

  return (
    <main className="min-h-screen flex flex-col">
      <PageHero image="blog">
        <h1 className="hero-title mb-4">
          Trilogy Sunstone &amp; Las Vegas 55+ Blog
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90 mb-3">
          Strategy, insights, and practical tips for {COMMUNITY_NAME} buyers in zip {ZIP} and
          northwest Las Vegas 55+ homeowners.
        </p>
        <p className="text-base md:text-lg max-w-3xl text-center text-white/80">
          {GEO_SUBHEAD}. {REALTOR_POSITIONING}
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Featured articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-5 flex flex-col"
              >
                {post.image ? (
                  <div className="mb-4 overflow-hidden rounded-md border border-[#d9e0e2] bg-white">
                    <Image
                      src={
                        getOptimizedImageUrl(post.image, {
                          width: 1200,
                          height: 675,
                          fit: "cover",
                          format: "webp",
                          quality: 85,
                        }) ?? post.image
                      }
                      alt={post.title}
                      width={1200}
                      height={675}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold text-[#1c5087] mb-3">{post.title}</h3>
                <p className="text-[#3d4544] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto text-[#003a70] font-medium hover:underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Want topic-specific help?</h2>
          <p className="text-[#3d4544] mb-6">
            Schedule a planning call with Dr. Jan Duffy for tailored guidance on your buying or
            building path.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CalendlyPopupButton className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-6 py-3 hover:bg-[#789e35] transition-colors">
              Schedule time with me
            </CalendlyPopupButton>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md border border-[#d9e0e2] bg-white text-[#3d4544] font-semibold px-6 py-3 hover:bg-[#f7fafb] transition-colors"
            >
              Explore all resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
