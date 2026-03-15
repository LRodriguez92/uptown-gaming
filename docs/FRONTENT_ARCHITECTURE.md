# Frontend Architecture

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router

---

## Architecture Goals

1. Keep the app simple and maintainable
2. Support a clean marketing-site MVP
3. Encourage reusable UI and section patterns
4. Avoid unnecessary complexity
5. Make it easy for Cursor to build one step at a time

---

## Project Structure

```txt
app/
  page.tsx
  events/page.tsx
  book/page.tsx
  venue/page.tsx
  about/page.tsx
  contact/page.tsx
  layout.tsx
  globals.css

components/
  ui/
  layout/
  sections/
  forms/

content/
lib/
types/
config/
assets/
public/

---

## Folder Responsibilities

### `app/`
Owns routes, layouts, metadata, and page composition.

### `components/ui/`
Low-level reusable UI primitives.

Examples:
- Button
- Container
- SectionHeading
- Card
- Badge

### `components/layout/`
App shell pieces shared across the site.

Examples:
- Header
- MobileNav
- Footer

### `components/sections/`
Large reusable content sections used to compose pages.

Examples:
- HeroSection
- EventsPreviewSection
- VenueFeaturesSection
- BookingCTASection
- AboutIntroSection

### `components/forms/`
Form-related components.

Examples:
- ContactForm
- BookingInquiryForm

### `content/`
Structured local content used by MVP pages.

Examples:
- events.ts
- venue.ts
- faq.ts
- partners.ts

### `lib/`
Utilities and shared helpers.

Examples:
- utils.ts
- metadata.ts
- analytics.ts

### `types/`
Shared TypeScript types and content models.

### `config/`
Static site-level configuration.

Examples:
- site metadata
- nav config
- footer links
- social links

### `assets/`
Internal asset references or organization helpers if needed.

### `public/`
Public static files such as images, logos, and share assets.

---

## Component Strategy

Use a layered component model:

1. UI primitives
2. Layout components
3. Section components
4. Pages composed from sections

Do not jump straight to large page-specific one-off components unless there is a good reason.

---

## Rendering Strategy

- Prefer server components by default
- Use client components only when interactivity requires them
- Keep most marketing pages simple and lightweight

---

## Data Strategy

For MVP:
- Use local structured content first
- Avoid introducing a CMS unless content maintenance becomes painful
- Avoid a custom backend or API layer unless a real approved need appears

---

## State Management

- Keep state local whenever possible
- Avoid global state libraries unless clearly necessary
- Avoid premature complexity

---

## Styling Strategy

- Tailwind CSS is the primary styling system
- Use semantic tokens and shared patterns
- Avoid hardcoded random values throughout the app
- Build reusable design primitives first
- Keep spacing and typography consistent

---

## Dependency Philosophy

- Keep dependencies minimal
- Prefer built-in Next.js/React solutions
- Add packages only when they solve a clear problem

---

## Route Philosophy

All MVP routes should be public-facing marketing/information routes:
- `/`
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

Do not introduce dashboards, app areas, or hidden internal systems in MVP.

---

## Metadata Philosophy

Each route should support:
- page title
- description
- share metadata
- clean route-level ownership

---

## Architecture Non-Goals

Do not introduce:
- auth systems
- databases
- custom APIs
- dashboards
- admin panels
- complex state layers

without explicit approval from the project docs.