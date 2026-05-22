# Brand Rules

## Purpose

This document translates the Uptown Gaming brand direction into implementation rules for the website.

Cursor should use this document to maintain consistency in:
- color usage
- typography usage
- logo treatment
- spacing and hierarchy
- overall visual tone

If there is ever uncertainty, the implementation should stay conservative and consistent rather than improvising a new visual direction.

---

## Brand Direction

The Uptown Gaming website should feel:

- bold
- energetic
- community-centered
- polished
- premium but accessible
- visually strong without becoming chaotic

The visual system should support a strong first impression while keeping the experience easy to understand on mobile.

---

## Core Visual Priorities

1. Strong brand recognition
2. Clear hierarchy
3. Good contrast and readability
4. Mobile-first presentation
5. Consistent spacing and typography
6. Controlled visual energy

---

## Brand Personality

The site should feel:
- welcoming
- credible
- event-driven
- modern
- community-focused

The site should not feel:
- generic startup
- overly corporate
- visually noisy
- restaurant-first
- gimmicky or random

---

## Fonts

The website should follow the approved Uptown Gaming type system from the brand guide.

### Approved Fonts

#### 1. Powerr (Extra Bold)
Use for:
- logotype/logo wording only
- highly controlled branded display usage if explicitly approved

Rules:
- this is the primary logo/logotype typeface
- do not use it as the default body font
- do not overuse it for long headings, paragraphs, or UI text
- use it carefully so the logo retains its distinct identity

#### 2. QT Palatine
Use for:
- standard body text
- website content
- general UI copy
- supporting text
- paragraphs
- standard headings if needed
- general correspondence and supporting branded materials

Rules:
- this should be the default website typeface
- use it for most readable content across the site
- prioritize readability and consistency across devices
- keep type sizing and spacing clean and mobile-friendly

---

## Font Implementation Rules

### Primary Website Font
- Use **QT Palatine** as the main website font for body copy and most interface text.

### Logo Font
- Use **Powerr (Extra Bold)** only where the approved logo/logotype requires it.
- Do not recreate or fake the logo using typed text unless explicitly intended and approved.

### Heading Usage
- Default to a readable heading system built around the site’s core font strategy.
- If Powerr is ever used outside the logo, use it very sparingly and only for controlled display moments.
- Avoid turning the site into a novelty display-type experience.

### Fallback Guidance
If these exact fonts are not yet wired into the app:
- keep the implementation structurally ready for them
- use temporary fallback fonts only as placeholders
- do not let placeholder fonts define the final visual direction

---

## Typography Rules

Typography should feel strong, clean, and readable.

### General Rules
- prioritize readability on mobile
- keep heading hierarchy clear
- use a limited and consistent type scale
- avoid mixing too many visual styles
- keep line lengths reasonable

### Implementation Guidance
- define heading styles clearly
- define body text styles clearly
- define consistent spacing between headings, body text, and CTAs
- use typography to reinforce hierarchy, not decoration alone

### Do Not
- use too many font sizes
- create inconsistent heading treatments
- rely on decorative typography at the cost of readability
- use Powerr as the default paragraph font
- mix multiple extra display fonts into the UI
- let decorative typography reduce readability

---

## Color Rules

Use semantic brand tokens in code rather than scattering raw color values everywhere.

### Approved Core Colors
- Brand green: `#0B7155`
- Brand gold/accent: `#F2AB00`
- Dark neutral: `#191919`
- Light neutral: `#F2F2F2`
- Black: `#000000`

### Recommended Semantic Token Names
- `brand-primary`
- `brand-accent`
- `surface-dark`
- `surface-light`
- `text-primary`
- `text-inverse`
- `border-muted`

### Color Usage Guidance
- use green as the primary brand color
- use gold as a supporting accent, not the default color everywhere
- use dark backgrounds carefully with strong contrast
- keep text readable at all times
- maintain consistent token usage across components

### Do Not
- introduce random extra colors without approval
- overuse accent colors
- reduce contrast for style
- apply effects that make the brand feel inconsistent

---

## Logo Rules

The logo is a key brand asset and must be treated carefully.

### Required Rules
- use approved logo assets only
- preserve correct proportions
- maintain strong contrast between logo and background
- choose the correct logo variant for the surface/background

### Do Not
- stretch the logo
- rotate the logo
- skew the logo
- add gradients to the logo
- apply random effects to the logo
- place the logo on low-contrast backgrounds

---

## Layout and Spacing Rules

The site should feel intentional and well-structured.

### Rules
- use a consistent container width
- use a consistent spacing rhythm between sections
- keep layouts breathable on mobile
- avoid cramming too much into a single viewport
- use alignment consistently

### Visual Density
- bold does not mean crowded
- decorative does not mean chaotic
- sections should feel distinct and readable

---

## Component Consistency Rules

All UI should feel like it belongs to the same system.

### Rules
- use a small number of button styles
- use consistent card treatments
- use consistent section spacing
- use consistent border radius and shadow choices
- reuse existing components before creating new visual patterns

### Do Not
- create multiple unrelated button styles
- create multiple heading systems
- create one-off section styles without reason
- mix conflicting visual treatments

---

## Imagery and Media Direction

Media should reinforce energy, quality, and community.

### Use Media To Show
- the venue
- events
- activity
- people/community
- atmosphere
- professionalism and credibility

### Rules
- prefer media that supports the brand story
- avoid cluttered media layouts
- keep crops intentional
- avoid low-quality or inconsistent visual treatments

---

## Accessibility Rules

Brand presentation must still be accessible.

### Required
- strong color contrast
- readable text sizes
- visible focus states
- clear CTA visibility
- readable text on image backgrounds
- accessible interactive states

### Do Not
- hide important text in low contrast areas
- rely only on color to communicate meaning
- prioritize visual flair over usability

---

## Interaction and Motion Rules

Movement should support the experience, not distract from it.

### Rules
- use subtle motion only
- motion should reinforce hierarchy or interactivity
- keep transitions consistent
- support reduced motion preferences

### Do Not
- over-animate core content
- use flashy motion just for decoration
- make the interface feel noisy or unstable

---

## Brand Compliance Checklist

Before approving a design or implementation, confirm:

- colors follow the approved token system
- logo usage is correct
- contrast is strong
- typography is consistent
- spacing feels intentional
- the page feels energetic but controlled
- the page still feels mobile-first
- the design feels like Uptown Gaming, not a generic template

---

## Final Rule

When in doubt, choose the more consistent and restrained implementation.
Do not invent a new visual direction unless the brand documentation is explicitly updated.