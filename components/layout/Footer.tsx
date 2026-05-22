import Link from "next/link";
import {
  siteConfig,
  socialLinks,
  communityLinks,
} from "@/config/site";
import { footerExploreLinks, footerBookingLinks } from "@/config/nav";
import { NavLink } from "@/components/layout/NavLink";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { externalLinkClassName, internalLinkClassName } from "@/lib/links";
import { cn } from "@/lib/utils";

const socialIconLinkClassName =
  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-(--foreground)/80 transition-colors hover:bg-(--foreground)/10 hover:text-(--foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2";

function FooterSocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-nowrap items-center gap-1", className)}>
      {socialLinks.map(({ href, label, platform }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={socialIconLinkClassName}
          >
            <SocialIcon platform={platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { fundraising, community } = siteConfig;

  return (
    <footer className="border-t border-(--foreground)/15 bg-(--surface-dark)">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link
              href="/"
              className="font-brand-display text-lg font-bold text-(--foreground)"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-(--foreground)/80">
              {siteConfig.shortDescription}
            </p>
            <FooterSocialIcons className="mt-4 hidden lg:flex" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Explore
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {footerExploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={internalLinkClassName}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">Book</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {footerBookingLinks.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    className={internalLinkClassName}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Community
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
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
              <ul className="mt-3 flex flex-col gap-2">
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
        </div>

        <FooterSocialIcons className="mt-8 lg:hidden" />

        <p className="mt-10 border-t border-(--foreground)/10 pt-6 text-xs text-(--foreground)/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
