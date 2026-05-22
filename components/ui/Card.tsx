import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Simple content wrapper for event previews, venue features, highlights.
 * One core pattern; consistent padding and border. COMPONENT_SPEC: use when UI benefits from repeated card pattern.
 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-(--foreground)/20 bg-(--surface-light) p-5 md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
