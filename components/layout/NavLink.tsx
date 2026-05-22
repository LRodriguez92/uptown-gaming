import Link from "next/link";
import { isExternalHref } from "@/lib/links";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/config/nav";

const navCtaClassName =
  "inline-flex min-h-[40px] items-center justify-center rounded-md bg-(--brand-primary) px-4 py-2 text-sm font-medium text-(--surface-light) transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

const mobileNavCtaClassName =
  "min-h-[44px] w-full justify-center rounded-md bg-(--brand-primary) px-4 py-3 text-lg font-medium text-(--surface-light) hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

type NavLinkProps = {
  item: NavItem;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  /** Wider CTA tap target in mobile drawer. */
  mobile?: boolean;
};

export function NavLink({ item, className, style, onClick, mobile }: NavLinkProps) {
  const { href, label, external, cta } = item;
  const useAnchor = isExternalHref(href);
  const openInNewTab = external === true;
  const styles = cn(
    cta && (mobile ? mobileNavCtaClassName : navCtaClassName),
    className
  );

  if (useAnchor) {
    return (
      <a
        href={href}
        onClick={onClick}
        style={style}
        className={styles}
        {...(openInNewTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} style={style} className={styles}>
      {label}
    </Link>
  );
}
