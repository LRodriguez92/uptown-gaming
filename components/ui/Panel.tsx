import { cn } from "@/lib/utils";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Elevated content panel — CTAs, grouped blocks, list wrappers.
 */
export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-(--foreground)/15 bg-(--surface-dark) p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
