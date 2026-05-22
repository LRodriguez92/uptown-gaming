import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageIntro } from "@/components/layout/PageIntro";
import { createPageMetadata } from "@/lib/metadata";
import { bookingFormUrl, siteConfig } from "@/config/site";
import { events } from "@/content/events";

export const metadata = createPageMetadata({
  title: "Events",
  description: "Upcoming events at Uptown Gaming. Tournaments, meetups, and community nights.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageIntro
        title="Upcoming Events"
        support="See what's on at Uptown Gaming. Tournaments, meetups, and open play."
      />

      <Section aria-label="Event list">
        <Container>
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
                  <p className="mt-2 leading-relaxed text-(--foreground)/80">
                    {event.shortDescription}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
          <div className="section-stack-lg flex flex-wrap gap-4">
            <Button
              as="link"
              href={siteConfig.community.startGgHub}
              external
              variant="secondary"
            >
              View hub on start.gg
            </Button>
              <Button as="link" href={bookingFormUrl} variant="secondary">
                Book the Space
              </Button>
              <Button
                as="link"
                href={`mailto:${siteConfig.contact.email}`}
                variant="ghost"
              >
                Email us
              </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
