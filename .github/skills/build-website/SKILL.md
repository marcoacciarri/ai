---
name: build-website
description: "Build a complete multi-page website (home, about, services, contact, etc.) using the extracted design system. Generates a site/ folder with shared CSS, JS, and individually-crafted HTML pages with consistent navigation. Use when user wants to build a website, create multiple pages, or needs more than a single landing page."
argument-hint: "Describe the website you want to build"
---

# Skill: Build Website

## Overview

Generate a complete, multi-page static website for a project using the extracted design system. Produces a `site/` folder with shared CSS, shared JS, and individually-crafted HTML pages — all with consistent navigation, header, and footer.

No frameworks, no build tools. Pure HTML + CSS + vanilla JS, deployable to GitHub Pages.

---

## Step 1 — Load the design system

Read the design system **before writing any code**.

The design system is always located at:

```
.github/skills/extract-design-system/DESIGN-SYSTEM.md
```

This file contains:

- **Design Tokens** — exact color, typography, spacing, shape, and breakpoint values
- **Full CSS** — a complete stylesheet to use as the foundation for `site/css/style.css`
- **Available Components** — HTML snippets for every component (nav, hero, cards, forms, footer, etc.)
- **Key Design Characteristics** — the defining visual patterns to preserve

**Read the entire file.** Do not skim or skip sections. The CSS and component snippets must be used as-is to maintain design fidelity.

If no design system exists at that path, **stop and tell the user** to run the `extract-design-system` skill first to extract one from a reference site. Do not proceed without a design system.

---

## Step 2 — Interview the user

Collect the following in one message:

### Brand & identity

| Field                  | Required | Notes                                     |
| ---------------------- | -------- | ----------------------------------------- |
| **Project/brand name** | Yes      | Used in nav, page titles, footer          |
| **Tagline**            | Yes      | One punchy sentence for the homepage hero |
| **Value proposition**  | Yes      | 2–3 sentences for the hero paragraph      |
| **Logo file**          | Optional | Path to logo image if available           |

### Pages

| Field                | Required | Notes                                                         |
| -------------------- | -------- | ------------------------------------------------------------- |
| **Pages needed**     | Yes      | Which pages to generate (e.g. Home, About, Services, Contact) |
| **Content per page** | Yes      | Brief description of what each page should contain            |

### Content

| Field                     | Required    | Notes                                                         |
| ------------------------- | ----------- | ------------------------------------------------------------- |
| **Key features/services** | Yes         | 3–6 items for service cards or feature sections               |
| **Key stats/numbers**     | Recommended | 2–4 numbers for stats bar (e.g. "50+ Projects", "4.9 Rating") |
| **Team members**          | Optional    | Names, roles, short bios for About page                       |
| **Testimonials**          | Optional    | Client quotes for social proof sections                       |
| **Portfolio/projects**    | Optional    | Project names, descriptions, images for gallery               |

### CTAs & contact

| Field                   | Required | Notes                                                              |
| ----------------------- | -------- | ------------------------------------------------------------------ |
| **Primary CTA**         | Yes      | Main button text + destination (e.g. "Get Started" → contact page) |
| **Secondary CTA**       | Optional | Docs, demo, "Learn More", etc.                                     |
| **Contact info**        | Yes      | Email, phone, address, social links                                |
| **Contact form fields** | Optional | Default: name, email, message                                      |

### Technical

| Field                          | Required | Notes                   |
| ------------------------------ | -------- | ----------------------- |
| **GitHub repo or website URL** | Yes      | Used in CTAs and footer |
| **Target audience**            | Optional | Helps write better copy |

---

## Step 3 — Plan the site structure

Based on the interview, plan the output:

```
site/
├── index.html              ← Home page
├── about.html              ← About page (if requested)
├── services.html           ← Services page (if requested)
├── contact.html            ← Contact page (if requested)
├── [other-pages].html      ← Any additional pages
├── css/
│   └── style.css           ← Shared stylesheet (design system + page-specific)
├── js/
│   └── main.js             ← Shared interactivity
└── images/                 ← Placeholder directory
```

### Rules for page planning

- Every page gets a **consistent nav, header, and footer**
- Nav includes links to **all pages** with the current page highlighted
- The homepage (`index.html`) is always the most content-rich page — hero, features, stats, testimonials, CTA
- Inner pages are focused — one clear purpose per page
- Every page has a **CTA section** above the footer driving users to the primary action

Present the planned site structure to the user and confirm before building.

---

## Step 4 — Create `site/css/style.css`

This is the shared stylesheet used by every page.

### Rules

- **Start with the Full CSS from the design system** — copy it verbatim as the foundation
- **Add the Google Fonts `@import`** specified in the design system at the top of the file
- **Do not modify the design system's CSS tokens** — `:root` variables must match exactly
- **Add page-specific styles after the design system CSS** — clearly marked with comments:

```css
/* ============================================
   Design System CSS (do not modify above)
   Page-specific additions below
   ============================================ */
```

- Add styles for: active nav state (`.nav-link.active`), page header banners for inner pages, any page-specific layouts
- Add scroll reveal animation CSS (`.reveal` class with opacity/transform transition)

