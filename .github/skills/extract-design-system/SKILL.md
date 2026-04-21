---
name: extract-design-system
description: "Extract a design system from live websites by reading URLs. Captures colors, typography, spacing, components, and layout patterns into a DESIGN-SYSTEM.md file. Use when user wants to reverse-engineer a site's design, extract CSS tokens, capture a design system from a URL, clone a site's look and feel, or build pages matching an existing site."
argument-hint: "Provide one or more URLs to extract the design system from"
---

# Skill: Extract Design System

## Overview

Reverse-engineer a complete design system from one or more live websites. Fetches each URL, analyzes the HTML and CSS, and produces a structured `DESIGN-SYSTEM.md` file containing design tokens, full CSS, and reusable HTML component snippets.

The output file follows the same format used by the `build-landing-page` skill and can be directly consumed by any agent building webpages.

---

## Step 1 — Collect URLs

Ask the user for:

| Field               | Required | Notes                                                                                                                                                                 |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary URL**     | Yes      | The main page to extract from                                                                                                                                         |
| **Additional URLs** | Optional | Inner pages, subpages, or alternate states to capture more components                                                                                                 |
| **Output path**     | Optional | Where to save the DESIGN-SYSTEM.md. Default: `.github/skills/extract-design-system/DESIGN-SYSTEM.md`                                                                  |
| **Target use case** | Optional | What the design system will be used for (e.g. "rebuild their landing page", "match their style for a new feature page"). Helps prioritize which components to extract |

---

## Step 2 — Fetch and analyze each URL

For each URL provided:

1. **Fetch the page** using the web fetch tool with query "CSS styles design colors typography fonts layout components"
2. **Extract raw data** — capture the HTML structure and any inline/embedded CSS

Perform the extraction in a single pass per URL. Do NOT make redundant fetches.

---

## Step 3 — Extract design tokens

From the fetched content, identify and document each category below. Use the [extraction checklist](./references/extraction-checklist.md) for the full list of properties to capture.

### 3a — Colors

| Token               | What to capture                                         |
| ------------------- | ------------------------------------------------------- |
| **Primary/accent**  | Main brand color(s) used for buttons, links, highlights |
| **Secondary**       | Supporting colors for hover states, secondary actions   |
| **Background**      | Page background, card backgrounds, section alternates   |
| **Text**            | Primary text, muted/secondary text, heading colors      |
| **Border**          | Border and divider colors                               |
| **Status/semantic** | Success, error, warning, info colors if present         |
| **Gradients**       | Any gradient values used in backgrounds or text         |

Express colors as hex values. Also compute RGB triplets for `rgba()` usage.

### 3b — Typography

| Token               | What to capture                                           |
| ------------------- | --------------------------------------------------------- |
| **Font families**   | Primary (body), heading, monospace/code fonts             |
| **Font sizes**      | Scale from small to display — capture actual values used  |
| **Font weights**    | All weights observed (400, 500, 600, 700, 800, etc.)      |
| **Line heights**    | Body line-height, heading line-height                     |
| **Letter spacing**  | Any tracking adjustments (especially on headings, labels) |
| **Text transforms** | Uppercase labels, capitalization patterns                 |

### 3c — Spacing & Layout

| Token                   | What to capture                             |
| ----------------------- | ------------------------------------------- |
| **Container max-width** | Main content width constraint               |
| **Section padding**     | Vertical rhythm between sections            |
| **Component gaps**      | Grid gaps, flex gaps, card spacing          |
| **Inner padding**       | Card padding, button padding, input padding |

### 3d — Shape & Effects

| Token                | What to capture                                             |
| -------------------- | ----------------------------------------------------------- |
| **Border radius**    | Button radius, card radius, badge/pill radius, input radius |
| **Shadows**          | Card shadows, button shadows, hover shadows, glow effects   |
| **Backdrop filters** | Blur effects on navs or overlays                            |
| **Transitions**      | Default transition timing, hover/active transitions         |

