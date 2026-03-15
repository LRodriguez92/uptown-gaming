# Build Sequence

## Purpose

This document defines the required build order for Cursor.

Cursor must complete one step at a time.
Do not skip steps.
Do not start a later step early.

---

## Step 1 — Project Cleanup and Base Shell

### Goal
Clean the starter template and establish the shared app shell.

### Includes
- remove default starter content
- create root layout shell
- add placeholder home page
- create base header/footer placeholders
- wire global structure cleanly

### Does Not Include
- final branded homepage
- detailed UI system
- secondary page content
- booking flow implementation

---

## Step 2 — Site Config and Shared Foundations

### Goal
Create the shared site configuration and core utilities.

### Includes
- site config
- nav config
- social/contact placeholders
- utility helpers
- metadata helpers if needed

### Does Not Include
- full route implementation
- section design
- form logic

---

## Step 3 — UI Primitives

### Goal
Create the minimum reusable UI primitives.

### Includes
- Container
- Button
- SectionHeading
- simple Card if needed

### Rules
- keep primitives reusable
- do not overbuild
- do not add a huge component library

---

## Step 4 — Layout Components

### Goal
Build the shared layout pieces.

### Includes
- Header
- MobileNav if needed
- Footer

### Rules
- nav should reflect approved routes only
- keep layout mobile-first
- keep shell reusable across all pages

---

## Step 5 — Homepage Scaffold

### Goal
Assemble the homepage with section placeholders in the correct order.

### Includes
- page structure for home
- section ordering based on page spec
- temporary placeholder content where needed

### Does Not Include
- final visual polish
- complete content population

---

## Step 6 — Homepage Sections

### Goal
Build the homepage sections one by one.

### Expected Sections
- HeroSection
- BrandIntroSection
- EventsPreviewSection
- VenueFeaturesSection
- BookingCTASection
- optional supporting section if approved

### Rules
- sections must follow brand and component rules
- keep patterns consistent
- keep content aligned with product goals

---

## Step 7 — Secondary Route Scaffolding

### Goal
Create all MVP routes with basic structure.

### Routes
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

### Includes
- route files
- basic page composition
- placeholder or starter content blocks

---

## Step 8 — Structured Content Wiring

### Goal
Introduce the approved local content model.

### Includes
- content files
- shared content types
- route/page use of structured content
- event and venue content hookup

### Rules
- no CMS yet
- no backend yet
- use approved content shapes only

---

## Step 9 — Booking and Contact Flow

### Goal
Implement the approved booking/contact interaction path.

### Includes
- booking CTA behavior
- contact form structure
- booking inquiry structure
- external workflow integration points if approved

### Rules
- keep implementation simple
- do not build a custom booking engine
- do not introduce unnecessary backend complexity

---

## Step 10 — Brand Polish and Responsive Refinement

### Goal
Make the site feel properly branded and responsive.

### Includes
- spacing refinement
- responsive tuning
- typography refinement
- CTA consistency
- visual hierarchy improvements

---

## Step 11 — QA Pass

### Goal
Validate the build against the repo docs.

### Includes
- scope check
- brand check
- responsive check
- accessibility check
- route check
- CTA check
- performance sanity check

---

## Step Completion Format

After each step, Cursor should return:

### Completed
A short summary of what was built

### Files Changed
A list of files created or updated

### Notes
Any assumptions or tradeoffs

### Next Step
Exactly one next step from this document