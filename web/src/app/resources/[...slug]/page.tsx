import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceContentPage } from "@/components/resource-content-page";
import { getAllResourcePages, getResourcePageBySlug } from "@/lib/resource-pages";

type ResourceRouteProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  return getAllResourcePages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/resources/${slug.join("/")}` },
  };
}

export default async function ResourceDetailPage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ResourceContentPage page={page} />;
}
