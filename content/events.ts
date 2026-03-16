import type { Event } from "@/types/content";

/**
 * Events content. Single source for homepage preview and /events page.
 * CONTENT_MODEL: Event[]. Step 8 — local structured content.
 */
export const events: Event[] = [
  {
    slug: "weekly-open-play",
    title: "Weekly Open Play",
    date: "Every Friday",
    time: "6–10 PM",
    shortDescription:
      "Drop-in gaming and community hangout. All skill levels welcome.",
    status: "upcoming",
    featured: true,
  },
  {
    slug: "monthly-tournament",
    title: "Monthly Tournament",
    date: "First Saturday",
    time: "12 PM",
    shortDescription:
      "Competitive brackets and casual side events. Prizes and bragging rights.",
    status: "upcoming",
    featured: true,
  },
];

/** Events to show on homepage preview (e.g. featured or first N). */
export function getEventsForPreview(limit = 2): Event[] {
  const featured = events.filter((e) => e.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return events.slice(0, limit);
}
