# Integrations

## Purpose

This document maps **client-stated tools and workflows** (discovery questionnaire, stakeholder input, and approved URLs) to the **Uptown Gaming website** implementation.

It does **not** override `MVP_SCOPE.md`, `PRODUCT_BRIEF.md`, or `BUILD_SEQUENCE.md`. When those docs conflict with a future integration, surface the conflict and get explicit approval before implementing.

Use this file to:

- know what Uptown uses off-site
- see what the site links to vs builds
- find the single source of truth in [`config/site.ts`](../config/site.ts)

---

## As-built (current codebase)

| Capability | Status | Where |
|------------|--------|--------|
| Domain / metadata | `https://www.uptowngaming.net` | `siteConfig.baseUrl`, `NEXT_PUBLIC_SITE_URL` |
| General contact | `contact@uptowngaming.net` | `siteConfig.contact.email`, `/contact`, `ContactForm` mailto |
| Booking | Monday.com public form | `/book` → server `redirect()` → `siteConfig.booking.mondayFormUrl` (same tab) |
| Linktree | Primary off-site funnel | `siteConfig.funnel.linktreeUrl` — footer + contact |
| Social | Instagram, TikTok, X, Facebook, Twitch | `siteConfig.social`, footer, contact |
| Community | Discord, start.gg, JoinIt, menu (Drive) | `siteConfig.community`, footer, contact |
| GoFundMe | Subdued support link | `siteConfig.community.gofundmeUrl`, footer + contact; toggle `fundraising.showSupportLink` |
| SMS program | Text JOIN + legal copy + flyer QR | `SmsProgramBlock` on `/contact`, `siteConfig.sms` |
| Events / venue content | Local TS | `content/events.ts`, `content/venue-features.ts` |
| Menu | Google Drive PDF (v1) | `siteConfig.community.menuUrl` — new tab; dynamic updates without redeploy |

---

## Approved URLs and roles

### Domain and contact

| Item | Value |
|------|--------|
| Primary domain | `https://www.uptowngaming.net/` |
| General contact email | `contact@uptowngaming.net` |

Production: set `NEXT_PUBLIC_SITE_URL=https://www.uptowngaming.net`.

### Booking — Monday.com (official)

| Item | Value |
|------|--------|
| Role | **Official booking path** |
| Public form | `https://forms.monday.com/forms/bee8248285b6703275f57a30ea76c9bc?r=use1` |
| On-site route | `/book` redirects to the form above (**same tab**, no iframe) |

- Nav and CTAs labeled “Book the Space” use `/book`; redirect performs handoff.
- “Start booking inquiry” (homepage booking section) uses `/book`.
- **Do not** build a custom booking engine or Monday API for MVP.
- `/contact` mailto form is for **general inquiries only**.

### Marketing funnel — Linktree (primary)

| Item | Value |
|------|--------|
| URL | `https://linktr.ee/UGNY` |
| Role | **Primary funnel** for IG bio, QR, print |

The website complements Linktree; it does not replace it. The Monday URL on Linktree must match `siteConfig.booking.mondayFormUrl`.

### Social channels

| Channel | URL |
|---------|-----|
| Instagram | `https://www.instagram.com/ug_nyc` |
| TikTok | `https://www.tiktok.com/@ug_nyc` |
| X | `https://x.com/UG_NYC` |
| Facebook | `https://www.facebook.com/uptowngamingnyc` |
| Twitch | `https://www.twitch.tv/ug_nyc` |

### Community and programs

