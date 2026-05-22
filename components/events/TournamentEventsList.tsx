import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  formatEventStart,
  formatStartGgTimestamp,
  type StartGgTournamentWithEvents,
} from "@/lib/startgg";

type TournamentEventsListProps = {
  tournaments: StartGgTournamentWithEvents[];
};

function TournamentBlock({ tournament }: { tournament: StartGgTournamentWithEvents }) {
  const location = [tournament.city, tournament.addrState]
    .filter(Boolean)
    .join(", ");

  return (
    <article className="space-y-8">
      {tournament.imageUrl && (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-(--foreground)/10 bg-(--surface-dark)">
          <Image
            src={tournament.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      <div className="space-y-2">
        <SectionHeading
          as="h2"
          title={tournament.name}
          support={
            [
              formatStartGgTimestamp(tournament.startAt, tournament.endAt),
              location,
            ]
              .filter(Boolean)
              .join(" · ") || undefined
          }
        />
        <p>
          <Link
            href={tournament.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-(--brand-primary) hover:underline"
          >
            View tournament on start.gg
          </Link>
        </p>
      </div>

      {tournament.events.length === 0 ? (
        <p className="text-(--foreground)/80">
          No bracket events listed for this tournament yet.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2">
          {tournament.events.map((event) => (
            <li key={event.id}>
              <Card className="overflow-hidden p-0 transition-colors hover:border-(--foreground)/35">
                <a
                  href={event.href}
                  className="flex h-full min-h-[44px] flex-col text-inherit no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 rounded-xl hover:bg-(--foreground)/5"
                >
                  {event.imageUrl && (
                    <div className="relative aspect-video w-full bg-(--surface-dark)">
                      <Image
                        src={event.imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-medium text-(--foreground)/70">
                      {event.videogameName ?? "Event"}
                      {event.numEntrants != null
                        ? ` · ${event.numEntrants} entrants`
                        : ""}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-(--foreground)">
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
      )}
    </article>
  );
}

export function TournamentEventsList({ tournaments }: TournamentEventsListProps) {
  return (
    <div className="space-y-16">
      {tournaments.map((tournament) => (
        <TournamentBlock key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
}
