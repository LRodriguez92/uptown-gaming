import { cn } from "@/lib/utils";

type SectionTone = "default" | "muted" | "elevated";

type SectionProps = {
  children: React.ReactNode;
  /** Accessible section label */
  "aria-label": string;
  tone?: SectionTone;
  className?: string;
};

const toneStyles: Record<SectionTone, string> = {
  default: "",
  muted: "border-t border-(--foreground)/10 bg-(--surface-dark)",
  elevated: "border-t border-(--foreground)/10 bg-(--surface-light)",
};

/**
 * Page section wrapper — consistent vertical rhythm and optional muted band.
 */
export function Section({
  children,
  "aria-label": ariaLabel,
  tone = "default",
  className,
}: SectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn("py-14 md:py-20", toneStyles[tone], className)}
    >
      {children}
    </section>
  );
}
