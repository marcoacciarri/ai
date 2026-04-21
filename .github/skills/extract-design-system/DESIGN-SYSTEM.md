# Marketing Agency 02 Design System

Extracted from: https://websitedemos.net/marketing-agency-02/
Date: 2025-07-22

---

## Design Tokens

### Colors

| Token                 | Value                     | Usage                                                           |
| --------------------- | ------------------------- | --------------------------------------------------------------- |
| `--primary`           | #c3317d                   | Main accent — magenta/hot pink (buttons, links, section labels) |
| `--primary-rgb`       | 195, 49, 125              | For rgba() usage                                                |
| `--bg`                | #18202c                   | Primary page background — deep dark navy                        |
| `--bg-alt`            | #1c2735                   | Card/section backgrounds — slightly lighter dark blue-gray      |
| `--bg-gradient-start` | rgba(30, 42, 57, 0.48)    | Translucent dark blue for gradient overlays                     |
| `--text`              | #ffffff                   | Primary body text (white — this is a dark theme)                |
| `--text-muted`        | #bfd1ff                   | Subdued text — pale blue accent                                 |
| `--border`            | #2F3742                   | Borders, dividers, separators                                   |
| `--border-subtle`     | rgba(255, 255, 255, 0.07) | Very subtle white borders (7% opacity)                          |
| `--bg-surface`        | #F2F5F7                   | Light gray (rarely used, available for alt backgrounds)         |
| `--white`             | #ffffff                   | Pure white                                                      |
| `--black`             | #000000                   | Pure black (button hover text)                                  |
| `--overlay`           | rgba(28, 39, 53, 0.5)     | Gallery overlay at rest                                         |
| `--overlay-hover`     | rgba(28, 39, 53, 0.85)    | Gallery overlay on hover                                        |
| `--nav-mobile-text`   | #131b26                   | Mobile menu text                                                |

### Typography

| Token               | Value                               |
| ------------------- | ----------------------------------- |
| `--font-body`       | 'Roboto', sans-serif                |
| `--font-heading`    | 'Noto Sans', sans-serif             |
| `--fw-body`         | 400                                 |
| `--fw-button`       | 500                                 |
| `--fw-heading`      | 700                                 |
| `--text-xs`         | 0.87rem / 13px (H6)                 |
| `--text-sm`         | 1rem / 15px (body, buttons)         |
| `--text-md`         | 1.13rem / 17px (H5)                 |
| `--text-lg`         | 1.33rem / 20px (medium scale)       |
| `--text-xl`         | 1.67rem / 25px (H4)                 |
| `--text-2xl`        | 2.13rem / 32px (H3)                 |
| `--text-3xl`        | 2.4rem / 36px (large scale)         |
| `--text-4xl`        | 2.8rem / 42px (x-large scale)       |
| `--text-5xl`        | 6rem / 90px (H2 — display)          |
| `--text-6xl`        | 7.33rem / 110px (H1 — hero display) |
| `--leading-tight`   | 1.2em (headings, buttons)           |
| `--leading-snug`    | 1.25em (H6)                         |
| `--leading-normal`  | 1.3em (H2, H3)                      |
| `--leading-relaxed` | 1.65em (body text)                  |
| `--tracking-wide`   | 0.05em                              |

### Spacing

| Token          | Value  | Usage                               |
| -------------- | ------ | ----------------------------------- |
| `--space-xs`   | 0px    | Tight gaps (0-gap grid columns)     |
| `--space-sm`   | 20px   | Card inner gaps, small padding      |
| `--space-md`   | 25px   | Divider padding, inner gaps         |
| `--space-lg`   | 50px   | Section inner padding, card padding |
| `--space-xl`   | 70px   | Section bottom margins              |
| `--space-2xl`  | 140px  | Major section bottom margins        |
| `--space-3xl`  | 150px  | Hero bottom padding                 |
| `--space-4xl`  | 200px  | Hero inner section padding          |
| `--space-5xl`  | 230px  | Hero top padding                    |
| `--container`  | 1140px | Max content width                   |
| `--gap`        | 24px   | Default grid gap                    |
| `--nav-height` | 70px   | Header bar height                   |

