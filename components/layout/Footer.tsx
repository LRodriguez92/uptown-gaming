import Link from "next/link";

/**
 * Base footer placeholder. Step 4 will implement full Footer with groups.
 * IA: Brand, Explore (Events, Venue, About), Book/Contact, Social, copyright.
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
              Uptown Gaming
            </Link>
            <p className="mt-2 text-sm text-(--foreground)/80">
              Community-driven gaming events and venue.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Explore
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>
                <Link href="/events" className="text-sm text-(--foreground)/80 hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/venue" className="text-sm text-(--foreground)/80 hover:underline">
                  Venue
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-(--foreground)/80 hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Book / Contact
            </h3>
            <ul className="mt-2 flex flex-col gap-1">
              <li>
                <Link href="/book" className="text-sm text-(--foreground)/80 hover:underline">
                  Book the Space
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-(--foreground)/80 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-(--foreground)/60">
          © {new Date().getFullYear()} Uptown Gaming. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
