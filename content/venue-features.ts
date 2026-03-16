import type { VenueFeature } from "@/types/content";

/**
 * Venue features content. Single source for homepage and /venue page.
 * CONTENT_MODEL: VenueFeature[]. Step 8 — local structured content.
 */
export const venueFeatures: VenueFeature[] = [
  {
    slug: "flexible-layout",
    title: "Flexible Layout",
    shortDescription:
      "Configurable setup for tournaments, meetups, and private events. Tables, screens, and seating to match your needs.",
    displayOrder: 1,
  },
  {
    slug: "gaming-ready",
    title: "Gaming-Ready",
    shortDescription:
      "Built for competitive and casual play. Reliable tech and space designed for community gaming.",
    displayOrder: 2,
  },
  {
    slug: "central-location",
    title: "Central Location",
    shortDescription:
      "Easy to find and reach. A dedicated space for your group or brand activation.",
    displayOrder: 3,
  },
];
