import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getEventsForPreview } from "@/content/events";

/**
 * Events preview: surface featured/upcoming events, link to Events page.
 * Uses content/events (getEventsForPreview). CONTENT_GUIDE: short previews, view more obvious.
 */
export function EventsPreviewSection() {
  const previewEvents = getEventsForPreview(2);
  return (
    <section aria-label="Events preview">
      <Container className="py-12 md:py-16">
        <SectionHeading
          title="Upcoming Events"
          support="See what's on at Uptown Gaming. Tournaments, meetups, and community nights."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {previewEvents.map((event) => (
            <li key={event.slug}>
              <Card className="h-full">
                <p className="text-sm font-medium text-(--foreground)/70">
                  {event.date}
                  {event.time ? ` · ${event.time}` : ""}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-(--foreground)">
                  {event.title}
                </h3>
                <p className="mt-2 text-(--foreground)/80">{event.shortDescription}</p>
                <p className="mt-4">
                  <Link
                    href="/events"
                    className="text-sm font-medium text-(--brand-primary) hover:underline"
                  >
                    View events
                  </Link>
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button as="link" href="/events" variant="secondary">
            View all events
          </Button>
        </div>
      </Container>
    </section>
  );
}
