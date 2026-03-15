# Component Spec

## Purpose

This document defines the approved component inventory for the Uptown Gaming website MVP.

Cursor should use this file to understand:
- what components are allowed
- what each component is responsible for
- when to reuse an existing component
- when not to invent new patterns

The goal is consistency, reuse, and controlled growth of the design system.

---

## Component Layering

Components should be created in this order:

1. UI primitives
2. Layout components
3. Section components
4. Form components
5. Page composition

Do not skip straight to many page-specific one-off components if a reusable pattern is possible.

---

## UI Primitives

### `Container`
#### Purpose
Provides consistent horizontal spacing and max width for page content.

#### Responsibilities
- center content
- enforce consistent page width
- provide responsive horizontal padding

#### Rules
- use this for standard page sections
- do not create multiple competing container patterns without approval

---

### `Button`
#### Purpose
Primary reusable CTA/button component.

#### Responsibilities
- support consistent CTA styling
- support primary and secondary actions
- maintain accessibility and predictable interaction states

#### Suggested Variants
- primary
- secondary
- ghost or text variant only if clearly needed

#### Rules
- keep the button system small
- do not create many unrelated button styles

---

### `SectionHeading`
#### Purpose
Reusable heading block for page sections.

#### Responsibilities
- render section title
- optionally render supporting text
- maintain heading consistency across routes

#### Rules
- use this before creating custom heading treatments
- keep hierarchy consistent

---

### `Card`
#### Purpose
Reusable content wrapper for structured content.

#### Possible Uses
- event preview
- venue feature
- community/supporting content
- partner highlight

#### Rules
- only create if the UI actually benefits from a repeated card pattern
- keep card treatments consistent across the site

---

### `Badge`
#### Purpose
Small label/status marker.

#### Possible Uses
- event status
- featured label
- category tag

#### Rules
- use sparingly
- avoid badge overload
- keep styles simple and readable

---

## Layout Components

### `Header`
#### Purpose
Shared top-level site navigation and brand presence.

#### Responsibilities
- render logo
- render approved nav items
- support mobile navigation behavior
- provide clear path to key routes

#### Rules
- nav should only include approved MVP routes
- keep header clear and not overcrowded

---

### `MobileNav`
#### Purpose
Mobile navigation experience for small screens.

#### Responsibilities
- provide access to approved routes
- stay usable and readable on mobile
- align with the brand and layout system

#### Rules
- keep interaction simple
- do not create a needlessly complex nav system

---

### `Footer`
#### Purpose
Shared site footer.

#### Responsibilities
- provide supporting navigation
- provide social/contact access
- reinforce brand presence

#### Possible Content
- nav links
- contact info
- social links
- copyright or brand footer content

---

## Section Components

### `HeroSection`
#### Purpose
Top-of-page hero area, especially for the homepage.

#### Responsibilities
- create a strong first impression
- communicate core brand value quickly
- provide primary CTA

#### Rules
- must support strong hierarchy
- should not become visually chaotic
- should remain readable on mobile

---

### `BrandIntroSection`
#### Purpose
Introduce Uptown Gaming’s core value proposition and identity.

#### Responsibilities
- explain what Uptown Gaming is
- reinforce community and event value
- build trust and clarity

---

### `EventsPreviewSection`
#### Purpose
Preview event activity on the homepage or supporting pages.

#### Responsibilities
- surface a small number of featured/upcoming events
- encourage deeper event exploration

#### Rules
- should connect to the full Events page
- should not require backend complexity in MVP

---

### `VenueFeaturesSection`
#### Purpose
Highlight venue features and amenities.

#### Responsibilities
- show why the venue is valuable
- support organizer and visitor understanding
- reinforce booking value

---

### `BookingCTASection`
#### Purpose
Drive visitors toward booking inquiry.

#### Responsibilities
- make booking feel clear and available
- reinforce why the space is worth booking
- provide a strong CTA path

---

### `SocialProofSection`
#### Purpose
Support trust through community, partners, atmosphere, or activity.

#### Possible Uses
- partner highlights
- supporting brand/community trust
- testimonials only if later approved
- social/community proof

#### Rules
- keep the section focused
- do not turn this into clutter

---

### `FAQSection`
#### Purpose
Answer common questions in a structured format.

#### Responsibilities
- remove uncertainty
- support booking and venue understanding
- make the site easier to navigate

#### Rules
- use only if useful for MVP
- avoid bloated FAQ content

---

## Form Components

### `ContactForm`
#### Purpose
Allow general inquiries and outreach.

#### Responsibilities
- collect basic contact information
- support a clear general contact path
- remain mobile-friendly and accessible

#### Rules
- keep fields minimal in MVP
- avoid overcomplicating the form

---

### `BookingInquiryForm`
#### Purpose
Allow users to start a booking-related inquiry.

#### Responsibilities
- capture key booking intent details
- support external workflow handoff if needed
- stay simple in MVP

#### Suggested Fields
- name
- email
- event type
- preferred date or timeframe
- message

#### Rules
- do not turn this into a custom booking engine
- keep the flow lightweight

---

## Page Composition Rules

Pages should be composed from approved sections whenever possible.

### Preferred Flow
- use UI primitives to build sections
- use sections to build pages
- avoid many one-off page-specific patterns

### Rules
- reuse existing components first
- only add new components when there is a clear repeated need
- update this document when introducing a meaningful new reusable component

---

## Component Creation Rules

Before creating a new component, ask:

1. Is this already covered by an existing component?
2. Is this likely to be reused?
3. Can this be solved by composing existing primitives?
4. Does this align with the brand and layout system?

If the answer is no, do not create a new reusable component yet.

---

## Component Non-Goals

Do not create:
- a huge component library before it is needed
- multiple visually inconsistent card systems
- many unrelated CTA/button systems
- overly abstract components with unclear usage
- one-off components that should just be page markup

---

## Review Checklist

Before approving a component:
- does it solve a real repeated need?
- is it consistent with the design system?
- is it appropriately scoped?
- is it reusable without being over-abstracted?
- does it support the MVP instead of expanding scope?