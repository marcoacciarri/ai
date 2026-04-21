# Agent Instructions: Create a Landing Page

When a user asks to **create a landing page**, **build a project website**, or **deploy a sales page**, use the `build-landing-page` skill:

```
Read: .github/skills/build-landing-page/SKILL.md
```

The full instructions are in that skill file. Summary:

1. Interview the user (project name, one-liner, features, stats, GitHub URL, install command)
2. Read the design system (`DESIGN-SYSTEM.md` in the same skill folder) for the CSS and component library
3. Build `index.html` from scratch — self-contained, no external dependencies
4. Create `.github/workflows/deploy-pages.yml` for automatic GitHub Pages deployment
5. Tell the user to enable GitHub Pages in their repo settings (Settings → Pages → GitHub Actions)
