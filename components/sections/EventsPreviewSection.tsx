import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import {
  getUpcomingTournamentsWithEvents,
  formatEventStart,
} from "@/lib/startgg";

export async function EventsPreviewSection() {
  const tournaments = await getUpcomingTournamentsWithEvents();
  const tournament = tournaments[0];
  const previewEvents = tournament?.events.slice(0, 3) ?? [];

  return (
    <Section aria-label="Events preview">
      <Container>
        <SectionHeading
          title="Upcoming Events"
          support={
            tournament
              ? `Upcoming: ${tournament.name} on start.gg.`
              : "See what's on at Uptown Gaming."
          }
        />

        {previewEvents.length > 0 ? (
          <ul className="section-stack-lg grid gap-6 md:grid-cols-3">
            {previewEvents.map((event) => (
              <li key={event.id}>
                <Card className="overflow-hidden p-0 transition-colors hover:border-(--foreground)/35">
                  <a
                    href={event.href}
                    className="group flex h-full min-h-[44px] text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 rounded-xl hover:bg-(--foreground)/5"
                  >
                    {event.imageUrl && (
                      <div className="relative aspect-square w-28 shrink-0 bg-(--surface-dark) sm:w-32">
                        <Image
                          src={event.imageUrl}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col justify-center p-4 md:p-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-(--foreground)/70 md:text-sm">
                        {event.videogameName ?? "Event"}
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-(--foreground) group-hover:text-(--brand-primary) md:text-lg">
                        {event.name}
                      </h3>
                      {formatEventStart(event.startAt) && (
                        <p className="mt-2 text-sm text-(--foreground)/80">
                          {formatEventStart(event.startAt)}
                        </p>
                      )}
                    </div>
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <p className="section-stack-lg text-(--foreground)/80">
            Check start.gg for the latest tournament schedule.
          </p>
        )}

        <div className="section-stack flex flex-wrap items-center gap-4 max-sm:flex-nowrap max-sm:gap-3">
          <Button
            as="link"
            href="/events"
            variant="secondary"
            className="max-sm:flex-1 max-sm:px-3 max-sm:text-sm"
          >
            View all events
          </Button>
          <Button
            as="link"
            href={tournament?.href ?? siteConfig.community.startGgHub}
            external
            variant="ghost"
            className="max-sm:flex-1 max-sm:px-3 max-sm:text-sm"
          >
            View on start.gg
          </Button>
        </div>
      </Container>
    </Section>
  );
}
