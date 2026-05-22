import { bookingFormUrl, siteConfig } from "@/config/site";

/**
 * Navigation and footer link configuration. Matches approved MVP routes and IA.
 */

export type NavItem = {
  href: string;
  label: string;
  /** When true, open in a new tab. Omit or false for same-tab (including external URLs). */
  external?: boolean;
  /** Green primary CTA styling (header / mobile nav). */
  cta?: boolean;
};

/** Main nav — Book the Space is last as a CTA (Monday form, same tab). */
export const mainNavLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: siteConfig.community.menuUrl, label: "Menu" },
  { href: "/about", label: "About" },
  {
    href: bookingFormUrl,
    label: "Book the Space",
    cta: true,
  },
];

/** Footer "Explore" group: Events, Venue, About. */
export const footerExploreLinks: NavItem[] = [
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: "/about", label: "About" },
];

/** Footer booking and email. */
export const footerBookingLinks: NavItem[] = [
  { href: bookingFormUrl, label: "Book the Space" },
  { href: `mailto:${siteConfig.contact.email}`, label: siteConfig.contact.email },
];
