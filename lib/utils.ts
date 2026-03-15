/**
 * Shared utility helpers. Keep minimal for MVP.
 */

/**
 * Merges class names. Filters out falsy values. Use for conditional Tailwind classes.
 */
export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
