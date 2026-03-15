# Content Model

## Purpose

This document defines the approved structured content shapes for the Uptown Gaming website MVP.

Cursor should use this file to understand:
- what content types exist
- what fields belong to each type
- how content should be structured
- what pages/components can rely on

For MVP, content should remain simple, local, and easy to understand.

---

## Content Strategy for MVP

For MVP:
- use local structured content
- keep content simple and explicit
- avoid introducing a CMS until there is a clear need
- avoid a backend or database unless explicitly approved

Content should support:
- homepage sections
- event previews
- venue feature presentation
- booking content
- FAQs
- partner or community support sections

---

## Content Types

### `Event`
Represents an event shown on the site.

#### Fields
- `title: string`
- `slug: string`
- `date: string`
- `time?: string`
- `status?: "upcoming" | "sold_out" | "cancelled" | "completed"`
- `location?: string`
- `shortDescription: string`
- `fullDescription?: string`
- `featuredImage?: string`
- `organizer?: string`
- `ctaLabel?: string`
- `ctaHref?: string`
- `tags?: string[]`
- `featured?: boolean`

#### Notes
- use `slug` for linking or identification if needed
- keep the event model lightweight in MVP
- do not over-model event complexity yet

---

### `VenueFeature`
Represents a venue amenity, feature, or selling point.

#### Fields
- `title: string`
- `slug: string`
- `shortDescription: string`
- `icon?: string`
- `category?: string`
- `featured?: boolean`
- `displayOrder?: number`

#### Notes
- use for amenities, venue strengths, or organizer-facing features
- keep descriptions concise and useful

---

### `BookingOffering`
Represents a booking-related offering, use case, or support item.

#### Fields
- `title: string`
- `slug: string`
- `shortDescription: string`
- `idealFor?: string[]`
- `includedFeatures?: string[]`
- `ctaLabel?: string`
- `ctaHref?: string`
- `displayOrder?: number`

#### Notes
- use this to explain who the space is for or what booking supports
- do not turn this into a pricing engine or package system unless explicitly approved

---

### `FAQItem`
Represents a frequently asked question.

#### Fields
- `question: string`
- `answer: string`
- `category?: string`
- `displayOrder?: number`

#### Notes
- keep answers concise and useful
- use for booking, venue, or general informational clarity

---

### `Partner`
Represents a partner, supporter, community collaborator, or proof item.

#### Fields
- `name: string`
- `slug: string`
- `description?: string`
- `logo?: string`
- `href?: string`
- `featured?: boolean`
- `displayOrder?: number`

#### Notes
- use only where the partner/community section adds real trust or relevance
- do not clutter the site with unnecessary logos or items

---

### `Announcement`
Represents a small sitewide or page-level informational banner.

#### Fields
- `label?: string`
- `message: string`
- `ctaLabel?: string`
- `ctaHref?: string`
- `active: boolean`

#### Notes
- use sparingly
- keep announcements concise
- do not overload the interface with banners

---

## Page Usage Guidance

### Homepage
May use:
- `Event[]`
- `VenueFeature[]`
- `Partner[]`
- `Announcement`
- optional `FAQItem[]`

### Events Page
May use:
- `Event[]`

### Book Page
May use:
- `BookingOffering[]`
- `VenueFeature[]`
- `FAQItem[]`

### Venue Page
May use:
- `VenueFeature[]`
- optional `Partner[]` or supporting proof content

### About Page
May use:
- simple static content
- optional `Partner[]`
- optional supporting content blocks

### Contact Page
May use:
- mostly static content
- optional `FAQItem[]`

---

## Suggested Local File Organization

Examples:

```txt
content/
  events.ts
  venue-features.ts
  booking-offerings.ts
  faq.ts
  partners.ts
  announcements.ts

  Each file should export typed structured content.

---

## Type Guidance

Shared TypeScript types should be defined in `types/` and reused across:
- content files
- section components
- pages

Avoid redefining the same shapes in multiple places.

---

## Modeling Rules

### Do
- keep content models simple
- prefer explicit fields
- model only what the MVP needs
- use arrays of typed objects for local content
- update this file when a new real content type is introduced

### Do Not
- over-engineer relationships
- add backend-style complexity
- model hypothetical future needs
- create giant all-purpose content objects
- turn MVP content into a CMS architecture too early

---

## Content Non-Goals

Do not introduce:
- user-generated content systems
- admin workflows
- rich publishing systems
- pricing engines
- event inventory systems
- account-based content management

unless explicitly approved in later phases

---

## Review Checklist

Before approving a content model:
- does it support a real MVP need?
- is it simple to understand?
- is it typed clearly?
- is it likely to remain stable during MVP?
- is it free from unnecessary future-facing complexity?