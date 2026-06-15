import type { Metadata } from "next";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/** Consistent Open Graph and Twitter metadata for indexable pages. */
export function pageSeo({
  title,
  description,
  path,
  type = "website",
}: PageSeoInput): Pick<Metadata, "title" | "description" | "alternates" | "openGraph" | "twitter"> {
  const canonical = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
