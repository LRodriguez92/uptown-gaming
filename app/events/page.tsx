import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TournamentEventsList } from "@/components/events/TournamentEventsList";
import { createPageMetadata } from "@/lib/metadata";
import { getUpcomingTournamentsWithEvents } from "@/lib/startgg";
import { bookingFormUrl, siteConfig } from "@/config/site";

export const metadata = createPageMetadata({
  title: "Events",
  description:
    "Upcoming events at Uptown Gaming. Tournaments, meetups, and community nights.",
  path: "/events",
});

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const tournaments = await getUpcomingTournamentsWithEvents();

  return (
    <Section aria-label="Event list">
      <Container>
        {tournaments.length > 0 ? (
          <TournamentEventsList tournaments={tournaments} />
        ) : (
          <p className="text-center leading-relaxed text-(--foreground)/80">
            No upcoming tournaments on start.gg right now. Check our hub for the
            latest schedule.
          </p>
        )}

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
  );
}
