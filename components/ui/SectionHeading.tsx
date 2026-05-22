import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Optional eyebrow or label above the heading. */
  eyebrow?: string;
  /** Section title. Use a single heading level per section (e.g. h2). */
  title: string;
  /** Optional short support copy below the title. */
  support?: string;
  /** Heading level for accessibility (default h2). */
  as?: "h1" | "h2" | "h3";
  /** Center align (e.g. for hero/CTA); default left. */
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

/**
 * Reusable section heading block: optional eyebrow, title, optional support copy.
 * Keeps hierarchy consistent across routes. DESIGN_SYSTEM: one pattern site-wide.
 */
export function SectionHeading({
  eyebrow,
  title,
  support,
  as: Tag = "h2",
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wide text-(--brand-primary)">
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-brand-body text-2xl font-bold text-(--foreground) md:text-3xl",
          titleClassName
        )}
      >
        {title}
      </Tag>
      {support && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-(--foreground)/80 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {support}
        </p>
      )}
    </div>
  );
}
