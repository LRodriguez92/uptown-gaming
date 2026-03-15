# QA Checklist

## Purpose

This document defines the minimum quality bar for the Uptown Gaming website MVP.

Cursor should use this checklist before considering any build step complete.

The goal is to make sure the site is:
- on-brand
- in scope
- responsive
- accessible
- technically sound
- reviewable

---

## How to Use This Checklist

Before marking a page, feature, or build step as done:

1. check it against the relevant product and architecture docs
2. verify it still fits MVP scope
3. verify the UI is consistent with the design system and brand rules
4. verify it works on mobile
5. verify the implementation did not introduce unnecessary complexity

---

## Scope QA

### Confirm
- the work matches the current approved build step
- no extra major features were added outside the step
- no out-of-scope systems were introduced
- no speculative “future-proofing” was added without approval

### Fail Conditions
- auth was added without approval
- backend/API work was added without approval
- extra routes or major features were invented
- component or content complexity expanded beyond MVP needs

---

## Brand QA

### Confirm
- approved brand colors are used consistently
- typography is consistent with the brand rules
- logo usage is correct
- the page feels like Uptown Gaming
- the design is energetic but controlled
- the page does not feel like a generic template
- the page does not feel restaurant-first

### Fail Conditions
- random colors were introduced
- typography is inconsistent
- logo treatment is distorted or low contrast
- the design feels visually noisy
- the page feels off-brand or generic

---

## Layout and Design System QA

### Confirm
- spacing is consistent
- container widths are consistent
- heading hierarchy is clear
- buttons follow the approved button system
- cards or content blocks are visually consistent
- sections feel intentional and readable
- CTAs are clearly distinguishable

### Fail Conditions
- multiple inconsistent button styles exist
- spacing varies randomly
- heading treatments are inconsistent
- one-off styles were introduced without reason
- visual rhythm feels chaotic or cramped

---

## Route QA

### Confirm
- only approved MVP routes exist
- each page aligns with its documented purpose
- page section order generally matches the route spec
- route names and navigation labels are consistent
- no hidden dashboard/app routes were introduced

### Fail Conditions
- extra routes were added without approval
- pages do not match their documented purpose
- route structure was changed casually
- navigation is inconsistent with the approved sitemap

---

## Content QA

### Confirm
- content aligns with the product brief
- messaging is clear and not generic
- content supports the correct CTAs
- structured content matches the approved content model
- content blocks are concise and useful
- placeholder content is clearly temporary if still present

### Fail Conditions
- content contradicts the product brief
- the messaging is vague or generic
- the content model was changed without documentation
- unnecessary or bloated content was added
- event/venue/booking messaging is unclear

---

## Component QA

### Confirm
- existing components were reused where appropriate
- new components solve a real repeated need
- components are appropriately scoped
- primitives remain simple and reusable
- there are not multiple competing versions of the same pattern

### Fail Conditions
- duplicate components were created unnecessarily
- overly abstract components were introduced
- one-off page patterns should have been reusable components
- reusable components were ignored in favor of ad hoc markup

---

## Responsive QA

### Confirm
- the page works well on mobile first
- text remains readable on small screens
- spacing holds up across breakpoints
- navigation works on mobile
- CTA buttons remain easy to tap
- layouts do not break at common screen sizes
- images/media scale cleanly

### Minimum Screen Checks
- small mobile
- standard mobile
- tablet
- desktop

### Fail Conditions
- text is cramped or too small on mobile
- components overflow or break layout
- CTA buttons are hard to tap
- navigation is difficult to use on small screens
- desktop layout works but mobile is poor

---

## Accessibility QA

### Confirm
- color contrast is strong enough
- text is readable over backgrounds and images
- focus states are visible
- interactive elements are keyboard accessible
- buttons and links are clearly labeled
- forms have labels and usable error states
- headings are used semantically
- images have alt text when needed
- motion is not required to understand content

### Fail Conditions
- poor contrast
- missing focus states
- keyboard traps or inaccessible controls
- form inputs without labels
- headings used only for appearance and not structure
- critical content hidden in inaccessible ways

---

## Interaction QA

### Confirm
- links work correctly
- buttons trigger the expected action
- CTAs are clearly placed
- hover/focus/active states are consistent
- motion and transitions are subtle and intentional

### Fail Conditions
- dead links
- unclear CTA actions
- inconsistent interaction states
- distracting or excessive motion

---

## Booking and Contact QA

### Confirm
- booking CTAs are visible and understandable
- contact paths are clear
- forms are simple and usable
- booking/contact experiences do not feel overcomplicated
- external workflow handoffs are clear if used

### Fail Conditions
- booking path is hard to find
- inquiry flow is confusing
- the form asks for too much too early
- implementation behaves like a custom booking engine unnecessarily

---

## Metadata and SEO QA

### Confirm
- pages have meaningful titles
- pages have useful descriptions
- important routes have clear metadata ownership
- social/share basics are considered
- page content matches route intent

### Fail Conditions
- missing or generic titles
- duplicate or weak descriptions
- metadata omitted from important routes
- route purpose and metadata do not match

---

## Performance QA

### Confirm
- pages feel reasonably fast
- unnecessary client-side code is avoided
- large dependencies were not added casually
- images are handled thoughtfully
- the implementation remains lightweight for a marketing site

### Fail Conditions
- excessive client-side rendering without reason
- large packages added for small problems
- obvious performance regressions
- heavy or bloated implementation for simple UI

---

## Code Quality QA

### Confirm
- files follow the approved architecture
- naming is clear and consistent
- code is scoped to the current step
- components are readable
- logic is not duplicated unnecessarily
- utility usage is consistent
- no unrelated refactors were bundled in

### Fail Conditions
- architecture was ignored
- naming is inconsistent or confusing
- changes sprawl across unrelated files
- code introduces avoidable complexity
- repeated logic is left unmanaged

---

## Final Step Review

Before marking a build step complete, confirm:

- the work stays within MVP scope
- the work follows the approved docs
- the UI is consistent
- the route/page purpose is clear
- the implementation works on mobile
- the code remains simple and maintainable
- the next step can build cleanly on top of it

---

## Required Completion Format for Cursor

When Cursor says a step is done, it should return:

### Completed
A short summary of what was built

### Files Changed
A list of files created or updated

### QA Notes
What was checked from this checklist

### Assumptions
Any assumptions made during implementation

### Next Recommended Step
Exactly one next step from `docs/BUILD_SEQUENCE.md`