### Shape & Effects

| Token                     | Value                                                        |
| ------------------------- | ------------------------------------------------------------ |
| `--radius`                | 0px — all elements, fully squared/angular design             |
| `--radius-sm`             | 3px — rare, minor elements only                              |
| `--divider-width`         | 5px                                                          |
| `--divider-length`        | 50px                                                         |
| `--divider-hero-width`    | 13px                                                         |
| `--divider-hero-length`   | 100px                                                        |
| `--shadow`                | none — no box shadows, flat design                           |
| `--transition`            | all 0.2s linear                                              |
| `--overlay-rest`          | 0.5                                                          |
| `--overlay-hover-opacity` | 0.85                                                         |
| `--gradient-card`         | linear-gradient(190deg, rgba(30,42,57,0.48) 0%, #1c2735 40%) |
| `--gradient-card-hover`   | linear-gradient(180deg, #c3317d 0%, #c3317d 100%)            |

### Breakpoints

| Name         | Value   | Notes                                                 |
| ------------ | ------- | ----------------------------------------------------- |
| Mobile       | 767px   | Single column, reduced padding (20px), stacked layout |
| Tablet       | 1024px  | Adjusted grid widths, 25px page padding               |
| Header break | 921px   | Mobile menu trigger, hamburger nav                    |
| Desktop      | 1025px+ | Full layout, parallax backgrounds                     |
| Small mobile | 544px   | Minor footer adjustments                              |

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
  /* -- Colors -- */
  --primary: #c3317d;
  --primary-rgb: 195, 49, 125;
  --bg: #18202c;
  --bg-alt: #1c2735;
  --bg-gradient-start: rgba(30, 42, 57, 0.48);
  --text: #ffffff;
  --text-muted: #bfd1ff;
  --border: #2f3742;
  --border-subtle: rgba(255, 255, 255, 0.07);
  --bg-surface: #f2f5f7;
  --white: #ffffff;
  --black: #000000;
  --overlay: rgba(28, 39, 53, 0.5);
  --overlay-hover: rgba(28, 39, 53, 0.85);
  --nav-mobile-text: #131b26;

  /* -- Typography -- */
  --font-body: "Roboto", system-ui, -apple-system, sans-serif;
  --font-heading: "Noto Sans", system-ui, sans-serif;
  --text-xs: 0.87rem;
  --text-sm: 1rem;
  --text-md: 1.13rem;
  --text-lg: 1.33rem;
  --text-xl: 1.67rem;
  --text-2xl: 2.13rem;
  --text-3xl: 2.4rem;
  --text-4xl: 2.8rem;
  --text-5xl: 6rem;
  --text-6xl: 7.33rem;
  --fw-body: 400;
  --fw-button: 500;
  --fw-heading: 700;
  --leading-tight: 1.2;
  --leading-snug: 1.25;
  --leading-normal: 1.3;
  --leading-relaxed: 1.65;
  --tracking-wide: 0.05em;

  /* -- Spacing -- */
  --space-xs: 0px;
  --space-sm: 20px;
  --space-md: 25px;
  --space-lg: 50px;
  --space-xl: 70px;
  --space-2xl: 140px;
  --space-3xl: 150px;
  --container: 1140px;
  --gap: 24px;
  --nav-height: 70px;

  /* -- Shape -- */
  --radius: 0px;
  --radius-sm: 3px;
  --divider-width: 5px;
  --divider-length: 50px;
  --transition: all 0.2s linear;
  --overlay-rest: 0.5;
  --overlay-hover-opacity: 0.85;
  --gradient-card: linear-gradient(
    190deg,
    rgba(30, 42, 57, 0.48) 0%,
    var(--bg-alt) 40%
  );
  --gradient-card-hover: linear-gradient(
    180deg,
    var(--primary) 0%,
    var(--primary) 100%
  );
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@400;500;700&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--fw-body);
  line-height: var(--leading-relaxed);
  color: var(--text);
  background-color: var(--bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.2s linear;
}

a:hover {
  color: var(--primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: var(--fw-heading);
  color: var(--white);
  line-height: var(--leading-tight);
  margin: 0;
}

h1 {
  font-size: var(--text-6xl);
  line-height: var(--leading-tight);
}
h2 {
  font-size: var(--text-5xl);
  line-height: var(--leading-normal);
}
h3 {
  font-size: var(--text-2xl);
  line-height: var(--leading-normal);
}
h4 {
  font-size: var(--text-xl);
  line-height: var(--leading-tight);
}
h5 {
  font-size: var(--text-md);
  line-height: var(--leading-tight);
}
h6 {
  font-size: var(--text-xs);
  line-height: var(--leading-snug);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--primary);
}

p {
  margin: 0 0 1em;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* -- Layout -- */
.container {
  max-width: var(--container);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
}

.section {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.section-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-xl);
}

/* -- Nav -- */
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  padding: 9px var(--space-sm);
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo img {
  max-width: 150px;
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  transition: color 0.2s linear;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary);
}

