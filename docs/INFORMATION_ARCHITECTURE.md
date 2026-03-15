# Information Architecture

## Purpose

This document defines the sitemap, navigation structure, footer structure, and primary user journeys for the Uptown Gaming website MVP.

Cursor should use this file to keep:
- the route structure clear
- the navigation consistent
- page relationships intentional
- user flows focused on events, venue discovery, and booking
- the MVP small and easy to extend later

This document is about **how information is organized and discovered**, not about final visual design.

---

## IA Principles

### 1. Event and Booking First
The site architecture should guide users toward:
- discovering events
- understanding the venue
- booking the space
- contacting the team

The architecture should not feel restaurant-first.

### 2. Mobile-First Navigation
The route structure and navigation should be easy to scan and use on mobile first.
Users should be able to understand the site quickly from a small-screen menu.

### 3. Small, Clear MVP
The sitemap should stay compact.
Every page should have a clear purpose.
Do not introduce extra pages unless they solve a real MVP need.

### 4. Clear Conversion Paths
Important pages should point users toward the main conversion:
- booking inquiry
And secondary conversions:
- discover events
- learn about the venue
- contact the team
- follow social channels

### 5. Reuse and Extend
The IA should support future growth, but should not include future routes prematurely.

---

## Primary Audience Types

The MVP should serve these main visitor types:

### 1. Local Visitor / Community Member
Someone who wants to:
- see what Uptown Gaming is
- discover events
- understand the vibe
- follow on social
- decide whether to attend

### 2. Organizer / Booker
Someone who wants to:
- evaluate the venue
- understand what the space offers
- determine if it fits their event
- start a booking inquiry

### 3. Curious Social Visitor
Someone who may come from:
- Instagram
- event promotion
- a friend
- word of mouth
- search

They need a fast explanation of:
- what Uptown Gaming is
- what happens there
- whether they should attend or reach out

---

## Primary Conversion Model

### Primary Conversion
- booking inquiry / book the space

### Secondary Conversions
- discover events
- learn about the venue
- contact the team
- follow social channels

Every major page should support one of these conversions.

---

## MVP Sitemap

### Approved MVP Routes
- `/`
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

Do not add extra top-level routes in MVP without approval.

---

## Route Roles

### `/` — Home
#### Purpose
The homepage is the main orientation page.
It should quickly explain:
- what Uptown Gaming is
- why it matters
- what people can do next

#### Home Should Help Users:
- understand the brand immediately
- discover events
- understand the venue value
- move toward booking or contact

#### Home Priority
1. brand recognition
2. event/community value
3. venue/space value
4. booking CTA
5. supporting trust and context

#### Home Should Link To
- `/events`
- `/book`
- `/venue`
- `/about`
- `/contact`

---

### `/events` — Events
#### Purpose
Show current or representative event activity and help users understand the kinds of experiences Uptown Gaming offers.

#### Events Page Should Help Users:
- see what kinds of events happen
- understand event energy and variety
- decide whether to attend or follow
- move toward contact if needed

#### Events Page Priority
1. event discovery
2. event clarity
3. excitement and trust
4. next-step action

#### Events Page Should Link To
- `/contact`
- `/book`
- `/venue`

---

### `/book` — Book the Space
#### Purpose
This is the primary conversion page for organizers, collaborators, and people interested in using the venue.

#### Book Page Should Help Users:
- understand that booking is possible
- see what kinds of bookings are relevant
- understand basic value/fit
- submit or start a booking inquiry

#### Book Page Priority
1. clear booking CTA
2. what the booking is for
3. who the space is for
4. basic expectations
5. easy inquiry path

#### Book Page Should Link To
- `/venue`
- `/contact`

---

### `/venue` — Venue
#### Purpose
Explain the physical space, amenities, setup value, and overall venue offering.

#### Venue Page Should Help Users:
- understand what the space includes
- evaluate whether the venue fits their needs
- build trust in the offering
- move toward booking

#### Venue Page Priority
1. venue value
2. amenities/features
3. usability for events
4. booking CTA

