import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  /** Path for canonical and openGraph URL (e.g. "/events"). Omit for home. */
  path?: string;
};

/**
 * Builds Next.js Metadata for a route. Uses site config for fallbacks and base URL.
 * Use in page or layout: export const metadata = createPageMetadata({ title: "Events", ... });
 */
export function createPageMetadata(options: PageMetadataOptions = {}): Metadata {
  const { title, description, path = "" } = options;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description ?? siteConfig.shortDescription;
  const url = path ? `${siteConfig.baseUrl}${path}` : siteConfig.baseUrl;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
    alternates: path ? { canonical: url } : undefined,
  };
}