.nav-toggle {
  display: none;
  color: var(--white);
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-toggle svg {
  width: 20px;
  height: 20px;
  fill: var(--white);
}

/* -- Hero -- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: var(--bg-alt);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  padding-bottom: var(--space-3xl);
  border-bottom: 1px solid var(--border);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--bg-alt);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}

.hero-sidebar {
  width: 15.8%;
  padding-top: 230px;
  padding-bottom: var(--space-3xl);
  position: relative;
  z-index: 1;
}

.hero-divider {
  width: 100px;
  height: 13px;
  background: var(--white);
}

.hero-content {
  width: 56%;
  padding-top: 200px;
  padding-bottom: 200px;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: var(--text-6xl);
  font-family: var(--font-heading);
  color: var(--white);
  line-height: var(--leading-tight);
}

.hero-aside {
  width: 27.82%;
  padding-top: 200px;
  padding-bottom: var(--space-3xl);
  padding-left: var(--space-lg);
  text-align: end;
  position: relative;
  z-index: 1;
}

.hero-aside .icon {
  font-size: 100px;
  color: var(--primary);
  text-align: end;
}

.hero-aside .signature {
  opacity: 0.3;
  text-align: end;
}

/* -- Section Nav Bar -- */
.section-nav {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-xl);
}

.section-nav-label {
  width: 15.8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-nav-label h5 {
  color: var(--primary);
  margin-top: -7px;
}

.section-nav-content {
  width: 56.2%;
  display: flex;
  align-items: center;
}

.section-nav-action {
  width: 27.664%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -29px;
  margin-bottom: -24px;
}

/* -- Buttons -- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--fw-button);
  line-height: 1em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  padding: 17px 40px;
}

.btn-primary:hover {
  background-color: var(--white);
  color: var(--black);
}

.btn-icon {
  background-color: var(--primary);
  color: var(--white);
  padding: 28px 26px;
  border-radius: var(--radius);
}

.btn-icon:hover {
  background-color: var(--white);
  color: var(--black);
}

.btn-submit {
  background-color: var(--primary);
  color: var(--white);
  padding: 15px 30px;
  border-radius: var(--radius);
  font-size: var(--text-sm);
  font-weight: var(--fw-heading);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn-submit:hover {
  background-color: var(--white);
  color: var(--black);
}

/* -- Service Cards -- */
.service-cards {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  margin-top: -235px;
  margin-bottom: var(--space-2xl);
  position: relative;
  z-index: 2;
}

.service-card {
  flex: 1;
  position: relative;
  padding: var(--space-lg) var(--space-lg) var(--space-sm);
  border-left: 1px solid var(--border);
  background: var(--gradient-card);
  transition: var(--transition);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-position: bottom left;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 0;
}

.service-card:hover {
  background: var(--gradient-card-hover);
}

.service-card-label {
  color: var(--white);
  font-size: var(--text-md);
}

.service-card-title {
  color: var(--white);
  font-size: var(--text-2xl);
}

.service-card-divider {
  width: var(--divider-length);
  height: var(--divider-width);
  background: var(--white);
  margin: var(--space-md) 0;
}

.service-card-text {
  color: var(--white);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

/* -- Content Row (How We Do It) -- */
.content-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-2xl);
}

