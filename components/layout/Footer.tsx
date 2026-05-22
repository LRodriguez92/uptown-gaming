import Link from "next/link";
import {
  siteConfig,
  socialLinks,
  communityLinks,
} from "@/config/site";
import {
  footerExploreLinks,
  footerBookContactLinks,
} from "@/config/nav";
import { Container } from "@/components/ui/Container";
import { externalLinkClassName } from "@/lib/links";

/**
 * Shared footer: brand, Explore, Book/Contact, Community, Support, Social.
 */
export function Footer() {
  const { fundraising, community } = siteConfig;

  return (
    <footer className="border-t border-(--foreground)/15 bg-(--surface-dark)">
      <Container className="py-8">
        <div className="flex flex-wrap gap-8">
          <div className="min-w-[12rem]">
            <Link
              href="/"
              className="font-brand-display text-lg font-bold text-(--foreground)"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-(--foreground)/80">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Explore
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              {footerExploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={externalLinkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Book / Contact
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              {footerBookContactLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={externalLinkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Community
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              {communityLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClassName}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {fundraising.showSupportLink && (
            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Support
              </h3>
              <ul className="mt-2 flex flex-col gap-1">
                <li>
                  <a
                    href={community.gofundmeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClassName}
                  >
                    {community.gofundmeTitle}
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">Social</h3>
            <ul className="mt-2 flex flex-col gap-1">
              {socialLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClassName}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-(--foreground)/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
