# Routes and Page Specs

## Purpose

This document defines the approved MVP routes and what each page is responsible for.

Cursor should use this file to understand:
- what pages exist
- what each page is for
- which sections belong on each page
- what the primary CTA is
- what not to invent

---

## Approved MVP Routes

- `/`
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

Do not create additional major routes unless the project docs are updated.

---

## `/` — Home

### Purpose
The homepage should create a strong first impression and quickly communicate:
- what Uptown Gaming is
- the community/event energy
- the venue value
- the next best actions for the visitor

### Primary Audience
- first-time visitors
- local community visitors
- event organizers
- people arriving from social links

### Primary CTA
- Book the Space

### Secondary CTAs
- View Events
- Learn About the Venue
- Contact

### Suggested Section Order
1. Hero
2. Brand / value proposition intro
3. Events preview
4. Venue / amenities highlight
5. Booking CTA
6. Social proof / community / supporting section
7. Footer

### Notes
The homepage should not feel overloaded.
It should feel energetic, confident, and clear.

---

## `/events` — Events

### Purpose
Showcase events and make event discovery easy.

### Primary Audience
- local visitors
- returning visitors
- community members
- people arriving from social channels

### Primary CTA
- View Event / Learn More
- Secondary possible CTA: Book the Space

### Suggested Sections
1. Page intro
2. Event list or event grid
3. Featured event or spotlight
4. Supporting CTA for venue booking or contact

### Notes
This page should help establish activity and legitimacy.
It should not require a complex backend in MVP.

---

## `/book` — Book the Space

### Purpose
Convert interested organizers or customers into booking inquiries.

### Primary Audience
- event organizers
- community organizers
- collaborators
- brands or groups interested in using the venue

### Primary CTA
- Start Booking Inquiry
- Contact for Booking

### Suggested Sections
1. Page intro
2. Who the space is for
3. Venue value / amenities snapshot
4. Booking process overview
5. Booking CTA or inquiry form/workflow
6. FAQ if useful

### Notes
This page must make the booking path clear.
Do not build a custom booking engine for MVP unless explicitly approved.

---

## `/venue` — Venue

### Purpose
Highlight the physical space, amenities, and reasons the venue is valuable.

### Primary Audience
- organizers
- first-time visitors
- people comparing the venue for events

### Primary CTA
- Book the Space

### Secondary CTA
- Contact
- View Events

### Suggested Sections
1. Intro
2. Venue features / amenities grid
3. Use cases
4. Supporting visual or proof section
5. Booking CTA

### Notes
The page should communicate value clearly and quickly.
It should help people understand why the space is worth booking.

---

## `/about` — About

### Purpose
Explain the story, identity, and community focus of Uptown Gaming.

### Primary Audience
- first-time visitors
- people trying to understand the brand
- community-minded visitors
- potential collaborators

### Primary CTA
- View Events
- Book the Space
- Contact

### Suggested Sections
1. Intro / who we are
2. Brand story
3. Community values
4. Why Uptown Gaming exists
5. CTA section

### Notes
This page should build trust and identity.
It should feel human and brand-aligned, not generic.

---

## `/contact` — Contact

### Purpose
Provide a direct path for inquiries and outreach.

### Primary Audience
- organizers
- potential customers
- collaborators
- visitors with general questions

### Primary CTA
- Submit Inquiry

### Suggested Sections
1. Intro
2. Contact details or contact options
3. Contact form or inquiry path
4. Social links or supporting info

### Notes
Keep this page simple, clear, and usable on mobile.

---

## Route Rules

### Do
- keep all MVP routes public-facing
- keep route responsibilities distinct
- compose pages from reusable sections
- align all page CTAs with the product goals

### Do Not
- invent new major routes
- add dashboard/app routes
- merge unrelated purposes into one page
- create overly complex flows for MVP

---

## Section Design Rules

Across all routes:
- prioritize mobile readability
- keep section order intentional
- avoid clutter
- keep CTA hierarchy clear
- use reusable patterns
- follow the approved brand rules

---

## Build Guidance

When implementing a page:
1. read this file
2. confirm the page purpose
3. confirm the approved section order
4. use existing components and section patterns
5. keep content aligned with the product brief and MVP scope