.content-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-lg) var(--space-lg) var(--space-md);
  background-color: var(--bg-alt);
  width: 66.66%;
}

.content-block h6 {
  color: var(--white);
  padding-bottom: var(--space-sm);
}

.content-block h4 {
  color: var(--white);
  margin-bottom: 1rem;
}

.content-block p {
  color: var(--white);
  line-height: var(--leading-relaxed);
}

.content-image {
  width: 33.33%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
}

/* -- Gallery Grid -- */
.gallery-grid {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  margin-bottom: var(--space-2xl);
}

.gallery-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.gallery-col--left {
  width: 45%;
}
.gallery-col--right {
  width: 55%;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  background-color: var(--bg-alt);
}

.gallery-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: var(--overlay-rest);
  transition: opacity 0.2s linear;
  z-index: 1;
}

.gallery-item:hover::before {
  opacity: var(--overlay-hover-opacity);
}

.gallery-spacer--sm {
  min-height: 400px;
}
.gallery-spacer--lg {
  min-height: 800px;
}

/* -- About Section -- */
.about-section {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-2xl);
}

.about-offset {
  margin-left: 16%;
}

.about-inner {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
}

.about-image {
  width: 33.33%;
  padding-right: var(--space-lg);
}

.about-image img {
  width: 100%;
  height: auto;
}

.about-content {
  width: 66.649%;
  padding-top: var(--space-lg);
}

/* -- Logo Cloud -- */
.logo-cloud {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 0 80px;
}

.logo-cloud-label {
  width: 15.8%;
}
.logo-cloud-grid {
  width: 84.2%;
}

.logo-cloud-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
}

.logo-cloud-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: var(--space-sm);
  position: relative;
  transition: var(--transition);
}

.logo-cloud-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--bg-alt);
  opacity: 0.1;
  transition: opacity 0.2s linear;
}

.logo-cloud-item:hover::before {
  background-color: var(--bg);
  opacity: 0.3;
}

.logo-cloud-item img {
  max-height: 40px;
  opacity: 0.7;
  transition: opacity 0.2s linear;
}

.logo-cloud-item:hover img {
  opacity: 1;
}

/* -- Contact Form -- */
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-row {
  display: flex;
  gap: var(--space-sm);
}

.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: var(--text-sm);
  color: var(--white);
  font-weight: var(--fw-body);
}

.form-input,
.form-textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  padding: 0.75rem 0;
  outline: none;
  transition: border-color 0.2s linear;
}

.form-input:focus,
.form-textarea:focus {
  border-bottom-color: var(--primary);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

/* -- Footer -- */
.footer {
  background-color: var(--bg);
}

.footer-cta {
  padding: var(--space-2xl) var(--space-sm);
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-sm);
  align-items: flex-start;
}

.footer-cta-label {
  font-size: var(--text-xl);
  color: var(--white);
  margin-bottom: 0.5rem;
}

.footer-cta-title {
  font-size: var(--text-5xl);
  color: var(--white);
  font-family: var(--font-heading);
}

.footer-contact {
  color: var(--white);
  font-size: var(--text-sm);
  line-height: 2;
}

.footer-contact a {
  color: var(--white);
}
.footer-contact a:hover {
  color: var(--primary);
}

