# Landing Page Design System

This is the complete CSS and HTML component library for generating a project landing page. Use this when building `index.html` from scratch for any project.

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
  --bg: #0a0e1a;
  --bg2: #0f1424;
  --bg3: #141929;
  --border: #1e2640;
  --accent: #6366f1;
  --accent2: #818cf8;
  --accent-rgb: 99, 102, 241;
  --accent2-rgb: 129, 140, 248;
  --accent-glow: rgba(var(--accent-rgb), 0.3);
  --gradient: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #6366f1 100%);
  --green: #22c55e;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --card-bg: #111627;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* ── Nav ── */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 14, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
}

.nav-brand .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-primary {
  background: var(--accent);
  color: #fff;
  border: none;
  box-shadow: 0 0 20px var(--accent-glow);
}
.btn-primary:hover {
  background: var(--accent2);
  box-shadow: 0 0 28px var(--accent-glow);
  transform: translateY(-1px);
}
.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent2);
  transform: translateY(-1px);
}

/* ── Hero ── */
.hero {
  position: relative;
  overflow: hidden;
  padding: 7rem 2rem 5rem;
  text-align: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 80% 50% at 50% -10%,
      rgba(var(--accent-rgb), 0.18) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 40% 40% at 80% 60%,
      rgba(var(--accent2-rgb), 0.08) 0%,
      transparent 60%
    );
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  border-radius: 99px;
  background: rgba(var(--accent-rgb), 0.12);
  border: 1px solid rgba(var(--accent-rgb), 0.3);
  color: var(--accent2);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.75rem;
}

.hero h1 {
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  max-width: 800px;
  margin: 0 auto 1.25rem;
}

.hero h1 span {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.15rem;
  color: var(--muted);
  max-width: 580px;
  margin: 0 auto 2.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border);
}

.stat {
  text-align: center;
}
.stat-num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent2);
}
.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: 0.25rem;
}

/* ── Sections ── */
section {
  padding: 5rem 2rem;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent2);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.section-sub {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 560px;
  margin-bottom: 3rem;
}

/* ── Feature Grid ── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
  transition:
    border-color 0.2s,
    transform 0.2s;
}

.feature-card:hover {
  border-color: rgba(var(--accent-rgb), 0.5);
  transform: translateY(-3px);
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(var(--accent-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ── Generic Item Grid (commands, APIs, etc.) ── */
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
}

.item-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 1.1rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s;
}

.item-card:hover {
  border-color: rgba(var(--accent-rgb), 0.4);
}

.item-card code {
  font-size: 0.8rem;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  color: var(--accent2);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 5px;
  white-space: nowrap;
}

.item-card span {
  font-size: 0.85rem;
  color: var(--muted);
}

.items-category {
  grid-column: 1 / -1;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent2);
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
}
.items-category:first-child {
  margin-top: 0;
}

/* ── Steps / Phases list ── */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.steps-list::before {
  content: "";
  position: absolute;
  left: 22px;
  top: 44px;
  bottom: 44px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}

.step-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
}

.step-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--accent2);
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-item.active .step-num {
  border-color: var(--accent);
  box-shadow: 0 0 16px var(--accent-glow);
}

.step-content {
  padding-top: 0.5rem;
}

.step-title {
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.step-badge {
  font-size: 0.7rem;
  padding: 0.1rem 0.5rem;
  border-radius: 99px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--muted);
}

.step-desc {
  font-size: 0.9rem;
  color: var(--muted);
}

/* ── Install / Code Block ── */
.install-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.install-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
}

.install-card.featured {
  border-color: rgba(var(--accent-rgb), 0.4);
  box-shadow: 0 0 30px rgba(var(--accent-rgb), 0.08);
}

.install-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-recommended {
  font-size: 0.7rem;
  padding: 0.15rem 0.55rem;
  border-radius: 99px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: var(--green);
  font-weight: 600;
}

