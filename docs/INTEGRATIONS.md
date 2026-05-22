# Integrations

## Purpose

This document maps **client-stated tools and workflows** (from discovery materials and stakeholder input) to the **Uptown Gaming website MVP** and later phases.

It does **not** override `MVP_SCOPE.md`, `PRODUCT_BRIEF.md`, or `BUILD_SEQUENCE.md`. When those docs conflict with a future integration, surface the conflict and get explicit approval before implementing.

Use this file to:

- know what Uptown already uses off-site
- decide what the marketing site should link to vs build
- find extension points in code (`config/site.ts`, booking CTAs, etc.)

---

## As-built (current codebase)

| Capability | Status | Where |
|------------|--------|--------|
| Instagram | Placeholder URL in config | `config/site.ts` → `social.instagram` |
| Other socials | Not in config yet | — |
| General / booking email | Placeholder addresses | `config/site.ts` → `contact` |
| Booking inquiry | Mailto prefilled form | `components/forms/ContactForm.tsx`, `/contact` |
| Events / venue | Local structured content | `content/events.ts`, `content/venue-features.ts` |
| Domain / metadata base URL | Defaults to `https://uptowngaming.com` | `siteConfig.baseUrl`, `NEXT_PUBLIC_SITE_URL` |

**Approved client values below are not fully wired in code yet.** Update `config/site.ts` and CTAs when implementing integration work.

---

## Approved client facts

### Domain and contact

| Item | Value |
|------|--------|
| Primary domain | `https://www.uptowngaming.net/` |
| General contact email | `contact@uptowngaming.net` |

Set `NEXT_PUBLIC_SITE_URL` to `https://www.uptowngaming.net` (or `https://www.uptowngaming.net/` per hosting convention) in production.

### Social channels

| Channel | URL |
|---------|-----|
| Instagram | `https://www.instagram.com/ug_nyc` |
| TikTok | `https://www.tiktok.com/@ug_nyc` |
| X | `https://x.com/UG_NYC` |
| Facebook | `https://www.facebook.com/uptowngamingnyc` |
| Twitch | `https://www.twitch.tv/ug_nyc` |

`docs/CONTENT_GUIDE.md` and `INFORMATION_ARCHITECTURE.md` emphasize Instagram first; additional channels are approved here for footer/contact when product approves visibility.

### Booking — Monday.com (official)

| Item | Value |
|------|--------|
| Role | **Official booking path** |
| Public form | `https://forms.monday.com/forms/bee8248285b6703275f57a30ea76c9bc?r=use1` |

**Implementation guidance (when approved):**

- Primary CTAs (“Start booking inquiry”, “Book the Space”, `/book` main action) should open this URL (same tab or new tab — confirm with client).
- Do **not** build a custom booking engine or Monday API integration for MVP unless explicitly approved.
- The `/contact` mailto form can remain for **general inquiries**; booking should not compete with Monday as the official path.

### Marketing funnel — Linktree (primary)

| Item | Decision |
|------|----------|
| Funnel | **Linktree remains the primary funnel** for IG bio, QR codes, and similar entry points |
| Site role | `uptowngaming.net` supports brand, events, venue story, and organizers; it does not replace Linktree as the main “one link” hub yet |

**Linktree URL:** TBD — add here when provided so site copy and print/QR guidance stay consistent.

**Consistency rule:** The Monday booking form URL on Linktree should match the URL in this doc. Avoid different booking destinations on Linktree vs the website.

**Analytics:** Client cares about Linktree analytics for acquisition; site analytics (Phase 1.1 per `MVP_SCOPE.md`) are separate and optional later.

---

## Client-stated tools (discovery summary)

Source: client discovery questionnaire (`Uptown Gaming.pdf`) plus follow-up answers.

### Active / near-term

| Tool | Client role | Site relationship |
|------|-------------|-----------------|
| Monday.com | Booking operations | Official booking — public form link above |
| Instagram | Discovery, bookings often start here | Link + align with Linktree |
| Linktree | Primary off-site funnel (IG, QR) | Primary; site complements, does not replace |

### Deferred / future (not MVP marketing site)

