/**
 * Site-level configuration. Single source of truth for metadata, contact, and social placeholders.
 * Step 2 — shared foundations. Update placeholders when real values are available.
 */

export const siteConfig = {
  name: "Uptown Gaming",
  shortDescription:
    "Community-driven gaming events, venue experiences, and bookings.",
  /** Used for absolute URLs in metadata (e.g. open graph). Set when deployment URL is known. */
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://uptowngaming.com",
  /** Placeholder. Replace with real contact email when available. */
  contact: {
    email: "hello@uptowngaming.com",
    /** Optional: placeholder for a general inquiry or booking email. */
    bookingEmail: "book@uptowngaming.com",
  },
  /** Social links. Use placeholder URLs until real profiles exist. */
  social: {
    instagram: "https://instagram.com/uptowngaming",
    /** Add other approved channels when available (e.g. Twitter/X, Discord). */
  },
} as const;

export type SiteConfig = typeof siteConfig;
