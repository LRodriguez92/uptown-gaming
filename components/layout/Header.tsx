import Link from "next/link";
import { siteConfig } from "@/config/site";
import { mainNavLinks } from "@/config/nav";

/**
 * Base header placeholder. Step 4 will implement full Header with mobile nav.
 * Nav and brand come from config.
 */
export function Header() {
  return (
    <header className="border-b border-(--foreground)/10 bg-(--background)">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-brand-display text-xl font-bold text-(--foreground)"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-6">
          {mainNavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-(--foreground) hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
