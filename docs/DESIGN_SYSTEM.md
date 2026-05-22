# Design System

## Purpose

This document defines the reusable visual and interaction system for the Uptown Gaming website MVP.

Cursor should use this file to keep the UI:
- consistent
- mobile-first
- brand-aligned
- reusable
- readable
- controlled in visual energy

This design system should support a bold, event-driven gaming brand without becoming chaotic or overly decorative. It should reinforce Uptown Gaming as a community-centered event destination, not a restaurant-first site. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

---

## Design Principles

### 1. Mobile First
Design for small screens first, then scale up.
The default experience should feel intentional, readable, and usable on mobile. :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}

### 2. Brand First
The site should communicate Uptown Gaming’s identity immediately:
- gaming community
- event energy
- credibility
- accessibility
- local culture

The interface should feel like Uptown Gaming, not a generic startup template. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

### 3. Event and Booking Focus
The design should guide people toward:
- learning about events
- understanding the venue
- booking the space
- contacting the team

Do not let food, bar, or restaurant cues dominate the experience. :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

### 4. Decorative but Controlled
The design can have personality, but must remain structured.
Visual energy should come from hierarchy, media, contrast, and composition, not clutter. :contentReference[oaicite:8]{index=8} 

### 5. Reuse Over Reinvention
A small number of strong patterns should be repeated consistently.
Do not create one-off visual systems for each page.  

### 6. Accessibility Is Part of the Design
Readable type, strong contrast, visible focus states, and clear CTA hierarchy are core design requirements.  

---

## Brand Foundation

### Brand Tone
The UI should feel:
- bold
- energetic
- welcoming
- polished
- community-centered
- premium but accessible 

### Brand Non-Goals
The UI should not feel:
- generic
- overly corporate
- cluttered
- gimmicky
- visually noisy
- restaurant-first 

---

## Color System

Use semantic tokens in implementation. Do not scatter raw hex values throughout the codebase. :contentReference[oaicite:16]{index=16} 

### Core Brand Colors
- Brand green: `#0B7155`
- Brand gold: `#F2AB00`
- Dark neutral: `#191919`
- Light neutral: `#F2F2F2`
- Black: `#000000` 

### Recommended Semantic Tokens
- `brand-primary` = `#0B7155`
- `brand-accent` = `#F2AB00`
- `surface-dark` = `#191919`
- `surface-light` = `#F2F2F2`
- `surface-black` = `#000000`
- `text-primary` = `#191919`
- `text-inverse` = `#F2F2F2`
- `text-muted` = a toned neutral derived from the approved neutral system
- `border-muted` = a subtle neutral border derived from the approved neutral system
- `focus-ring` = brand accent or brand primary, whichever produces stronger visibility

### Color Usage Rules
- Green is the primary brand color.
- Gold is a support accent.
- Dark surfaces should be used for emphasis, contrast, and brand mood.
- Light surfaces should preserve readability and give the UI breathing room.
- Accent color should highlight actions or emphasis, not flood the screen. 

### Recommended Usage Balance
- Base surfaces: mostly light or dark neutrals
- Primary emphasis: green
- Secondary emphasis: gold
- Text: dark on light surfaces, light on dark surfaces
- Borders/dividers: muted neutral usage only

### Do Not
- invent extra brand colors
- use neon-like colors outside the approved palette
- overuse gold
- place green or gold text on low-contrast backgrounds
- use gradients on logo assets or as a substitute for hierarchy 

---

## Typography System

The approved brand type system is:
- Powerr (Extra Bold) for the logotype/logo wording
- QT Palatine for body text and general website use  

### Font Roles

#### 1. Brand Display / Logo Font
**Powerr (Extra Bold)**

Use for:
- official logo treatment only
- highly limited brand moments only if explicitly approved

Do not use for:
- paragraphs
- standard headings across the site
- button labels
- nav items
- forms
- long UI text 

#### 2. Primary Site Font
**QT Palatine**

Use for:
- body copy
- headings
- nav text
- buttons
- captions
- forms
- supporting labels
- long-form readable content  

### Type Hierarchy
Keep the hierarchy simple and reusable.

Suggested levels:
- `display` — reserved for hero headline moments
- `h1`
- `h2`
- `h3`
- `body-lg`
- `body`
- `body-sm`
- `label`
- `caption`

### Typography Rules
- prioritize readability on mobile
- keep heading styles consistent across pages
- keep paragraph widths comfortable
- do not use too many font sizes
- do not create multiple unrelated heading systems
- use weight, size, spacing, and contrast for hierarchy before adding decorative effects 

### Line Length Guidance
- body text should not stretch too wide on desktop
- long paragraphs should live in constrained text containers
- hero text should be visually strong but still readable on small screens

