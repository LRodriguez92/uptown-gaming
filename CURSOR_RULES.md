# Cursor Rules for Uptown Gaming

## Purpose

This repository is for building the Uptown Gaming website in a controlled, step-by-step way.

Cursor must treat the documentation in this repo as the source of truth.
Do not improvise major product, design, architecture, or scope decisions.

---

## Files to Read Before Writing Code

Before making any code changes, always read these files in this order:

1. `README.md`
2. `docs/PRODUCT_BRIEF.md`
3. `docs/MVP_SCOPE.md`
4. `docs/BRAND_RULES.md`
5. `docs/FRONTEND_ARCHITECTURE.md`
6. `docs/ROUTES_AND_PAGE_SPECS.md`
7. `docs/BUILD_SEQUENCE.md`
8. `docs/COMPONENT_SPEC.md`
9. `docs/CONTENT_MODEL.md`
10. `docs/QA_CHECKLIST.md`

If any of these files conflict, pause and surface the conflict instead of guessing.

---

## Core Working Rules

1. Only work on the current approved build step.
2. Do not skip ahead.
3. Do not add features outside MVP.
4. Do not introduce backend, database, auth, or CMS unless the docs explicitly require it.
5. Do not invent routes, page sections, or data models.
6. Reuse existing components before creating new ones.
7. Keep changes small, scoped, and easy to review.
8. Prefer simple implementations over “future-proof” complexity.
9. Do not add dependencies unless they are clearly necessary.
10. Do not rewrite large unrelated parts of the codebase while completing a step.

---

## Product Guardrails

- This site is community/event/venue-first.
- Do not reframe the site as restaurant-first.
- Primary conversion is booking inquiry / booking flow.
- Secondary conversions are event discovery, venue understanding, and community trust.
- Keep MVP focused and polished.

---

## Design Guardrails

- Follow `docs/BRAND_RULES.md` exactly.
- Do not change brand colors, typography direction, or logo treatment without approval.
- Do not introduce random design styles that are not in the brand system.
- Keep the experience mobile-first.
- Keep visuals energetic but controlled.
- Avoid inconsistent card, button, spacing, or heading patterns.

---

## Architecture Guardrails

- Follow the approved project structure in `docs/FRONTEND_ARCHITECTURE.md`.
- Use the App Router structure already established in the repo.
- Use reusable components and section-based composition.
- Use local structured content for MVP unless the docs say otherwise.
- Avoid adding an API layer unless there is a real approved need.

---

## Build Behavior

When working on a step:

1. Read the relevant docs.
2. Identify the exact files that need to change.
3. Make only the changes needed for that step.
4. Keep code clean and production-minded.
5. After finishing, summarize:
   - what was built
   - what files changed
   - any assumptions made
   - what the next build step should be

---

## When Unsure

If the current docs do not define something clearly:
- do not invent a large solution
- choose the simplest implementation that fits the current architecture
- clearly state the assumption in the summary

If the missing information affects scope, UX, branding, or architecture:
- surface the gap instead of guessing

---

## Dependency Rules

Do not add libraries casually.

Allowed mindset:
- prefer built-in Next.js and React solutions first
- prefer Tailwind and local components first
- prefer lightweight utilities over big frameworks

Before adding a dependency, explain:
- why it is needed
- what problem it solves
- why existing tools are not enough

---

## Output Style for Each Step

After completing a step, always return:

### Completed
- short description of what was done

### Files Changed
- list of files created/updated

### Notes
- assumptions, tradeoffs, or anything to review

### Next Recommended Step
- exactly one next step from `docs/BUILD_SEQUENCE.md`

---

## Never Do These

- Never build features outside the approved MVP
- Never add auth/member systems on your own
- Never build a backend “just in case”
- Never create inconsistent duplicate components
- Never change route structure casually
- Never replace brand styling with generic startup styling
- Never over-engineer state management
- Never refactor unrelated code during a focused build step# Cursor Rules for Uptown Gaming

## Purpose

This repository is for building the Uptown Gaming website in a controlled, step-by-step way.

Cursor must treat the documentation in this repo as the source of truth.
Do not improvise major product, design, architecture, content, or scope decisions.

---

## Files to Read Before Writing Code

Before making any code changes, always read these files in this order:

1. `README.md`
2. `docs/PRODUCT_BRIEF.md`
3. `docs/MVP_SCOPE.md`
4. `docs/BRAND_RULES.md`
5. `docs/FRONTEND_ARCHITECTURE.md`
6. `docs/ROUTES_AND_PAGE_SPECS.md`
7. `docs/BUILD_SEQUENCE.md`
8. `docs/COMPONENT_SPEC.md`
9. `docs/CONTENT_MODEL.md`
10. `docs/CONTENT_GUIDE.md`
11. `docs/DESIGN_SYSTEM.md`
12. `docs/INFORMATION_ARCHITECTURE.md`
13. `docs/QA_CHECKLIST.md`

If any of these files conflict, pause and surface the conflict instead of guessing.

---

## Source of Truth Priority

