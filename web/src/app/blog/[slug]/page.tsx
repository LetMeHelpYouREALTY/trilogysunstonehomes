import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { getOptimizedImageUrl } from "@/lib/image-url";
import { getRssImageMap } from "@/lib/rss-images";
import { blogPostingJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const rssImageMap = await getRssImageMap();
  const image = getOptimizedImageUrl(rssImageMap.get(post.slug) ?? post.image, {
    width: 1200,
    height: 630,
    fit: "cover",
    format: "webp",
    quality: 85,
  });

  return {
    title: `${post.title} | ${SITE_NAME_SHORT}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: image ? [{ url: image, width: 1200, height: 630, alt: post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const rssImageMap = await getRssImageMap();
  const image = rssImageMap.get(post.slug) ?? post.image;

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          image: image
            ? getOptimizedImageUrl(image, {
                width: 1200,
                height: 630,
                fit: "cover",
                format: "webp",
                quality: 85,
              }) ?? image
            : undefined,
        })}
      />
      <main className="min-h-screen flex flex-col">
      <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <p className="text-sm text-white/80 mb-2">
          {new Date(post.publishedAt).toLocaleDateString()} · {post.readMinutes} min read
        </p>
        <h1 className="hero-title mb-4">{post.title}</h1>
        <p className="text-lg md:text-xl max-w-3xl text-white/90">{post.excerpt}</p>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {image ? (
            <div className="mb-8 overflow-hidden rounded-xl border border-[#d9e0e2]">
              <Image
                src={
                  getOptimizedImageUrl(image, {
                    width: 1600,
                    height: 900,
                    fit: "cover",
                    format: "webp",
                    quality: 85,
                  }) ?? image
                }
                alt={post.title}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="space-y-10">
            {post.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl font-bold text-[#3d4544] mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {post.relatedLinks && post.relatedLinks.length > 0 ? (
            <nav
              aria-label="Related guides and pages"
              className="mt-12 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6"
            >
              <h2 className="text-lg font-bold text-[#3d4544] mb-3">Related guides</h2>
              <ul className="space-y-2">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#1c5087] hover:text-[#003a70] font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Need help applying this strategy?</h2>
          <p className="text-[#3d4544] mb-6">
            Schedule a planning call with Dr. Jan Duffy for personalized next steps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CalendlyPopupButton className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-6 py-3 hover:bg-[#789e35] transition-colors">
              Schedule time with me
            </CalendlyPopupButton>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-[#d9e0e2] bg-white text-[#3d4544] font-semibold px-6 py-3 hover:bg-[#f7fafb] transition-colors"
            >
              Back to blog
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
