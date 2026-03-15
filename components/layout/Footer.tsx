import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  footerExploreLinks,
  footerBookContactLinks,
} from "@/config/nav";

/**
 * Base footer placeholder. Step 4 will implement full Footer with groups.
 * Content from config: brand, Explore, Book/Contact, Social, copyright.
 */
export function Footer() {
  return (
    <footer className="border-t border-(--foreground)/10 bg-(--background)">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-8">
          <div>
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
                  <Link
                    href={href}
                    className="text-sm text-(--foreground)/80 hover:underline"
                  >
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
                  <Link
                    href={href}
                    className="text-sm text-(--foreground)/80 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Social
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-(--foreground)/80 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-(--foreground)/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