### 3e — Breakpoints

| Token                   | What to capture                                                |
| ----------------------- | -------------------------------------------------------------- |
| **Breakpoints**         | Media query values used for responsive layout                  |
| **Responsive patterns** | What changes at each breakpoint (columns, padding, visibility) |

---

## Step 4 — Extract component patterns

Identify the recurring UI components on the page. For each component, capture:

1. **Semantic HTML structure** — the minimal clean markup
2. **CSS rules** — all styles specific to that component
3. **Variants** — different states or sizes (hover, active, primary/outline)

### Components to look for

Scan for these common patterns (skip any that don't appear on the site):

- **Navigation** — sticky/fixed nav, brand, links, CTA button
- **Hero section** — headline, subheadline, CTA buttons, background treatment
- **Buttons** — primary, secondary/outline, sizes, icon buttons
- **Cards** — feature cards, content cards, pricing cards
- **Grid layouts** — feature grids, item grids, gallery grids
- **Lists / Steps** — numbered steps, timeline, process flow
- **Code blocks** — styled pre/code blocks
- **Forms** — inputs, labels, fieldsets, submit buttons
- **Badges / Tags** — status badges, category labels, pill tags
- **CTA sections** — banner CTAs, inline CTAs
- **Footer** — layout, links, branding
- **Testimonials** — quote blocks, avatar + name patterns
- **Pricing tables** — tiers, feature comparison
- **Accordion / FAQ** — expandable sections
- **Modals / Overlays** — popup patterns
- **Images / Media** — image treatments, aspect ratios, overlays

---

## Step 5 — Compose the DESIGN-SYSTEM.md

Write the output file using the template structure from [output-template.md](./references/output-template.md).

The file must follow this structure:

```
# [Site Name] Design System

## Design Tokens
  ### Colors
  ### Typography
  ### Spacing
  ### Shape & Effects
  ### Breakpoints

## Full CSS
  (all extracted CSS as a single embeddable block)

## Themes (if multiple color schemes detected)

## Available Components
  (one subsection per component with HTML snippet)
```

### Rules for the output

- **CSS custom properties** — define all tokens as CSS custom properties in `:root`
- **Full CSS block** — provide a single, complete CSS block that can be embedded verbatim in a `<style>` tag
- **Component HTML** — for each component, show a minimal, clean HTML snippet inside a fenced code block
- **Self-contained** — the CSS + HTML snippets must work together without external dependencies
- **Normalized** — clean up vendor-specific noise, remove analytics/tracking classes, simplify overly-specific selectors
- **Renamed classes** — use clear, semantic class names (not the original site's obfuscated or framework-generated names)
- **Comments in CSS** — use `/* ── Section Name ── */` comment style to separate CSS sections
- **No JS** — do not include JavaScript. Capture only the visual/structural design system

---

## Step 6 — Validate and review

After generating the DESIGN-SYSTEM.md:

1. **Check completeness** — verify all major components visible on the source pages are captured
2. **Check consistency** — ensure tokens are used consistently in the CSS (no hardcoded values that should be variables)
3. **Check readability** — ensure the file is well-structured and easy to navigate
4. **Ask the user** — present a summary of what was extracted:
   - Number of color tokens
   - Font families found
   - Number of components captured
   - Anything that looked ambiguous or couldn't be fully extracted
5. **Offer refinement** — ask if the user wants to add/remove components, adjust naming, or fetch additional pages

---

## Tips

- **Multiple pages = better coverage**: Inner pages often reveal components (forms, tables, accordions) not on the homepage
- **Dark/light modes**: If the site supports themes, note both sets of color tokens
- **Responsive behavior**: Note which components change layout at breakpoints
- **When CSS is minified or obfuscated**: Focus on computed styles visible in the HTML structure rather than trying to reverse-engineer class names. Create clean, semantic replacements
- **Framework-generated markup**: Strip framework artifacts (React data attributes, Tailwind utilities) and produce clean semantic HTML + CSS