| Tool | URL | Site treatment |
|------|-----|----------------|
| Discord | `https://discord.com/invite/UGNY` | Footer + contact |
| start.gg hub | `https://www.start.gg/hub/up-the-block-ugny` | Footer, contact, CTA on `/events` |
| JoinIt membership | `https://app.joinit.com/o/ugny` | Footer, contact (benefits listed) |
| Food & drink menu | [Google Drive PDF](https://drive.google.com/file/d/1lFUt1mGZbxm7V4elYJvoR0-oLFgNnLhO/view) | Footer + contact — **v1: Drive link** (updates without redeploy) |
| GoFundMe | [Help Uptown Gaming Rebuild](https://www.gofundme.com/f/help-uptown-gaming-reopen) | Footer + contact; subdued copy; reopened 2/6/26, fundraising through Feb 2026 |

**Membership benefits** (JoinIt, $35/month): documented in `siteConfig.membership.benefits` and shown on `/contact`.

### SMS program (Toast)

| Item | Value |
|------|--------|
| Offer | 10% off next order — secret discounts, menu specials, news |
| Join | Text **JOIN** to **1-833-341-1659**; confirm **YES** |
| Flyer asset | `/public/images/sms-flyer.png` |
| Legal | Toast terms + privacy linked in `SmsProgramBlock`; STOP/HELP disclosed |

No SMS API on the site — opt-in happens on the user’s phone.

### Menu strategy

| Approach | When |
|----------|------|
| **Google Drive link (current)** | Menu changes often; single source client updates |
| Host PDF in `public/menu/` | Optional later if menu is stable and on-brand viewing is needed (requires redeploy on change) |

---

## UX rules

| Topic | Rule |
|-------|------|
| Monday / booking | Same tab; no iframe |
| External community / social / menu / GoFundMe | New tab (`target="_blank"`, `rel="noopener noreferrer"`) |
| Restaurant-first risk | Menu + SMS live in footer/contact depth, not hero or primary nav |
| GoFundMe | Subdued; hide via `siteConfig.fundraising.showSupportLink` when campaign ends |

---

## Discovery PDF vs implementation

| PDF / client idea | Status |
|-------------------|--------|
| Monday.com bookings | **Active** — official path |
| Linktree + IG + QR | **Active** — Linktree primary funnel |
| start.gg + joinit.com | **Active** — linked (was “future” in early MVP docs) |
| GoFundMe reopen campaign | **Active** — time-bound support copy |
| SMS program | **Active** — contact page |
| Key tags / scan for bill | Out of MVP |
| Social scheduling hub | Out of MVP |
| Twitch → YouTube automation | Out of MVP |
| Custom booking engine | Out of MVP |
| “Modal” (menu/patch notes) | **Skipped** — meaning unclear |

---

## Config shape (`config/site.ts`)

```ts
contact.email
booking.mondayFormUrl
funnel.linktreeUrl
social.{instagram,tiktok,x,facebook,twitch}
community.{discord,startGgHub,membershipUrl,gofundmeUrl,gofundmeTitle,menuUrl}
sms.{keyword,phoneDisplay,smsUri,confirmKeyword,termsUrl,privacyUrl,flyerImagePath}
membership.{priceLabel,benefits}
fundraising.{showSupportLink,supportBlurb}
```

Exported helpers: `bookingFormUrl`, `socialLinks`, `communityLinks`.

---

## Code touchpoints

| Change | Files |
|--------|--------|
| Booking redirect | `app/book/layout.tsx`, `app/book/page.tsx` |
| Config | `config/site.ts` |
| External buttons | `components/ui/Button.tsx`, `lib/links.ts` |
| Footer / contact | `components/layout/Footer.tsx`, `app/contact/page.tsx` |
| SMS / GoFundMe blocks | `components/marketing/SmsProgramBlock.tsx`, `SupportFundraiserBlock.tsx` |
| Events start.gg | `app/events/page.tsx` |
| General mailto | `components/forms/ContactForm.tsx` |

**Note:** `ROUTES_AND_PAGE_SPECS.md` describes `/book` as a content page; implementation uses a **redirect route** to Monday.

---

## Open items

| Item | Action |
|------|--------|
| Linktree ↔ Monday parity | Client keeps both URLs aligned on Linktree |
| GoFundMe after February 2026 | Set `fundraising.showSupportLink` to `false` |
| Menu on-site PDFs | Only if client wants hosted copies later |
| Site analytics | Phase 1.1 — optional |

---

## Related docs

- `docs/MVP_SCOPE.md`
- `docs/PRODUCT_BRIEF.md`
- `docs/ROUTES_AND_PAGE_SPECS.md`
- `docs/COMPONENT_SPEC.md`
- `docs/QA_CHECKLIST.md`

---

## Change log

| Date | Change |
|------|--------|
| 2026-05-22 | Initial doc: Monday, Linktree TBD, domain/socials, Modal deferred |
| 2026-05-22 | Wired implementation: Linktree, community links, SMS, GoFundMe, Drive menu, `/book` redirect, full as-built table |
