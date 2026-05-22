import Link from "next/link";
import { cn } from "@/lib/utils";
import { isExternalHref } from "@/lib/links";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-(--brand-primary) text-(--surface-light) hover:opacity-90 focus-visible:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-(--foreground) border border-(--foreground)/20 hover:border-(--foreground)/40 hover:bg-(--foreground)/5",
  ghost:
    "bg-transparent text-(--foreground) hover:bg-(--foreground)/5 border border-transparent",
};

type BaseButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  /** Open external http(s) links in a new tab. Booking / internal paths ignore this. */
  external?: boolean;
};

type ButtonAsButton = BaseButtonProps & {
  as?: "button";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>;

type ButtonAsLink = BaseButtonProps & {
  as: "link";
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] px-5 py-2.5 text-center";

/**
 * Reusable CTA button. Primary for main actions (e.g. Book the Space), secondary for supporting actions.
 * Supports button, internal Link, or external anchor when href is absolute.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    className,
    children,
    external = false,
    ...rest
  } = props;

  const styles = cn(baseStyles, variantStyles[variant], className);

  if (props.as === "link") {
    const { as, href, external: openExternal, ...linkRest } = rest as ButtonAsLink;
    const useAnchor = isExternalHref(href);
    const openInNewTab = useAnchor && openExternal;

    if (useAnchor) {
      return (
        <a
          href={href}
          className={styles}
          {...(openInNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...linkRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} {...linkRest}>
        {children}
      </Link>
    );
  }

  const {
    as,
    type = "button",
    ...buttonRest
  } = rest as ButtonAsButton & {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };
  return (
    <button type={type} className={styles} {...buttonRest}>
      {children}
    </button>
  );
}