If multiple docs touch the same topic, use this priority:

1. `PRODUCT_BRIEF.md` for business goals and site purpose
2. `MVP_SCOPE.md` for what is and is not in scope
3. `BRAND_RULES.md` for brand identity rules
4. `DESIGN_SYSTEM.md` for reusable visual and interaction rules
5. `INFORMATION_ARCHITECTURE.md` for sitemap, navigation, and page relationships
6. `ROUTES_AND_PAGE_SPECS.md` for route responsibilities and page-level structure
7. `FRONTEND_ARCHITECTURE.md` for project structure and implementation architecture
8. `COMPONENT_SPEC.md` for reusable UI building blocks
9. `CONTENT_MODEL.md` for structured content shape
10. `CONTENT_GUIDE.md` for copy and messaging rules
11. `BUILD_SEQUENCE.md` for implementation order
12. `QA_CHECKLIST.md` for validation before considering a step done

If there is a conflict, do not guess.
Surface the conflict clearly.

---

## Core Working Rules

1. Only work on the current approved build step.
2. Do not skip ahead.
3. Do not add features outside MVP.
4. Do not introduce backend, database, auth, or CMS unless the docs explicitly require it.
5. Do not invent routes, page sections, or data models.
6. Reuse existing components before creating new ones.
7. Keep changes small, scoped, and easy to review.
8. Prefer simple implementations over future-proof complexity.
9. Do not add dependencies unless they are clearly necessary.
10. Do not rewrite large unrelated parts of the codebase while completing a step.
11. Do not replace approved content or brand direction with placeholder creative guesses when the docs already define the intent.

---

## Product Guardrails

- This site is community-first, event-first, and venue-first.
- Do not reframe the site as restaurant-first.
- Primary conversion is booking inquiry / booking flow.
- Secondary conversions are event discovery, venue understanding, contact, and community trust.
- Keep MVP focused and polished.

---

## Design Guardrails

- Follow `docs/BRAND_RULES.md` exactly.
- Follow `docs/DESIGN_SYSTEM.md` for spacing, typography, buttons, cards, sections, and interaction patterns.
- Do not change brand colors, typography direction, or logo treatment without approval.
- Do not introduce random design styles that are not in the approved brand system.
- Keep the experience mobile-first.
- Keep visuals energetic but controlled.
- Avoid inconsistent card, button, spacing, or heading patterns.

---

## Content Guardrails

- Follow `docs/CONTENT_MODEL.md` for structured content shape.
- Follow `docs/CONTENT_GUIDE.md` for tone, writing style, CTA wording, and route-level messaging.
- Keep copy clear before clever.
- Keep copy easy to scan on mobile.
- Do not write generic startup-style marketing copy.
- Do not let content drift into restaurant-first framing.

---

## Information Architecture Guardrails

- Follow `docs/INFORMATION_ARCHITECTURE.md` for sitemap, navigation, footer, and internal linking.
- Follow `docs/ROUTES_AND_PAGE_SPECS.md` for route purpose and section expectations.
- Do not invent new top-level routes without approval.
- Do not add dropdown-heavy or nested navigation in MVP.
- Keep booking paths obvious and easy to reach.

---

## Architecture Guardrails

- Follow the approved project structure in `docs/FRONTEND_ARCHITECTURE.md`.
- Use the App Router structure already established in the repo.
- Use reusable components and section-based composition.
- Use local structured content for MVP unless the docs say otherwise.
- Avoid adding an API layer unless there is a real approved need.

---

## Build Behavior

When working on a step:

1. Read the relevant docs.
2. Identify the exact files that need to change.
3. Make only the changes needed for that step.
4. Keep code clean and production-minded.
5. Validate the work against `docs/QA_CHECKLIST.md`.
6. After finishing, summarize:
   - what was built
   - what files changed
   - any assumptions made
   - what the next build step should be

---

## When Unsure

If the current docs do not define something clearly:
- do not invent a large solution
- choose the simplest implementation that fits the current architecture
- clearly state the assumption in the summary

If the missing information affects scope, UX, branding, IA, or architecture:
- surface the gap instead of guessing

---

## Dependency Rules

Do not add libraries casually.

Allowed mindset:
- prefer built-in Next.js and React solutions first
- prefer Tailwind and local components first
- prefer lightweight utilities over big frameworks

Before adding a dependency, explain:
- why it is needed
- what problem it solves
- why existing tools are not enough

---

## Output Style for Each Step

After completing a step, always return:

### Completed
- short description of what was done

### Files Changed
- list of files created/updated

### Notes
- assumptions, tradeoffs, or anything to review

### Next Recommended Step
- exactly one next step from `docs/BUILD_SEQUENCE.md`

---

## Never Do These

- Never build features outside the approved MVP
- Never add auth/member systems on your own
- Never build a backend just in case
- Never create inconsistent duplicate components
- Never change route structure casually
- Never replace brand styling with generic startup styling
- Never over-engineer state management
- Never refactor unrelated code during a focused build step
- Never ignore the documentation read order