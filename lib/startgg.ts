import { cache } from "react";
import { siteConfig } from "@/config/site";

const STARTGG_API = "https://api.start.gg/gql/alpha";
const MAX_QUERY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 400;

const STATE_COMPLETED = 3;

type StartGgImage = { url: string; type?: string | null };

export type StartGgBracketEvent = {
  id: string;
  name: string;
  slug: string;
  startAt: number | null;
  numEntrants: number | null;
  state: number | null;
  videogameName: string | null;
  imageUrl: string | null;
  href: string;
};

export type StartGgTournamentWithEvents = {
  id: string;
  name: string;
  slug: string;
  startAt: number | null;
  endAt: number | null;
  state: number | null;
  city: string | null;
  addrState: string | null;
  imageUrl: string | null;
  href: string;
  events: StartGgBracketEvent[];
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startGgQuery<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T | null> {
  const token = process.env.STARTGG_API_TOKEN;
  if (!token) return null;

  for (let attempt = 1; attempt <= MAX_QUERY_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(STARTGG_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables }),
        cache: "no-store",
      });

      if (!res.ok) {
        if (attempt < MAX_QUERY_ATTEMPTS) {
          await sleep(RETRY_DELAY_MS * attempt);
          continue;
        }
        return null;
      }

      const text = await res.text();
      let json: GraphQLResponse<T>;
      try {
        json = JSON.parse(text) as GraphQLResponse<T>;
      } catch {
        if (attempt < MAX_QUERY_ATTEMPTS) {
          await sleep(RETRY_DELAY_MS * attempt);
          continue;
        }
        return null;
      }

      if (json.data) return json.data;
    } catch {
      /* network error */
    }

    if (attempt < MAX_QUERY_ATTEMPTS) {
      await sleep(RETRY_DELAY_MS * attempt);
    }
  }

  return null;
}

const TOURNAMENT_EVENTS_MINIMAL_QUERY = `
  query TournamentEventsMinimal($slug: String!) {
    tournament(slug: $slug) {
      id
      name
      slug
      startAt
      endAt
      state
      city
      addrState
      url
      events {
        id
        name
        slug
        startAt
        numEntrants
        state
        videogame {
          displayName
        }
      }
    }
  }
`;

const TOURNAMENT_EVENTS_QUERY = `
  query TournamentEvents($slug: String!) {
    tournament(slug: $slug) {
      id
      name
      slug
      startAt
      endAt
      state
      city
      addrState
      url
      images {
        url
        type
      }
      events {
        id
        name
        slug
        startAt
        numEntrants
        state
        images {
          url
          type
        }
        videogame {
          displayName
          images {
            url
            type
          }
        }
      }
    }
  }
`;

const TOURNAMENTS_BY_OWNER_QUERY = `
  query TournamentsByOwner($ownerId: ID!, $perPage: Int!) {
    tournaments(query: {
      perPage: $perPage
      page: 1
      sortBy: "startAt desc"
      filter: { ownerId: $ownerId }
    }) {
      nodes {
        id
        name
        slug
        startAt
        endAt
        state
      }
    }
  }
`;

const USER_ID_BY_SLUG_QUERY = `
  query UserIdBySlug($slug: String!) {
    user(slug: $slug) {
      id
    }
  }
`;

type TournamentNode = {
  id: string;
  name: string;
  slug: string;
  startAt: number | null;
  endAt: number | null;
  state: number | null;
};

type TournamentEventsData = {
  tournament: {
    id: string;
    name: string;
    slug: string;
    startAt: number | null;
    endAt: number | null;
    state: number | null;
    city: string | null;
    addrState: string | null;
    url: string | null;
    images: StartGgImage[] | null;
    events: {
      id: string;
      name: string;
      slug: string;
      startAt: number | null;
      numEntrants: number | null;
      state: number | null;
      images: StartGgImage[] | null;
      videogame: {
        displayName: string;
        images: StartGgImage[] | null;
      } | null;
    }[];
  } | null;
};

type TournamentsByOwnerData = {
  tournaments: { nodes: TournamentNode[] } | null;
};

function pickImageByType(
  images: StartGgImage[] | null | undefined,
  preferredTypes: string[]
): string | null {
  if (!images?.length) return null;

  for (const type of preferredTypes) {
    const match = images.find((img) => img.type === type && img.url);
    if (match?.url) return match.url;
  }

  return images.find((img) => img.url)?.url ?? null;
}

function pickTournamentImage(images: StartGgImage[] | null | undefined): string | null {
  return pickImageByType(images, ["banner", "profile", "logo"]);
}

function pickEventImage(
  eventImages: StartGgImage[] | null | undefined,
  videogameImages: StartGgImage[] | null | undefined
): string | null {
  return (
    pickImageByType(eventImages, ["profile", "banner"]) ??
    pickImageByType(videogameImages, ["primary-quality", "primary", "icon"])
  );
}

function mapTournament(
  data: TournamentEventsData["tournament"]
): StartGgTournamentWithEvents | null {
  if (!data) return null;

  const events: StartGgBracketEvent[] = (data.events ?? []).map((event) => ({
    id: event.id,
    name: event.name,
    slug: event.slug,
    startAt: event.startAt,
    numEntrants: event.numEntrants,
    state: event.state,
    videogameName: event.videogame?.displayName ?? null,
    imageUrl: pickEventImage(event.images, event.videogame?.images),
    href: `https://www.start.gg/${event.slug}`,
  }));

  events.sort((a, b) => {
    const aTime = a.startAt ?? 0;
    const bTime = b.startAt ?? 0;
    if (aTime !== bTime) return aTime - bTime;
    return a.name.localeCompare(b.name, undefined, { numeric: true });
  });

  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    startAt: data.startAt,
    endAt: data.endAt,
    state: data.state,
    city: data.city,
    addrState: data.addrState,
    imageUrl: pickTournamentImage(data.images),
    href: data.url ?? `https://www.start.gg/${data.slug}/details`,
    events,
  };
}

