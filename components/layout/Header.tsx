import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { mainNavLinks } from "@/config/nav";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";

const navLinkClassName =
  "rounded-sm text-(--foreground) hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

export function Header() {
  const standardLinks = mainNavLinks.filter((item) => !item.cta);
  const ctaLinks = mainNavLinks.filter((item) => item.cta);

  return (
    <header className="border-b border-(--foreground)/15 bg-(--surface-dark)">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-4 md:min-h-[4.5rem] md:py-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/logos/UG_FullLogo_Green.png"
            alt={siteConfig.name}
            width={160}
            height={36}
            priority
            className="mt-[-2px]"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-x-4 md:flex lg:gap-x-5"
        >
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm lg:gap-x-5 lg:text-base">
            {standardLinks.map((item) => (
              <li key={item.href}>
                <NavLink item={item} className={navLinkClassName} />
              </li>
            ))}
          </ul>
          <ul className="ml-2 flex items-center gap-2 border-l border-(--foreground)/15 pl-4 lg:ml-3 lg:pl-5">
            {ctaLinks.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