.footer-social {
  display: flex;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.footer-social a {
  color: var(--white);
  transition: color 0.2s linear;
}

.footer-social a:hover {
  color: var(--primary);
}

.footer-social svg {
  width: 18px;
  height: 18px;
  fill: var(--white);
  transition: fill 0.2s linear;
}

.footer-social a:hover svg {
  fill: var(--primary);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: var(--container);
  margin: 0 auto;
  align-items: center;
}

.footer-copyright {
  font-size: var(--text-sm);
  color: var(--white);
}
.footer-tagline {
  font-size: var(--text-sm);
  color: var(--white);
  text-align: right;
}

/* -- Divider -- */
.divider {
  width: var(--divider-length);
  height: var(--divider-width);
  background: var(--white);
}

.divider--hero {
  width: 100px;
  height: 13px;
}
.divider--accent {
  background: var(--primary);
}

/* -- Responsive -- */
@media (max-width: 921px) {
  .nav-links {
    display: none;
  }
  .nav-toggle {
    display: block;
  }
  .nav-logo img {
    max-width: 120px;
  }
}

@media (max-width: 1024px) {
  .hero {
    padding: 0 25px 210px;
  }
  .hero-sidebar {
    padding-top: 195px;
    padding-bottom: 0;
  }
  .hero-content {
    padding-top: 180px;
    padding-bottom: 0;
    width: 60%;
  }
  .hero-aside {
    width: 24%;
    padding-top: 260px;
    padding-left: 25px;
  }

  .service-cards {
    flex-wrap: wrap;
    margin-top: -177px;
    margin-bottom: 114px;
    padding: 0 25px;
  }
  .service-card {
    width: 33.33%;
    padding: var(--space-sm) var(--space-sm) 0;
  }

  .section-nav {
    margin: 57px 0;
    padding: 0 25px;
  }
  .section-nav-content {
    width: 75%;
  }
  .section-nav-action {
    width: 9%;
  }

  .btn-icon {
    padding: 21px;
  }

  .content-row {
    margin-bottom: 114px;
    padding: 0 25px;
  }

  .gallery-spacer--sm {
    min-height: 250px;
  }
  .gallery-spacer--lg {
    min-height: 500px;
  }

  .logo-cloud {
    padding: 0 25px;
  }
}

@media (max-width: 767px) {
  :root {
    --space-lg: 20px;
    --space-xl: 50px;
    --space-2xl: 81px;
  }

  h1 {
    font-size: clamp(3rem, 10vw, var(--text-6xl));
  }
  h2 {
    font-size: clamp(2.5rem, 8vw, var(--text-5xl));
  }

  .container {
    padding: 0 var(--space-sm);
  }

  .hero {
    flex-direction: column;
    min-height: auto;
    padding: 0 var(--space-sm);
  }
  .hero-sidebar,
  .hero-content,
  .hero-aside {
    width: 100%;
  }
  .hero-sidebar {
    padding-top: var(--space-3xl);
    padding-bottom: 30px;
  }
  .hero-content {
    padding-top: 0;
    padding-bottom: 0;
  }
  .hero-aside {
    margin-left: 160px;
    padding: var(--space-lg) 0;
  }

  .service-cards {
    flex-direction: column;
    margin-top: -100px;
    padding: 0 var(--space-sm);
  }
  .service-card {
    width: 100%;
    border-left: none;
    border-top: 1px solid var(--border);
  }

  .section-nav {
    flex-direction: column;
    margin: 81px 0;
    padding: 0 var(--space-sm);
  }
  .section-nav-label,
  .section-nav-content,
  .section-nav-action {
    width: 100%;
  }

  .section-row,
  .content-row {
    flex-direction: column;
    margin-bottom: 81px;
    padding: 0 var(--space-sm);
  }
  .content-block,
  .content-image {
    width: 100%;
  }
  .content-image {
    min-height: 230px;
  }

  .gallery-grid {
    flex-direction: column;
  }
  .gallery-col--left,
  .gallery-col--right {
    width: 100%;
  }
  .gallery-spacer--sm,
  .gallery-spacer--lg {
    min-height: 200px;
  }

  .about-offset {
    margin-left: 0;
  }
  .about-inner {
    flex-direction: column;
  }
  .about-image,
  .about-content {
    width: 100%;
  }

  .logo-cloud-row {
    flex-direction: column;
  }
  .form-row {
    flex-direction: column;
  }

  .footer-cta {
    grid-template-columns: 1fr;
    padding: var(--space-2xl) var(--space-sm);
  }
  .footer-bottom {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-tagline {
    text-align: center;
  }

  .nav-logo img {
    max-width: 100px;
  }
}

@media (min-width: 1025px) {
  .hero {
    background-attachment: fixed;
  }
}
```

---

## Available Components

### Nav

```html
<nav class="nav">
  <a href="/" class="nav-logo">
    <img src="logo.svg" alt="Brand" />
  </a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="nav-toggle" aria-label="Toggle menu">
    <svg viewBox="0 0 20 20">
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
</nav>
```

### Hero

```html
<section class="hero" style="background-image: url('hero-bg.jpg');">
  <div class="hero-sidebar">
    <div class="hero-divider"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">Creative &amp;<br />Innovative<br />Ideas</h1>
  </div>
  <div class="hero-aside">
    <div class="icon">&#8594;</div>
    <h4>Author Name</h4>
    <h5>Title / Role</h5>
    <img class="signature" src="signature.png" alt="Signature" />
  </div>
</section>
```

### Section Nav Bar

```html
<div class="section-nav">
  <div class="section-nav-label">
    <h5>01</h5>
  </div>
  <div class="section-nav-content">
    <h2>Services</h2>
  </div>
  <div class="section-nav-action">
    <a href="#" class="btn btn-icon">&#8594;</a>
  </div>
</div>
```

### Service Card

```html
<div class="service-cards">
  <div class="service-card">
    <h5 class="service-card-label">Demand Generation</h5>
    <h3 class="service-card-title">Card Title</h3>
    <div class="service-card-divider"></div>
    <p class="service-card-text">Brief description of this service offering.</p>
  </div>
  <div class="service-card">
    <h5 class="service-card-label">Brand Acceleration</h5>
    <h3 class="service-card-title">Card Title</h3>
    <div class="service-card-divider"></div>
    <p class="service-card-text">Brief description of this service offering.</p>
  </div>
  <div class="service-card">
    <h5 class="service-card-label">Technology Performance</h5>
    <h3 class="service-card-title">Card Title</h3>
    <div class="service-card-divider"></div>
    <p class="service-card-text">Brief description of this service offering.</p>
  </div>
</div>
```

### Content Row (How We Do It)

```html
<!-- Image right -->
<div class="content-row">
  <div class="content-block">
    <h6>Gain Digital Advantage</h6>
    <h4>Innovative strategies</h4>
    <p>Description text about this feature or approach.</p>
  </div>
  <div
    class="content-image"
    style="background-image: url('feature.jpg');"
  ></div>
</div>

<!-- Image left (reversed) -->
<div class="content-row" style="flex-direction: row-reverse;">
  <div class="content-block">
    <h6>Results-Oriented Solutions</h6>
    <h4>Strategic insights</h4>
    <p>Description text about this feature or approach.</p>
  </div>
  <div
    class="content-image"
    style="background-image: url('feature.jpg');"
  ></div>
</div>
```

### Gallery Grid (Portfolio)

```html
<div class="gallery-grid">
  <div class="gallery-col gallery-col--left">
    <div
      class="gallery-item gallery-spacer--sm"
      style="background-image: url('gallery-01.jpg');"
    ></div>
    <div
      class="gallery-item gallery-spacer--sm"
      style="background-image: url('gallery-04.jpg');"
    ></div>
  </div>
  <div class="gallery-col gallery-col--right">
    <div
      class="gallery-item gallery-spacer--lg"
      style="background-image: url('gallery-02.jpg');"
    ></div>
    <div
      class="gallery-item gallery-spacer--lg"
      style="background-image: url('gallery-03.jpg');"
    ></div>
  </div>
</div>
```

### About Section

```html
<div class="about-section">
  <div class="about-offset">
    <div class="about-inner">
      <div class="about-image">
        <img src="about.jpg" alt="About us" />
      </div>
      <div class="about-content">
        <h3>We are the decisive factor behind your success</h3>
        <p>Description of the company and its mission.</p>
      </div>
    </div>
  </div>
</div>
```

### Logo Cloud

```html
<div class="logo-cloud">
  <div class="logo-cloud-label">
    <h5>05</h5>
  </div>
  <div class="logo-cloud-grid">
    <div class="logo-cloud-row">
      <div class="logo-cloud-item">
        <img src="client-1.svg" alt="Client 1" />
      </div>
      <div class="logo-cloud-item">
        <img src="client-2.svg" alt="Client 2" />
      </div>
      <div class="logo-cloud-item">
        <img src="client-3.svg" alt="Client 3" />
      </div>
    </div>
    <div class="logo-cloud-row">
      <div class="logo-cloud-item">
        <img src="client-4.svg" alt="Client 4" />
      </div>
      <div class="logo-cloud-item">
        <img src="client-5.svg" alt="Client 5" />
      </div>
      <div class="logo-cloud-item">
        <img src="client-6.svg" alt="Client 6" />
      </div>
    </div>
  </div>
</div>
```

### Button

```html
<a href="#" class="btn btn-primary">GET STARTED</a>
<a href="#" class="btn btn-icon">&#8594;</a>
<button class="btn-submit">SUBMIT</button>
```

### Divider

```html
<div class="divider"></div>
<div class="divider divider--hero"></div>
<div class="divider divider--accent"></div>
```

### Contact Form

```html
<div class="form">
  <div class="form-row">
    <div class="form-field">
      <label class="form-label">First Name</label>
      <input type="text" class="form-input" required />
    </div>
    <div class="form-field">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-input" required />
    </div>
  </div>
  <div class="form-field">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" required />
  </div>
  <div class="form-field">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" rows="5"></textarea>
  </div>
  <button type="submit" class="btn-submit">SUBMIT</button>
</div>
```

### Footer

```html
<footer class="footer">
  <div class="footer-cta">
    <div>
      <p class="footer-cta-label">Contact Us</p>
      <h2 class="footer-cta-title">Let's talk</h2>
    </div>
    <div>
      <div class="footer-social">
        <a href="#" aria-label="Facebook"
          ><svg viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
            /></svg
        ></a>
        <a href="#" aria-label="Twitter"
          ><svg viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
            /></svg
        ></a>
      </div>
      <div class="footer-contact">
        <p>t: 929-242-6868</p>
        <p>e: contact@info.com</p>
        <p>a: 13 Fifth Avenue, NY 10160</p>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copyright">Copyright &copy; 2025 Brand Name</p>
    <p class="footer-tagline">Powered by Brand Name</p>
  </div>
</footer>
```

---

## Key Design Characteristics

1. **Dark theme throughout** — deep navy backgrounds (#18202c, #1c2735), white text, no light mode
2. **Angular / squared design** — 0px border-radius on everything (buttons, cards, images, inputs)
3. **Very large display headings** — H1 at 110px/7.33rem, H2 at 90px/6rem, oversized type as primary design feature
4. **Numbered sections** — "01", "02", "03" labels in magenta (#c3317d) accent color
5. **Horizontal rule separators** — thin 1px borders in #2F3742 between every section
6. **Fixed proportional columns** — 15.8% / 56% / 28% three-column grid for section header bars
7. **Service cards with gradient + hover** — gradient from translucent dark to solid dark, hover fills entirely with magenta
8. **Gallery with overlay hover** — background images under 50% dark overlay, overlay increases to 85% on hover
9. **White divider accents** — 5px thick, 50px wide white lines as decorative elements inside cards (13px x 100px in hero)
10. **Uppercase buttons** — generous padding (17px 40px), font-weight 500, square edges, white bg/black text on hover
11. **Flat design** — no box shadows anywhere, no rounded corners, no gradients except on service cards
12. **Parallax hero** — background-attachment: fixed on desktop, scrolls naturally on mobile
13. **Noto Sans headings + Roboto body** — clean sans-serif pairing, 700 weight headings, 400 weight body
