import Link from "next/link";

/**
 * Base header placeholder. Step 4 will implement full Header with mobile nav.
 * Approved nav: Home, Events, Book the Space, Venue, About, Contact.
 */
export function Header() {
  return (
    <header className="border-b border-(--foreground)/10 bg-(--background)">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-brand-display text-xl font-bold text-(--foreground)"
          aria-label="Uptown Gaming home"
        >
          Uptown Gaming
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-6">
          <Link href="/" className="text-(--foreground) hover:underline">
            Home
          </Link>
          <Link href="/events" className="text-(--foreground) hover:underline">
            Events
          </Link>
          <Link href="/book" className="text-(--foreground) hover:underline">
            Book the Space
          </Link>
          <Link href="/venue" className="text-(--foreground) hover:underline">
            Venue
          </Link>
          <Link href="/about" className="text-(--foreground) hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-(--foreground) hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