### Suggested Type Rhythm
- headline followed by short support copy
- support copy followed by CTA group or structured content
- generous spacing between text blocks

---

## Spacing System

Spacing should create structure, rhythm, and calm.
A bold brand still needs breathing room. 

### Spacing Principles
- use a small, repeatable spacing scale
- keep section spacing generous
- keep internal component spacing consistent
- reduce crowding on mobile
- avoid one-off spacing values unless truly necessary

### Recommended Spacing Scale
Use a consistent scale such as:
- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `2xl`
- `3xl`

Implementation can map these to Tailwind spacing tokens, but usage should remain consistent.

### Section Spacing Rules
- major sections should have visibly distinct vertical spacing
- section padding should scale up on larger screens
- dense sections should still preserve clear grouping
- CTA sections should have enough spacing to feel important

### Content Spacing Rules
- keep heading-to-body spacing consistent
- keep card internal padding consistent
- keep list spacing consistent
- keep button group spacing consistent

---

## Layout System

### Container Rules
Use one standard content container pattern across the site. 

Container responsibilities:
- set max content width
- center content
- provide mobile-safe horizontal padding
- maintain page consistency

Do not create multiple competing page-width systems without approval.

### Content Width Rules
Use a few controlled width patterns:
- full width for edge-to-edge brand/media moments when appropriate
- standard container width for most sections
- narrow text width for long-form content
- medium content width for intros, CTAs, and forms

### Grid Rules
Use simple grids:
- single-column by default on mobile
- two-column or three-column layouts only when content benefits
- avoid over-complex nested grid structures in MVP

### Alignment Rules
- align section content intentionally
- left-align most readable text blocks
- center-align only when the section purpose supports it, such as hero intros or CTA emphasis
- keep alignment consistent within a section

---

## Surface System

Use a limited set of surface treatments.

### Surface Types
- `surface-light`
- `surface-dark`
- transparent/minimal surface
- emphasized card/panel surface when needed

### Surface Rules
- use surface changes to define section boundaries
- do not over-stack too many decorated panels
- use contrast to separate content, not heavy ornament
- card surfaces should remain readable and consistent

---

## Border Radius and Depth

### Border Radius
Use a small, consistent radius system.
Suggested sizes:
- subtle radius for cards, inputs, and buttons
- slightly larger radius only for intentional branded emphasis

Do not mix many unrelated corner styles.

### Shadows
Use shadows sparingly.
Shadows should:
- support separation
- add polish
- stay subtle

Do not rely on heavy shadow effects for identity.

### Borders
Use borders for structure where needed:
- cards
- form fields
- subtle section separators
- navigation emphasis

Borders should be soft and consistent, not harsh unless a deliberate strong divider is needed.

---

## Button System

Buttons are a primary conversion tool and should be highly consistent. 

### Approved Button Variants
- `primary`
- `secondary`
- `ghost` only if clearly needed

### Primary Button
Use for:
- Book the Space
- Start Booking Inquiry
- key conversion actions

Expected feel:
- strong
- clear
- high contrast
- visually important

### Secondary Button
Use for:
- View Events
- Learn More
- supporting actions that should not compete with the primary CTA

### Ghost/Text Button
Use sparingly for:
- low-emphasis actions
- inline page actions
- secondary navigation moments

### Button Rules
- keep button shapes consistent
- keep padding consistent
- keep label casing consistent
- keep hover/focus/active states consistent
- ensure mobile tap targets are large enough

### Do Not
- create many button styles
- use different button corner systems across pages
- rely on color alone for button importance
- create decorative buttons that sacrifice clarity

---

## Link System

Links should be obvious, readable, and accessible.

### Link Rules
- distinguish links clearly from body text
- use hover/focus states consistently
- ensure contrast is strong enough on both light and dark surfaces
- external links should be handled clearly when relevant

### CTA Links vs Text Links
- CTA-like links should use button styling if they are major actions
- inline text links should remain simpler and lighter

---

## Card System

Cards should be used only when content benefits from repeated structure. 

### Appropriate Card Uses
- event previews
- venue features
- partner/community support items
- highlight panels
- FAQ items if accordion/panel styling is used

### Card Rules
- use one core card pattern
- vary content, not the entire visual system
- keep padding consistent
- keep border/shadow treatment consistent
- maintain readable content density

### Card Content Order
In general:
1. label or meta
2. title
3. supporting description
4. optional CTA

### Do Not
- create multiple visually unrelated card systems
- overload cards with too many nested actions
- make every piece of content a card

---

## Section System

Pages should be composed from reusable section patterns. 

### Core Section Types
- Hero
- Brand Intro
- Events Preview
- Venue Features
- Booking CTA
- Social Proof / Community Support
- FAQ
- Contact / Inquiry