---

## Step 5 — Create `site/js/main.js`

Shared JavaScript for all pages. Keep it under 60 lines. Include:

```javascript
// 1. Mobile menu toggle
// 2. Nav scroll effect (transparent → solid on scroll)
// 3. Active page highlighting (reads current filename, adds .active to matching nav link)
// 4. Scroll reveal with IntersectionObserver (stagger siblings by 80-100ms)
// 5. Smooth scroll for anchor links
```

### Rules

- **Vanilla JS only** — no libraries, no frameworks
- **Active page detection** — compare `window.location.pathname` against nav link `href` values
- **Works on all pages** — no page-specific conditionals unless absolutely necessary

---

## Step 6 — Build each HTML page

Generate each page one at a time. Every page follows this template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{Page Title} — {Brand Name}</title>
    <meta name="description" content="{page-specific description}" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- Nav (identical on every page) -->
    <!-- Page content (unique per page) -->
    <!-- Footer (identical on every page) -->
    <script src="js/main.js"></script>
  </body>
</html>
```

### Shared elements (identical across pages)

- **Nav** — logo/brand, links to all pages, mobile hamburger, primary CTA button
- **Footer** — brand info, nav links repeated, contact info, social links, copyright

### Per-page content rules

| Page                    | Sections to include                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Home** (`index.html`) | Hero, feature/service cards, stats bar, testimonials or social proof, portfolio preview (if applicable), CTA section |
| **About**               | Page header banner, company story, team members (if provided), mission/values, stats or milestones, CTA              |
| **Services**            | Page header banner, service cards (expanded with descriptions), process/how-we-work, pricing (if provided), CTA      |
| **Contact**             | Page header banner, contact form, contact info (email/phone/address), map placeholder, business hours (if provided)  |
| **Custom pages**        | Page header banner, content sections assembled from design system components                                         |

### Inner page headers

Every page except `index.html` should start (after nav) with a **page header banner**:

- Full-width section with the design system's dark/primary background
- Page title (H1) + short subtitle
- Optional breadcrumb (Home > Page Name)

### HTML quality rules

- **Use component HTML from the design system** as the structural blueprint
- **Maintain exact class names** — the CSS depends on them
- **Maintain exact layout proportions** from the design system
- **Write fresh, specific copy** — no generic filler text
- **Section numbering** — if the design system uses numbered headers, apply consistently
- **Images** — use descriptive bracket placeholders `[ Hero Image ]` or Unsplash URLs with `w=1920&q=80`
- `target="_blank" rel="noopener"` on all external links
- `aria-label` on icon-only buttons and links
- Form inputs have associated `<label>` elements
- All images have `alt` text

---

## Step 7 — Cross-page link verification

After generating all pages, verify:

- [ ] Every nav link points to the correct `.html` file
- [ ] All inter-page links work (e.g. "See our services" → `services.html`)
- [ ] CTA buttons link to the right pages (e.g. "Contact Us" → `contact.html`)
- [ ] Footer links match nav links
- [ ] No broken internal links or references to pages that don't exist

---

## Step 8 — Add the deploy workflow (if not present)

If `.github/workflows/deploy-pages.yml` does not already exist, create it:

```yaml
name: Deploy Website

on:
  push:
    branches:
      - main
    paths:
      - "site/**"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Stage website
        run: cp -r site _site

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./_site"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

If the workflow already exists, verify it deploys `site/` (not just `index.html`) and update if needed.

---

## Step 9 — Tell the user what to do next

After creating all files, send this message:

> **Website created.** Open `site/index.html` in a browser to preview.
>
> **Generated files:**
>
> - `site/css/style.css` — shared stylesheet
> - `site/js/main.js` — shared interactivity
> - `site/index.html` — Home page
> - `site/{page}.html` — {list each additional page}
>
> **Image placeholders** are marked with `[ brackets ]` — replace them with real photos or remove the placeholder elements.
>
> **To deploy to GitHub Pages:**
>
> 1. _(One-time)_ Go to your repo → **Settings → Pages → Source** → select **GitHub Actions**
> 2. Push the `site/` folder to `main`
> 3. The workflow will deploy automatically
> 4. Your site will be live at `https://{username}.github.io/{repo}/`
>
> **All internal links are relative** — navigation works both locally and on GitHub Pages.

---

## Tips

- **Design fidelity over creativity** — use the extracted design system faithfully. The CSS values were parsed from real source files for a reason
- **Component assembly** — think of design system components as Lego bricks. Fill them with the right content, don't reshape the bricks
- **Consistency is king** — nav, footer, button styles, heading sizes, and spacing should be pixel-identical across all pages
- **Copy matters** — write benefit-focused, specific headlines. Avoid generic phrases like "We help businesses grow"
- **Inner pages aren't afterthoughts** — every page should feel intentionally designed, not a stripped-down version of the homepage
- **Test navigation** — click through every nav link and CTA on every page before calling it done
- **Scroll reveal timing** — stagger reveal animations by 80–100ms for sibling elements to create a cascade effect