async function fetchTournamentBySlug(
  slug: string
): Promise<StartGgTournamentWithEvents | null> {
  const normalized = slug.startsWith("tournament/")
    ? slug
    : `tournament/${slug}`;

  const full = await startGgQuery<TournamentEventsData>(TOURNAMENT_EVENTS_QUERY, {
    slug: normalized,
  });
  const mapped = mapTournament(full?.tournament ?? null);
  if (mapped) return mapped;

  const minimal = await startGgQuery<TournamentEventsData>(
    TOURNAMENT_EVENTS_MINIMAL_QUERY,
    { slug: normalized }
  );
  return mapTournament(minimal?.tournament ?? null);
}

/** Active, in progress, or scheduled — not completed. */
function isUpcomingTournament(node: TournamentNode): boolean {
  const now = Math.floor(Date.now() / 1000);

  if (node.state != null && node.state !== STATE_COMPLETED) {
    if (node.endAt == null || node.endAt >= now) return true;
  }
  if (node.startAt != null && node.startAt >= now) return true;
  if (node.endAt != null && node.endAt >= now) return true;

  return false;
}

function isLiveTournament(node: TournamentNode, now: number): boolean {
  const start = node.startAt ?? 0;
  const end = node.endAt ?? Number.POSITIVE_INFINITY;
  return start <= now && end >= now && node.state !== STATE_COMPLETED;
}

async function resolveSingleOwnerId(raw: string): Promise<string | null> {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (/^\d+$/.test(trimmed)) return trimmed;

  const slug = trimmed.startsWith("user/") ? trimmed : `user/${trimmed}`;
  const data = await startGgQuery<{ user: { id: string } | null }>(
    USER_ID_BY_SLUG_QUERY,
    { slug }
  );
  return data?.user?.id ?? null;
}

/** STARTGG_OWNER_ID — comma-separated numeric ids or user slugs. */
async function resolveOwnerIds(): Promise<string[]> {
  const raw =
    process.env.STARTGG_OWNER_IDS?.trim() ??
    process.env.STARTGG_OWNER_ID?.trim();
  if (!raw) return [];

  const ids = new Set<string>();
  for (const part of raw.split(",")) {
    const id = await resolveSingleOwnerId(part);
    if (id) ids.add(id);
  }
  return [...ids];
}

function dedupeTournaments(nodes: TournamentNode[]): TournamentNode[] {
  const seen = new Set<string>();
  return nodes.filter((node) => {
    if (seen.has(node.id)) return false;
    seen.add(node.id);
    return true;
  });
}

function pickUpcomingOwnerTournaments(nodes: TournamentNode[]): TournamentNode[] {
  const now = Math.floor(Date.now() / 1000);

  return dedupeTournaments(nodes)
    .filter(isUpcomingTournament)
    .sort((a, b) => {
      const aLive = isLiveTournament(a, now);
      const bLive = isLiveTournament(b, now);
      if (aLive !== bLive) return aLive ? -1 : 1;
      return (a.startAt ?? 0) - (b.startAt ?? 0);
    });
}

async function fetchTournamentsForOwner(
  ownerId: string
): Promise<TournamentNode[]> {
  const data = await startGgQuery<TournamentsByOwnerData>(
    TOURNAMENTS_BY_OWNER_QUERY,
    { ownerId, perPage: 80 }
  );
  return data?.tournaments?.nodes ?? [];
}

async function listUpcomingOwnerTournaments(): Promise<TournamentNode[]> {
  const ownerIds = await resolveOwnerIds();
  if (ownerIds.length === 0) return [];

  const ownerBatches = await Promise.all(
    ownerIds.map((ownerId) => fetchTournamentsForOwner(ownerId))
  );

  return pickUpcomingOwnerTournaments(ownerBatches.flat());
}

async function loadUpcomingTournamentsWithEvents(): Promise<
  StartGgTournamentWithEvents[]
> {
  const { startGg } = siteConfig.community;

  if (startGg.tournamentSlug) {
    const one = await fetchTournamentBySlug(startGg.tournamentSlug);
    return one ? [one] : [];
  }

  const nodes = await listUpcomingOwnerTournaments();
  if (nodes.length === 0) return [];

  const tournaments: StartGgTournamentWithEvents[] = [];

  for (const node of nodes) {
    const detail = await fetchTournamentBySlug(node.slug);
    if (detail) tournaments.push(detail);
  }

  return tournaments;
}

/**
 * Upcoming tournaments for STARTGG_OWNER_ID(S) with all bracket events and images.
 * Cached per request; retries API calls; always fetches fresh (no-store).
 */
export const getUpcomingTournamentsWithEvents = cache(
  loadUpcomingTournamentsWithEvents
);

/** First upcoming tournament — used by homepage preview. */
export async function getCurrentTournamentWithEvents(): Promise<StartGgTournamentWithEvents | null> {
  const upcoming = await getUpcomingTournamentsWithEvents();
  return upcoming[0] ?? null;
}

export function formatStartGgTimestamp(
  startAt: number | null,
  endAt?: number | null
): string {
  if (!startAt) return "Date TBA";

  const opts: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const start = new Date(startAt * 1000).toLocaleDateString("en-US", opts);

  if (endAt && endAt !== startAt) {
    const end = new Date(endAt * 1000).toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
    });
    return `${start} – ${end}`;
  }

  return start;
}

export function formatEventStart(startAt: number | null): string | undefined {
  if (!startAt) return undefined;

  return new Date(startAt * 1000).toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
