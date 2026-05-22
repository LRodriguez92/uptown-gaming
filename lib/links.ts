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

export const externalLinkClassName =
  "rounded-sm text-sm text-(--foreground)/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";
