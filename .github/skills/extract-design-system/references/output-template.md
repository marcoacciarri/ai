# Output Template

Use this structure when generating the DESIGN-SYSTEM.md file. Adapt sections based on what was actually found on the target site — skip sections that don't apply.

---

````markdown
# [Site Name] Design System

Extracted from: [URL(s)]
Date: [extraction date]

---

## Design Tokens

### Colors

| Token             | Value   | Usage                    |
| ----------------- | ------- | ------------------------ |
| `--primary`       | #XXXXXX | Main brand / accent      |
| `--primary-light` | #XXXXXX | Hover states, highlights |
| `--primary-rgb`   | R, G, B | For rgba() usage         |
| `--bg`            | #XXXXXX | Page background          |
| `--bg-alt`        | #XXXXXX | Card/section backgrounds |
| `--text`          | #XXXXXX | Primary body text        |
| `--text-muted`    | #XXXXXX | Secondary/subdued text   |
| `--border`        | #XXXXXX | Borders and dividers     |
| `--success`       | #XXXXXX | Success states           |
| `--error`         | #XXXXXX | Error states             |

### Typography

| Token              | Value                             |
| ------------------ | --------------------------------- |
| `--font-body`      | 'Font Name', fallback, sans-serif |
| `--font-heading`   | 'Font Name', fallback, sans-serif |
| `--font-mono`      | 'Font Name', monospace            |
| `--text-xs`        | 0.75rem                           |
| `--text-sm`        | 0.875rem                          |
| `--text-base`      | 1rem                              |
| `--text-lg`        | 1.125rem                          |
| `--text-xl`        | 1.25rem                           |
| `--text-2xl`       | 1.5rem                            |
| `--text-3xl`       | clamp(…)                          |
| `--text-4xl`       | clamp(…)                          |
| `--leading-tight`  | 1.15                              |
| `--leading-normal` | 1.6                               |

### Spacing

| Token         | Value   | Usage             |
| ------------- | ------- | ----------------- |
| `--space-xs`  | 0.25rem | Tight gaps        |
| `--space-sm`  | 0.5rem  | Inner padding     |
| `--space-md`  | 1rem    | Component gaps    |
| `--space-lg`  | 2rem    | Section gaps      |
| `--space-xl`  | 4rem    | Section padding   |
| `--container` | 1100px  | Max content width |

### Shape & Effects

| Token           | Value              |
| --------------- | ------------------ |
| `--radius-sm`   | 6px                |
| `--radius-md`   | 10px               |
| `--radius-lg`   | 14px               |
| `--radius-full` | 99px               |
| `--shadow-sm`   | 0 1px 2px rgba(…)  |
| `--shadow-md`   | 0 4px 12px rgba(…) |
| `--shadow-lg`   | 0 8px 30px rgba(…) |
| `--transition`  | all 0.2s ease      |

### Breakpoints

| Name    | Value  | Notes                           |
| ------- | ------ | ------------------------------- |
| Mobile  | 640px  | Single column, hidden nav links |
| Tablet  | 768px  | Two-column grids                |
| Desktop | 1024px | Full layout                     |

---

## Full CSS

Embed this verbatim inside `<style>` in the `<head>`:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* ── Colors ── */
  --primary: #XXXXXX;
  --primary-light: #XXXXXX;
  --primary-rgb: R, G, B;
  /* … all tokens … */

  /* ── Typography ── */
  --font-body: "Font", sans-serif;
  /* … */

  /* ── Spacing ── */
  --container: 1100px;
  /* … */

  /* ── Shape ── */
  --radius-md: 10px;
  /* … */
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: var(--leading-normal);
}

/* ── Nav ── */
/* … component styles … */

/* ── Hero ── */
/* … component styles … */

/* ── Buttons ── */
/* … component styles … */

/* ── Cards ── */
/* … component styles … */

/* ── Grid ── */
/* … component styles … */

/* ── Footer ── */
/* … component styles … */

/* ── Responsive ── */
@media (max-width: 640px) {
  /* … mobile overrides … */
}
```

---

## Themes

_(Include only if multiple color schemes were detected)_

### Light Theme (default)

```css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  /* … */
}
```

### Dark Theme

```css
:root {
  --bg: #0a0a0a;
  --text: #e2e8f0;
  /* … */
}
```

---

## Available Components

### Nav

```html
<nav>
  <!-- Extracted nav structure -->
</nav>
```

### Hero

```html
<header class="hero">
  <!-- Extracted hero structure -->
</header>
```

### Button

```html
<a class="btn btn-primary" href="#">Primary Action</a>
<a class="btn btn-outline" href="#">Secondary Action</a>
```

### Feature Card

```html
<div class="feature-card">
  <!-- Extracted card structure -->
</div>
```

### Grid Layout

```html
<div class="grid">
  <!-- Extracted grid structure -->
</div>
```

_(Continue for each component found on the site…)_
````
