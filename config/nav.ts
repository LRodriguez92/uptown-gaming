/**
 * Navigation and footer link configuration. Matches approved MVP routes and IA.
 * Single source of truth for header nav and footer link groups.
 */

export type NavItem = {
  href: string;
  label: string;
};

/** Main nav order per IA: Home, Events, Book the Space, Venue, About, Contact. */
export const mainNavLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "Book the Space" },
  { href: "/venue", label: "Venue" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Footer "Explore" group: Events, Venue, About. */
export const footerExploreLinks: NavItem[] = [
  { href: "/events", label: "Events" },
  { href: "/venue", label: "Venue" },
  { href: "/about", label: "About" },
];

/** Footer "Book / Contact" group. */
export const footerBookContactLinks: NavItem[] = [
  { href: "/book", label: "Book the Space" },
  { href: "/contact", label: "Contact" },
];
