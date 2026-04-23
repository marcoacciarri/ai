---
name: build-landing-page
description: Build a complete landing page for the current project from scratch. Interviews the user, generates a self-contained index.html using the bundled design system, and adds a GitHub Pages deploy workflow. Use when user wants to build a landing page, create a project website, or deploy a sales page.
---

# Skill: Build Landing Page

## Overview

Generate a polished, self-contained `index.html` landing page for the current project and wire up automatic deployment via GitHub Pages.

The page is built from scratch for this project using a bundled design system — no external dependencies, no frameworks, pure HTML + CSS.

---

## Step 1 — Load the design system

Read the design system reference before writing any code.

First, check if a custom design system exists at:

```
.github/skills/extract-design-system/DESIGN-SYSTEM.md
```

If that file exists, use it. Otherwise, fall back to the default:

```
.github/skills/build-landing-page/DESIGN-SYSTEM.md
```

This contains the full CSS and all available HTML components. Embed the CSS verbatim in the `<style>` block.

---

## Step 2 — Interview the user

Collect the following before writing any HTML. Ask in one message.

| Field                                          | Required    | Notes                                                                              |
| ---------------------------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| **Project name**                               | Yes         | Short name used in nav, title, footer                                              |
| **One-liner**                                  | Yes         | Tagline — one punchy sentence                                                      |
| **Value proposition**                          | Yes         | 2–3 sentences for the hero paragraph                                               |
| **Key features**                               | Yes         | 3–6 features for the feature card grid                                             |
| **Key stats/numbers**                          | Recommended | 2–4 numbers for the hero stats bar (e.g. "< 5s", "Zero config", "MIT")             |
| **Install command(s)**                         | Yes         | e.g. `npm install -g myapp`, `npx degit ...`                                       |
| **GitHub repo URL**                            | Yes         | Used in CTAs and footer                                                            |
| **Is there a workflow or multi-step process?** | Optional    | If yes, use the Steps component                                                    |
| **Are there commands, flags, or an API?**      | Optional    | If yes, use the Item Grid component                                                |
| **Theme / accent color**                       | Recommended | Pick from the Themes section in the design system; do not always default to Indigo |
| **Secondary CTA**                              | Optional    | Docs site, demo, etc.                                                              |
| **License**                                    | Optional    | Default: MIT                                                                       |

---

## Step 3 — Choose sections

Based on the answers, pick the sections that fit. Not every project needs every section.

| Section              | When to include                                           |
| -------------------- | --------------------------------------------------------- |
| Nav                  | Always                                                    |
| Hero (with stats)    | Always                                                    |
| Feature Cards        | Always — core value propositions                          |
| Item Grid            | Commands, CLI flags, APIs, slash commands, config options |
| Steps / How it works | Multi-step workflows, install processes, lifecycle flows  |
| Code / Install block | Always — single install command or two alternatives       |
| CTA Banner           | Always — repeat the primary action before footer          |
| Footer               | Always                                                    |

Fewer sections is better. Aim for 5–6 total. Do not add filler.

---

## Step 4 — Write the HTML

Produce a complete `index.html` from scratch. Rules:

- **All CSS inline** in `<style>` — use the CSS from `DESIGN-SYSTEM.md`
- **No external CSS or JS** — fully self-contained, works without a build step
- **Apply the chosen theme** — replace the accent color variables in `:root` with the values from the selected theme preset in `DESIGN-SYSTEM.md`. Do not default to Indigo for every project. If the user didn't pick a theme, choose one that fits the project's personality
- **Write fresh copy** — do not copy text from other pages; write punchy, specific copy for this project
- **Hero `<h1>`** — short, bold, one key word or phrase wrapped in `<span>` for the gradient treatment
- **Hero badge** — 2–4 short highlights separated by `·`
- **Hero stats** — real numbers from the project; avoid vague stats
- **Feature cards** — 3–6 cards; icon + bold title + 1–2 sentence description; each card a distinct benefit
- **Install section** — prefer a `featured` card for the primary install method; add a second card if there's an alternative
- **GitHub links** — use the actual repo URL provided; set `target="_blank" rel="noopener"` on all external links
- **Alt text / aria** — add `aria-hidden="true"` on decorative emoji icons

Output the full `index.html` as a single file.

---

## Step 5 — Add the deploy workflow

Create `.github/workflows/deploy-pages.yml` with this exact content:

```yaml
name: Deploy Landing Page

on:
  push:
    branches:
      - main
    paths:
      - "index.html"
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

      - name: Stage landing page
        run: |
          mkdir -p _site
          cp index.html _site/index.html

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./_site"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

If the file already exists, skip this step.

---

## Step 6 — Tell the user what to do next

After creating the files, send this message:

> **One-time setup required:**
>
> Go to your repo → **Settings → Pages → Source** → select **GitHub Actions**.
>
> Then push `index.html` to `main`. The workflow will deploy it automatically.
>
> Your page will be live at `https://{username}.github.io/{repo}`.
>
> **Optional — custom domain on Cloudflare:**
>
> ```bash
> npm install -g wrangler
> wrangler login
> wrangler pages deploy . --project-name={your-project}
> ```
>
> Then go to **Cloudflare Dashboard → Workers & Pages → your project → Custom domains** to attach your domain.
