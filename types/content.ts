/**
 * Shared content types per CONTENT_MODEL. Used by content/ and consuming pages/sections.
 */

export type EventStatus =
  | "upcoming"
  | "sold_out"
  | "cancelled"
  | "completed";

export type Event = {
  title: string;
  slug: string;
  date: string;
  time?: string;
  status?: EventStatus;
  location?: string;
  shortDescription: string;
  fullDescription?: string;
  featuredImage?: string;
  organizer?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tags?: string[];
  featured?: boolean;
};

export type VenueFeature = {
  title: string;
  slug: string;
  shortDescription: string;
  icon?: string;
  category?: string;
  featured?: boolean;
  displayOrder?: number;
};

export type AboutContent = {
  story: string[];
  mission: string;
  values: string;
  team: string;
};
