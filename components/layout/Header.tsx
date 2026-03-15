import Link from "next/link";
import { siteConfig } from "@/config/site";
import { mainNavLinks } from "@/config/nav";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * Shared header: logo, approved nav (desktop inline, mobile via MobileNav).
 * Uses Container; mobile-first per Step 4 / COMPONENT_SPEC.
 */
export function Header() {
  return (
    <header className="border-b border-(--foreground)/10 bg-(--background)">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-brand-display text-xl font-bold text-(--foreground)"
          aria-label={`${siteConfig.name} home`}
        >
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden flex-wrap items-center gap-6 md:flex"
        >
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
        <MobileNav />
      </Container>
    </header>
  );
}