### Section Rules
- each section should have one clear purpose
- each section should have a clear visual start and end
- sections should preserve rhythm across the page
- supporting sections should not compete with the primary CTA
- sections should follow approved route responsibilities 

### Section Heading Pattern
A standard section heading block should usually include:
- eyebrow or optional label if needed
- heading
- short support copy

Not every section needs all three, but the pattern should be consistent.

---

## Navigation System

Navigation should stay simple and aligned to the approved MVP routes:
- Home
- Events
- Book the Space
- Venue
- About
- Contact 

### Header Rules
- logo should be clear and prominent
- navigation should not feel crowded
- booking-related CTA can be emphasized
- mobile nav should be easy to open, scan, and close

### Footer Rules
Footer may include:
- quick links
- social links
- contact info
- booking CTA
- copyright/supporting brand content :contentReference[oaicite:34]{index=34}

---

## Form System

Forms should support booking and contact without feeling like a custom application flow. 

### Form Principles
- keep forms short
- ask only for information needed to start a conversation
- make labels explicit
- make errors clear
- keep mobile usability high

### Field Rules
- labels should always be visible
- fields should have consistent height and padding
- helper/error text should be readable
- required states should be clear
- focus states should be obvious

### Form Tone
The form should feel approachable, not bureaucratic.

---

## Imagery and Media System

Media is important because the site should communicate culture and atmosphere quickly. The user goals also call for some form of media upon arrival to the site. :contentReference[oaicite:36]{index=36}

### Media Should Show
- the venue
- gaming activity
- community
- events
- professionalism
- energy
- physical space value 

### Media Rules
- prioritize strong, intentional imagery
- avoid low-quality assets
- avoid cluttered collage layouts unless highly controlled
- keep media crops consistent
- do not let media reduce text readability
- use overlays only when contrast is preserved

### Hero Media Guidance
Hero media should:
- support immediate brand recognition
- reinforce event/community identity
- preserve readable text layering
- not feel chaotic on small screens

---

## Iconography and Decorative Elements

### Icon Rules
- use icons only when they improve scanning or clarity
- icon style should remain consistent
- do not overdecorate simple UI with excessive icon usage

### Decorative Treatment
Allowed:
- controlled contrast blocks
- subtle accents
- intentional brand color moments
- strong typography hierarchy

Not allowed:
- excessive visual noise
- random abstract shapes without system value
- decorative layers that reduce clarity

---

## Motion System

Motion should support hierarchy and interactivity, not become part of the brand gimmick. :contentReference[oaicite:38]{index=38} 

### Motion Rules
- keep motion subtle
- use motion to clarify hover/focus/open states
- use small transitions for polish
- support reduced motion preferences

### Appropriate Motion Uses
- button hover states
- nav open/close transitions
- card hover polish
- section reveal only if subtle and non-essential

### Do Not
- animate large amounts of content unnecessarily
- use flashy motion as decoration
- require motion for understanding content

---

## Responsive Rules

The design system must hold up across:
- small mobile
- standard mobile
- tablet
- desktop 

### Mobile Rules
- prioritize readability first
- keep tap targets large
- reduce overcrowding
- stack content before introducing side-by-side layouts
- preserve CTA visibility above the fold when appropriate

### Desktop Rules
- expand spacing and layout without losing focus
- avoid overly stretched text columns
- keep section hierarchy strong
- do not add decorative complexity just because space exists

---

## Accessibility Rules

Accessibility is a required part of the design system.  

### Required
- sufficient color contrast
- visible focus states
- semantic heading structure
- readable font sizes on mobile
- clear labels on forms
- readable text over images
- reduced motion support
- CTA clarity

### Accessibility Design Guardrails
- do not hide text in busy imagery
- do not rely only on color for status or meaning
- do not use low-contrast decorative text
- do not make hover the only way to discover important info

---

## Reuse Rules

Before introducing a new visual pattern, ask:
1. Can this be solved with the existing button, card, container, or section system?
2. Is this truly reusable?
3. Does it align with the brand rules?
4. Does it improve clarity without increasing complexity?

If not, do not add the new pattern yet. 

---

## Design QA Checklist

Before approving a design or implementation, confirm:
- it feels like Uptown Gaming
- it supports event and booking goals
- it is mobile-first
- typography is consistent
- color usage follows brand tokens
- the primary CTA is clear
- section rhythm is intentional
- there are no random one-off styles
- contrast is strong
- the page is energetic but controlled  

---

## Final Rule

When in doubt:
- simplify
- reuse
- preserve hierarchy
- preserve readability
- stay within brand rules
- stay within MVP scope

Do not invent a louder or more complicated visual system than the brand and product actually need. 