import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/metadata";
import { events } from "@/content/events";

export const metadata = createPageMetadata({
  title: "Events",
  description: "Upcoming events at Uptown Gaming. Tournaments, meetups, and community nights.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <section aria-label="Events intro">
        <Container className="py-12 md:py-16">
          <SectionHeading
            as="h1"
            title="Upcoming Events"
            support="See what’s on at Uptown Gaming. Tournaments, meetups, and open play."
          />
        </Container>
      </section>

      <section aria-label="Event list">
        <Container className="pb-12 md:pb-16">
          <div className="rounded-lg bg-(--surface-dark) border border-(--foreground)/15 p-6 md:p-8">
            <ul className="grid gap-6 sm:grid-cols-2">
              {events.map((event) => (
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
                  </Card>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="link" href="/book" variant="secondary">
                Book the Space
              </Button>
              <Button as="link" href="/contact" variant="ghost">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