#### Venue Page Should Link To
- `/book`
- `/contact`
- `/events`

---

### `/about` — About
#### Purpose
Provide brand story, mission, community context, and identity.

#### About Page Should Help Users:
- understand the brand more deeply
- connect with the mission
- build trust
- understand the community-first angle

#### About Page Priority
1. who Uptown Gaming is
2. mission and values
3. community relevance
4. supporting CTA

#### About Page Should Link To
- `/events`
- `/book`
- `/contact`

---

### `/contact` — Contact
#### Purpose
Provide a simple direct communication path.

#### Contact Page Should Help Users:
- ask a question
- reach out about events
- reach out about partnerships
- reach out about the venue or bookings

#### Contact Page Priority
1. clear contact path
2. easy form or contact method
3. no unnecessary friction

#### Contact Page Should Link To
- `/book`
- `/events`
- `/venue`

---

## Sitemap Structure

### Main Structure
```txt
/
├── /events
├── /book
├── /venue
├── /about
└── /contact

### Future Routes (Not in MVP)
These are allowed as future ideas only, not current routes:
- `/faq`
- `/gallery`
- `/partners`
- `/community`
- `/private-events`
- `/tournaments`
- `/announcements`

Do not build these now unless explicitly approved.

---

## Main Navigation Recommendation

### Approved Main Nav
- Home
- Events
- Book the Space
- Venue
- About
- Contact

### Nav Rules
- keep labels short and obvious
- do not add dropdown complexity in MVP
- do not hide key routes behind submenus
- do not overload the nav with utility links
- the booking path should remain easy to find

### Mobile Nav Rules
- show the same approved route set
- keep the order intentional
- make the booking path obvious
- keep tap targets large
- do not create a complex nested mobile menu

### Recommended Nav Order
1. Home
2. Events
3. Book the Space
4. Venue
5. About
6. Contact

This order supports quick scanning while keeping the primary conversion visible.

---

## Header Information Hierarchy

The header should prioritize:

### 1. Brand Presence
- logo
- clear recognition

### 2. Route Discovery
- access to approved pages

### 3. Primary Action
- booking-related CTA emphasis if supported by the layout

### Header Should Not
- feel crowded
- include too many secondary actions
- include utility clutter
- include routes outside MVP scope

---

## Footer Recommendation

The footer should support discovery, trust, and contact without becoming a second overloaded navigation system.

### Recommended Footer Groups

#### 1. Brand
- logo
- short brand description or mission line

#### 2. Explore
- Events
- Venue
- About

#### 3. Book / Contact
- Book the Space
- Contact

#### 4. Social
- Instagram
- other approved social links if available

#### 5. Optional Supporting Info
- copyright
- city/neighborhood reference if approved
- simple contact details if approved

### Footer Rules
- keep it structured and readable
- do not overload with too many links
- use the footer to reinforce trust and discovery
- keep social access visible but not dominant

---

## Internal Linking Rules

Internal linking should help users move naturally through the primary journeys.

### Recommended Link Relationships

#### Home
Should link strongly to:
- Events
- Book the Space
- Venue

#### Events
Should link to:
- Contact
- Venue
- Book the Space

#### Venue
Should link strongly to:
- Book the Space
- Contact

#### Book
Should link to:
- Venue
- Contact

#### About
Should link to:
- Events
- Book the Space
- Contact

#### Contact
Should link to:
- Book the Space
- Events

### Internal Linking Principles
- link users to the next obvious step
- do not create dead-end pages
- do not overlink every paragraph
- keep CTA destinations intentional

---

## Homepage Information Architecture

The homepage should work as a guided summary of the whole site.

### Recommended Homepage Section Order
1. Hero
2. Brand Intro
3. Events Preview
4. Venue Features
5. Booking CTA
6. Optional supporting trust/community section if approved

### Homepage IA Goal
Answer these questions quickly:
1. What is Uptown Gaming?
2. What happens here?
3. Why should I care?
4. Can I attend something?
5. Can I book the space?
6. How do I contact them?

### Homepage Rules
- do not try to fully replace every secondary page
- use the homepage as orientation and conversion
- keep section order intentional
- keep primary CTAs visible

---

## Page-to-Page Journey Mapping

### Journey 1 — Local Visitor
Typical path:
1. lands on Home
2. understands the brand
3. clicks Events
4. reviews event activity
5. follows social or contacts the team

#### IA Support Needed
- clear Events path from Home
- social/contact visibility
- strong event previews

---

### Journey 2 — Organizer / Booker
Typical path:
1. lands on Home or Venue page
2. evaluates the space
3. clicks Venue or Book the Space
4. reviews booking fit
5. submits inquiry through Book or Contact

#### IA Support Needed
- visible Book the Space path
- strong Venue-to-Book linking
- clear booking CTA on multiple pages

---

### Journey 3 — Curious Social Visitor
Typical path:
1. lands on Home from social or shared link
2. quickly learns what Uptown Gaming is
3. clicks Events, About, or Contact
4. decides whether to attend, follow, or reach out

#### IA Support Needed
- immediate homepage clarity
- strong brand explanation
- easy access to Events and Contact

---

## CTA Architecture

CTA placement should follow the information architecture, not feel random.

### Primary CTA
- Book the Space
- Start Booking Inquiry
- Inquire About the Space

### Secondary CTAs
- View Events
- Learn More About the Venue
- Contact Us
- Follow on Social

### CTA Rules by Page

#### Home
- primary: Book the Space
- secondary: View Events / Explore Venue

#### Events
- primary: Contact or event-related next step
- secondary: Book the Space / View Venue

#### Venue
- primary: Book the Space
- secondary: Contact

#### Book
- primary: submit inquiry
- secondary: View Venue / Contact

#### About
- primary: Explore Events or Book the Space
- secondary: Contact

#### Contact
- primary: send message / reach out
- secondary: Book the Space

---

## Content Grouping Rules

Information should be grouped by user intent, not by arbitrary content buckets.

### Use These Buckets
- events
- venue / amenities
- booking
- brand / mission
- contact
- social proof or community context

### Avoid
- mixing unrelated ideas in one section
- burying booking details inside general brand content
- hiding venue value under about content
- making contact difficult to find

---

## Naming Rules

Route labels, page titles, and nav labels should stay aligned.

### Preferred Labels
- Home
- Events
- Book the Space
- Venue
- About
- Contact

### Naming Rules
- use the same label consistently in nav, page headings, and CTA context when possible
- avoid switching between many synonyms
- keep labels human and obvious
- avoid clever naming that reduces clarity

---

## SEO-Aware IA Notes

The IA should support simple, strong route intent.

### Each Route Should Own a Distinct Intent
- `/` = main brand and conversion overview
- `/events` = event discovery
- `/book` = booking inquiry
- `/venue` = venue value and amenities
- `/about` = mission and story
- `/contact` = direct communication

### IA SEO Rules
- do not create multiple pages competing for the same exact purpose
- avoid thin duplicate routes
- keep route purpose clear and unique

---

## MVP IA Guardrails

### Do Not
- add dashboards
- add member portals
- add auth/account flows
- add nested route trees for future ideas
- add a restaurant-style menu/info architecture
- add many utility pages too early
- add event filtering systems unless the content volume truly requires it

### Keep
- route structure simple
- navigation obvious
- booking path visible
- event and venue value easy to discover
- content grouped around user needs

---

## IA Review Checklist

Before approving the information architecture, confirm:

- only approved MVP routes exist
- the main nav uses approved labels
- the footer supports discovery without overload
- the booking path is easy to find
- events are easy to discover
- venue value is easy to discover
- contact is always reachable
- pages do not overlap too heavily in purpose
- the site still feels event/community-first, not restaurant-first
- the IA supports mobile-first scanning

---

## Final Rule

When deciding where something belongs, ask:
1. What user need does this support?
2. Is this helping event discovery, venue understanding, booking, or contact?
3. Does this belong on an existing page instead of creating a new one?
4. Is the next step obvious from here?

If a piece of content or a route does not support a real MVP user journey, do not add it yet.