| Idea | Notes | MVP doc alignment |
|------|--------|-------------------|
| start.gg + joinit.com | Member discount codes | Future project; out of MVP |
| Key tags / scan for bill | In-venue ops | Out of MVP |
| Social scheduling hub | Maybe custom later | `MVP_SCOPE.md` — social scheduling platform out of MVP |
| Twitch → YouTube VOD upload | Content automation | Deferred in `MVP_SCOPE.md` |
| Live event calendar (e.g. OSNYC-style) | Inspiration only | MVP uses local `Event[]` content |
| Custom booking engine | — | Explicitly out of MVP |

### Unresolved / skipped

| Item | Status |
|------|--------|
| “Modal” (foods, drinks, tournaments, patch notes) | **Skipped** — meaning unclear; do not spec until client clarifies |

---

## MVP vs later

| Bucket | What belongs here |
|--------|-------------------|
| **Ship now (marketing MVP)** | Brand site, static events/venue content, Instagram (minimum), contact path, clear pointer to **Monday** for booking once wired |
| **Wire when approved (small change)** | Monday URL on booking CTAs; real domain, email, socials in `siteConfig`; optional Linktree URL in config for reference |
| **Phase 1.1+** | Site analytics; featured/priority events; partners strip; richer media; easier content editing |
| **Future platform** | start.gg/joinit, scan-to-pay, social scheduler, Twitch/YouTube automation, CMS/backend if content ops require it |

---

## Recommended handoff patterns

### Monday.com

- **Pattern:** External link to the public Monday form (no embed required for MVP unless client requests it).
- **CTAs:** `/book`, homepage booking section, header/footer “Book” paths → Monday URL.
- **Contact page:** Explain that booking uses Monday; general questions use `contact@uptowngaming.net` or the contact form.

### Linktree (primary funnel)

- Keep driving traffic to Linktree from IG and QR.
- Ensure Linktree includes: Monday booking (same URL), Instagram, and other approved links.
- Website should still expose booking (Monday) for visitors who land on the domain directly (search, word of mouth, organizer-focused flows per product brief).

### Email

- **General:** `contact@uptowngaming.net`
- **Booking:** Monday form (not a separate booking inbox in this doc unless client adds one)

### Events priority

- MVP: editorial priority via content order or a future `featured` flag on `Event` in `content/events.ts`.
- No external calendar feed until approved.

---

## Config and code touchpoints

When implementing integrations, prefer a single source of truth in `config/site.ts` (or a dedicated `config/integrations.ts` if the file grows):

```ts
// Suggested shape (not yet in repo)
booking: {
  mondayFormUrl: "https://forms.monday.com/forms/...",
},
social: {
  instagram: "...",
  tiktok: "...",
  // ...
},
funnel: {
  linktreeUrl: "...", // TBD
},
contact: {
  email: "contact@uptowngaming.net",
},
baseUrl: "https://www.uptowngaming.net",
```

| Change | Likely files |
|--------|----------------|
| Monday on CTAs | `config/site.ts`, `app/book/page.tsx`, `components/sections/BookingCTASection.tsx`, `Button` links |
| Social/footer | `config/site.ts`, `components/layout/Footer.tsx`, `app/contact/page.tsx` |
| Domain / SEO | `config/site.ts`, `lib/metadata.ts`, deploy env |
| Deprecate mailto for booking | `components/forms/ContactForm.tsx`, copy on `/book` and `/contact` |

---

## Open items

| Item | Owner / action |
|------|----------------|
| Linktree URL | Client → add to this doc and `siteConfig` |
| Monday link opens new tab vs same tab | Confirm with client |
| Show all socials in footer vs Instagram-only | Product decision |
| Replace placeholder emails in code with `contact@uptowngaming.net` | Implementation task |
| Whether mailto contact form stays alongside Monday | Product decision (general inquiry likely yes) |

---

## Related docs

- `docs/MVP_SCOPE.md` — what is out of MVP
- `docs/PRODUCT_BRIEF.md` — booking as primary conversion
- `docs/ROUTES_AND_PAGE_SPECS.md` — `/book`, `/contact` purpose
- `docs/COMPONENT_SPEC.md` — `BookingInquiryForm`, external workflow handoff
- `docs/QA_CHECKLIST.md` — booking/contact and external handoff checks
- `docs/BUILD_SEQUENCE.md` — MVP build order (complete through Step 11)

---

## Change log

| Date | Change |
|------|--------|
| 2026-05-22 | Initial doc: Monday official form URL, Linktree primary funnel, approved domain/email/socials, Modal deferred |