.install-card p {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.code-block {
  background: #07090f;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.code-block pre {
  padding: 1rem 1.25rem;
  font-size: 0.82rem;
  font-family: "JetBrains Mono", "Fira Code", "Cascadia Code", monospace;
  color: #cbd5e1;
  overflow-x: auto;
  white-space: pre;
}

.code-block pre .comment {
  color: #475569;
}
.code-block pre .cmd {
  color: var(--accent2);
}
.code-block pre .flag {
  color: #6ee7b7;
}

/* ── CTA Banner ── */
.cta-banner {
  background: linear-gradient(
    135deg,
    rgba(var(--accent-rgb), 0.15) 0%,
    rgba(var(--accent2-rgb), 0.08) 100%
  );
  border-top: 1px solid rgba(var(--accent-rgb), 0.2);
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
  text-align: center;
  padding: 5rem 2rem;
}

.cta-banner h2 {
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.cta-banner p {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 480px;
  margin: 0 auto 2rem;
}

/* ── Footer ── */
footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 2.5rem 2rem;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-brand {
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  color: var(--muted);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: var(--text);
}

.footer-note {
  font-size: 0.8rem;
  color: var(--muted);
}

.link-accent {
  color: var(--accent2);
  text-decoration: none;
}
.link-accent:hover {
  text-decoration: underline;
}

/* ── Responsive ── */
@media (max-width: 640px) {
  nav {
    padding: 0 1.25rem;
  }
  .nav-links {
    display: none;
  }
  section {
    padding: 3.5rem 1.25rem;
  }
  .hero {
    padding: 5rem 1.25rem 3.5rem;
  }
  .hero-stats {
    gap: 1.5rem;
  }
}
```

---

## Themes

The CSS uses custom properties for all accent colors. To theme a page, replace the color variables in `:root`. Pick one theme per project — do not default to Indigo every time.

Each preset defines: `--accent`, `--accent2`, `--accent-rgb`, `--accent2-rgb`, `--accent-glow`, and `--gradient`. All other CSS rules derive from these automatically.

### Indigo (default)

```css
--accent: #6366f1;
--accent2: #818cf8;
--accent-rgb: 99, 102, 241;
--accent2-rgb: 129, 140, 248;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #6366f1 100%);
```

### Emerald

```css
--accent: #10b981;
--accent2: #34d399;
--accent-rgb: 16, 185, 129;
--accent2-rgb: 52, 211, 153;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #34d399 0%, #6ee7b7 50%, #10b981 100%);
```

### Rose

```css
--accent: #f43f5e;
--accent2: #fb7185;
--accent-rgb: 244, 63, 94;
--accent2-rgb: 251, 113, 133;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #fb7185 0%, #fda4af 50%, #f43f5e 100%);
```

### Amber

```css
--accent: #f59e0b;
--accent2: #fbbf24;
--accent-rgb: 245, 158, 11;
--accent2-rgb: 251, 191, 36;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #fbbf24 0%, #fcd34d 50%, #f59e0b 100%);
```

### Cyan

```css
--accent: #06b6d4;
--accent2: #22d3ee;
--accent-rgb: 6, 182, 212;
--accent2-rgb: 34, 211, 238;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #22d3ee 0%, #67e8f9 50%, #06b6d4 100%);
```

### Violet

```css
--accent: #8b5cf6;
--accent2: #a78bfa;
--accent-rgb: 139, 92, 246;
--accent2-rgb: 167, 139, 250;
--accent-glow: rgba(var(--accent-rgb), 0.3);
--gradient: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #8b5cf6 100%);
```

---

## Available Components

### Nav

```html
<nav>
  <a class="nav-brand" href="#">
    <span class="dot"></span>
    Project Name
  </a>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#how-it-works">How it works</a>
    <a href="#install">Install</a>
  </div>
  <a class="btn btn-primary" href="#install">Get Started →</a>
</nav>
```

### Hero

```html
<header class="hero">
  <div class="container">
    <div class="hero-badge">✦ Highlight · Highlight · Highlight</div>
    <h1>Your <span>Headline</span><br />Goes Here</h1>
    <p>Subheadline / value proposition goes here.</p>
    <div class="hero-cta">
      <a class="btn btn-primary" href="#install">Primary CTA →</a>
      <a
        class="btn btn-outline"
        href="https://github.com/..."
        target="_blank"
        rel="noopener"
        >View on GitHub</a
      >
    </div>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-num">42</div>
        <div class="stat-label">Label</div>
      </div>
      <div class="stat">
        <div class="stat-num">∞</div>
        <div class="stat-label">Label</div>
      </div>
      <!-- repeat as needed -->
    </div>
  </div>
</header>
```

### Feature Cards (grid of 3–6)

```html
<section id="features">
  <div class="container">
    <div class="section-label">What's included</div>
    <h2 class="section-title">Section title</h2>
    <p class="section-sub">Section subtitle.</p>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon" aria-hidden="true">🔥</div>
        <h3>Feature Title</h3>
        <p>Feature description.</p>
      </div>
      <!-- repeat -->
    </div>
  </div>
</section>
```

### Item Grid (commands, APIs, CLI flags, etc.) — alternate bg

```html
<section id="commands" style="background:var(--bg2)">
  <div class="container">
    <div class="section-label">Label</div>
    <h2 class="section-title">Section title</h2>
    <div class="items-grid">
      <div class="items-category">Category Name</div>
      <div class="item-card"><code>command</code><span>Description</span></div>
      <!-- repeat -->
    </div>
  </div>
</section>
```

### Steps / How it works (two-column: text left, steps right)

```html
<section id="how-it-works">
  <div class="container">
    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start"
    >
      <div>
        <div class="section-label">How it works</div>
        <h2 class="section-title">Title</h2>
        <p class="section-sub" style="margin-bottom:0">Description.</p>
      </div>
      <div class="steps-list">
        <div class="step-item active">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">
              Step Title <span class="step-badge">optional badge</span>
            </div>
            <div class="step-desc">Description.</div>
          </div>
        </div>
        <!-- repeat for steps 2, 3... (without .active) -->
      </div>
    </div>
  </div>
</section>
```

### Code / Install Block

```html
<section id="install" style="background:var(--bg2)">
  <div class="container">
    <div class="section-label">Installation</div>
    <h2 class="section-title">Up and running fast</h2>
    <div class="install-options">
      <div class="install-card featured">
        <h3>Primary Method <span class="tag-recommended">Recommended</span></h3>
        <p>Short description.</p>
        <div class="code-block">
          <pre><span class="cmd">npm install</span> your-package</pre>
        </div>
      </div>
      <div class="install-card">
        <h3>Alternative Method</h3>
        <p>Short description.</p>
        <div class="code-block">
          <pre><span class="cmd">brew install</span> your-package</pre>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CTA Banner

```html
<section class="cta-banner">
  <div class="container">
    <h2>Call to action headline</h2>
    <p>Supporting sentence.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-primary" href="#install">Primary CTA →</a>
      <a class="btn btn-outline" href="..." target="_blank" rel="noopener"
        >Secondary CTA</a
      >
    </div>
  </div>
</section>
```

### Footer

```html
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <span style="color:var(--accent)">●</span> Project Name
    </div>
    <div class="footer-links">
      <a href="https://github.com/..." target="_blank" rel="noopener">GitHub</a>
      <a href="/docs">Docs</a>
    </div>
    <div class="footer-note">MIT License</div>
  </div>
</footer>
```
