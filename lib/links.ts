/** True when href should use a native anchor (external or special schemes). */
export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:")
  );
}

export const linkClassName =
  "rounded-sm text-sm text-(--foreground)/80 hover:text-(--foreground) hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

/** Internal site links (footer nav, etc.) */
export const internalLinkClassName = linkClassName;

/** External / outbound links */
export const externalLinkClassName = linkClassName;
