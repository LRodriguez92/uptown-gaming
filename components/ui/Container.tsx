import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrow width for long-form text; default is standard. */
  variant?: "default" | "narrow";
};

/**
 * Standard content container: max width, centered, responsive horizontal padding.
 * Use for page sections. One pattern site-wide per COMPONENT_SPEC / DESIGN_SYSTEM.
 */
export function Container({
  children,
  className,
  variant = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4",
        variant === "default" && "max-w-6xl",
        variant === "narrow" && "max-w-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
