# Uptown Gaming Website

## Purpose

This repository contains the Uptown Gaming website build.

The goal is to create a polished, mobile-first marketing site that:
- communicates the Uptown Gaming brand clearly
- highlights events and community energy
- showcases the venue and its value
- supports booking inquiries
- stays tightly scoped to the MVP

This project should be built in a controlled, step-by-step way using the documentation in `/docs` and the rules in `CURSOR_RULES.md`.

---

## Project Goals

### Primary Goals
- establish a strong first impression for the Uptown Gaming brand
- make event discovery easy
- communicate venue value clearly
- support booking inquiries
- provide a clean contact path

### Primary Conversion
- booking inquiry / booking flow

### Secondary Conversions
- event discovery
- venue understanding
- contact
- community trust
- social follow-through

---

## Product Guardrails

- The site is community-first, event-first, and venue-first.
- It should not feel restaurant-first.
- It should be mobile-first from the start.
- It should feel energetic, bold, and polished without becoming visually chaotic.
- It should stay focused on the approved MVP.
- Do not introduce backend, auth, database, or CMS complexity unless explicitly approved.

These guardrails come from the product, workflow, and build docs and should guide all implementation decisions. 

---

## Tech Direction

### Approved Stack
- Next.js
- TypeScript
- Tailwind CSS
- App Router

### Architecture Direction
- reusable component-based architecture
- local structured content for MVP
- simple, maintainable project organization
- no unnecessary dependencies
- no premature backend layer

---

## Documentation System

The documentation in `/docs` is the source of truth for product, design, structure, content, and implementation order.

### Core Docs
1. `docs/PRODUCT_BRIEF.md`
2. `docs/MVP_SCOPE.md`
3. `docs/BRAND_RULES.md`
4. `docs/FRONTEND_ARCHITECTURE.md`
5. `docs/ROUTES_AND_PAGE_SPECS.md`
6. `docs/BUILD_SEQUENCE.md`
7. `docs/COMPONENT_SPEC.md`
8. `docs/CONTENT_MODEL.md`
9. `docs/CONTENT_GUIDE.md`
10. `docs/DESIGN_SYSTEM.md`
11. `docs/INFORMATION_ARCHITECTURE.md`
12. `docs/QA_CHECKLIST.md`

### Cursor Rules
- `CURSOR_RULES.md`

Before making meaningful code changes, read the docs in the order defined by `CURSOR_RULES.md`.

If docs conflict, do not guess.
Surface the conflict clearly.

---

## Current MVP Route Set

Approved MVP routes:
- `/`
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

Do not add additional top-level routes unless they are explicitly approved.

### Not in MVP
Examples of future routes that are not part of the current MVP:
- `/faq`
- `/gallery`
- `/partners`
- `/community`
- `/private-events`
- `/tournaments`
- `/announcements`

---

## Build Order

Implementation must follow `docs/BUILD_SEQUENCE.md`.

### Current Build Sequence
1. Project Cleanup and Base Shell
2. Site Config and Shared Foundations
3. UI Primitives
4. Layout Components
5. Homepage Scaffold
6. Homepage Sections
7. Secondary Route Scaffolding
8. Structured Content Wiring
9. Booking and Contact Flow
10. Brand Polish and Responsive Refinement
11. QA Pass

Do not skip ahead.
Complete one step at a time.

---

## Design Direction

The visual system should follow:
- `docs/BRAND_RULES.md`
- `docs/DESIGN_SYSTEM.md`

### Key Design Requirements
- mobile-first
- strong typography hierarchy
- approved brand colors only
- approved logo usage only
- consistent spacing and layout rhythm
- reusable button, card, section, and container patterns
- energetic but controlled visual tone
- accessible contrast and focus states

### Brand Typography
- Powerr: logo/display use only
- QT Palatine: primary site type for headings, body text, buttons, nav, and forms

### Brand Colors
- Green: `#188933`
- Gold: `#F2AB00`
- Dark neutral: `#191919`
- Light neutral: `#F2F2F2`
- Black: `#000000`

---

## Information Architecture Direction

The information architecture should follow:
- `docs/INFORMATION_ARCHITECTURE.md`
- `docs/ROUTES_AND_PAGE_SPECS.md`

### Navigation
Approved nav:
- Home
- Events
- Book the Space
- Venue
- About
- Contact

### IA Priorities
- clear route purpose
- obvious booking path
- easy event discovery
- simple mobile navigation
- strong internal linking between Home, Events, Venue, Book, About, and Contact

---

## Content Direction

Content rules should follow:
- `docs/CONTENT_MODEL.md`
- `docs/CONTENT_GUIDE.md`

### Content Principles
- clear before clever
- easy to scan on mobile
- event and booking focused
- community-centered
- route-specific and purposeful
- no vague startup-style filler copy

### Content Strategy
Use structured local content for MVP.
Do not introduce a CMS yet unless explicitly approved.

---

## Component Strategy

Reusable components should follow `docs/COMPONENT_SPEC.md`.

### Component Build Order
1. UI primitives
2. Layout components
3. Section components
4. Form components
5. Page composition

### Reuse Rule
Do not invent page-specific patterns if an existing reusable component can solve the need.

---

## Accessibility and Quality

Quality should be validated using `docs/QA_CHECKLIST.md`.

### Required Standards
- sufficient color contrast
- visible focus states
- semantic HTML
- keyboard accessibility
- labeled forms and clear errors
- readable type on mobile
- reduced motion support
- optimized media and reasonable performance

Accessibility is a build requirement, not a later cleanup step.

---

## Repo Expectations

### General Rules
- keep changes small and focused
- keep code easy to review
- avoid unrelated refactors
- prefer simple solutions over speculative complexity
- do not add dependencies casually
- do not build future features early

### When Completing a Step
Always summarize:
- what was completed
- what files changed
- any assumptions made
- the next recommended step from `docs/BUILD_SEQUENCE.md`

---

## Assets

Brand assets such as logos and supporting media should live in the appropriate public asset locations and must follow the brand usage rules.

Do not:
- distort logos
- rotate logos
- add gradients to logos
- place logos on low-contrast backgrounds
- invent unofficial logo treatments

---

## Suggested Next Working Step

The next implementation step is:

### Step 1 — Project Cleanup and Base Shell
- remove starter template content
- create the root layout shell
- add placeholder home page
- create base header/footer placeholders
- wire the global structure cleanly

Follow `docs/BUILD_SEQUENCE.md` exactly for implementation order.