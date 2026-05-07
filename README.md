# AI Development Toolkit

A portable collection of VS Code Copilot prompts, agent skills, and GitHub Actions workflows that implement the [7 Phases of AI Development](https://www.aihero.dev/my-7-phases-of-ai-development) framework.

Drop these into any repo to get a structured AI-assisted development lifecycle — from idea refinement to QA.

## What's Included

### Prompts

| Prompt        | Description                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `/build`      | Orchestrates the full 7-phase lifecycle: Idea → Research → Prototype → PRD → Kanban → Execution → QA                        |
| `/prd-create` | Converts feature requirements into a structured `prd.json` with trackable items, acceptance criteria, and dependency chains |

### Skills (17 total)

**Planning & Design**

| Skill                    | Description                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `/write-a-prd`           | Create a PRD through interactive interview, codebase exploration, and module design           |
| `/prd-to-plan`           | Turn a PRD into a multi-phase implementation plan using tracer-bullet vertical slices         |
| `/prd-to-issues`         | Break a PRD into independently-grabbable GitHub issues using vertical slices                  |
| `/grill-me`              | Get relentlessly interviewed about a plan or design until the decision tree is fully resolved |
| `/design-an-interface`   | Generate multiple radically different interface designs using parallel sub-agents             |
| `/request-refactor-plan` | Create a detailed refactor plan with tiny commits via user interview                          |

**Development**

| Skill                            | Description                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| `/tdd`                           | Test-driven development with red-green-refactor loop                                    |
| `/triage-issue`                  | Investigate a bug, identify root cause, and file a GitHub issue with TDD-based fix plan |
| `/improve-codebase-architecture` | Explore codebase for architectural improvements and deeper modules                      |
| `/migrate-to-shoehorn`           | Migrate test files from `as` type assertions to @total-typescript/shoehorn              |
| `/scaffold-exercises`            | Create exercise directory structures with problems, solutions, and explainers           |

**Tooling & Setup**

| Skill                         | Description                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| `/setup-pre-commit`           | Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests |
| `/git-guardrails-claude-code` | Block dangerous git commands (push, reset --hard, clean) before execution          |

**Writing & Knowledge**

| Skill                  | Description                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `/write-a-skill`       | Create new skills with proper structure, progressive disclosure, and bundled resources |
| `/edit-article`        | Edit and improve articles by restructuring sections and tightening prose               |
| `/ubiquitous-language` | Extract a DDD-style ubiquitous language glossary from conversation                     |
| `/obsidian-vault`      | Search, create, and manage notes in an Obsidian vault with wikilinks                   |

### Mobile Workflow (`/agent` commands)

A GitHub Actions workflow that lets you manage your project from your phone via issue comments:

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `/agent help`          | Show all available commands                       |
| `/agent status`        | PRD progress summary                              |
| `/agent status P1-001` | Detailed status of a specific deliverable         |
| `/agent list`          | List all deliverables by phase                    |
| `/agent list phase:2`  | Filter to a specific phase                        |
| `/agent next`          | Show next unblocked deliverables ready for work   |
| `/agent build P1-001`  | Create an implementation issue and assign Copilot |
| `/agent build-wave 1`  | Create issues for all items in a phase            |

## Installation

### Option 1: Installer Script (recommended)

Clone this repo, then run the installer from your target project:

```bash
# From your project directory
/path/to/ai/install-agents
```

Or clone and install in one step:

```bash
git clone https://github.com/marcoacciarri/ai.git /tmp/ai
/tmp/ai/install-agents
```

#### Selective Install

```bash
./install-agents skills           # Skills only (17 skills)
./install-agents prompts          # Prompts only (/build, /prd-create)
./install-agents workflow         # Mobile workflow only (/agent commands)
./install-agents skills prompts   # Mix and match
```

#### Options

```bash
./install-agents --force          # Overwrite existing files
./install-agents --dry-run        # Preview what would be installed
./install-agents --help           # Show all options
```

#### Updating

```bash
/path/to/ai/install-agents --force
```

Commit your work first — `--force` overwrites existing files.

### Option 2: Degit (no clone needed)

```bash
npx degit marcoacciarri/ai/.github .github
```

#### Partial install with degit

```bash
npx degit marcoacciarri/ai/.github/skills .github/skills
npx degit marcoacciarri/ai/.github/prompts .github/prompts
npx degit marcoacciarri/ai/.github/workflows .github/workflows
```

## Prerequisites

- **VS Code** with GitHub Copilot Chat extension (for prompts and skills)
- **GitHub repository** (for the mobile workflow and `/agent` commands)
- Create an `ai-work` label in your repo (used by `/agent build` to tag generated issues)
- Optional: [Copilot Coding Agent](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent) enabled for automatic PR generation from `/agent build`

## The 7 Phases

The `/build` prompt walks you through:

1. **Idea** — Refine your concept via structured interview → `IDEA.md`
2. **Research** _(optional)_ — Cache external dependency docs → `RESEARCH.md`
3. **Prototype** _(skipped by default)_ — Explore design options before committing
4. **PRD** — Document the end state with acceptance criteria → `prd.json` + `progress.md`
5. **Kanban** — Break PRD into GitHub Issues with dependencies and parallel work clusters
6. **Execution** — Implement wave by wave using TDD
7. **QA** — Verify quality, create new tickets for findings, loop back to execution

## Deploying Your Website

The `pages/` folder is where your website lives. Add your HTML, CSS, JS, and images there. A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) automatically deploys the `pages/` folder to GitHub Pages whenever its contents change on `main`.

### Setup

1. Clone or fork this repo
2. Add your website files to the `pages/` folder
3. Go to your repo's **Settings → Pages → Source** and select **GitHub Actions**
4. Push to `main`

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

You can also trigger a deploy manually from the **Actions** tab using the "Run workflow" button.

> **Tip:** You can optionally add a custom domain in the same Pages settings.

## Credits

Skills adapted from [Matt Pocock's skills](https://github.com/mattpocock/skills). Framework based on the [7 Phases of AI Development](https://www.aihero.dev/my-7-phases-of-ai-development).

## License

MIT
