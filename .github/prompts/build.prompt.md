---
description: "Use when: starting a new project or feature from scratch using the 7 Phases of AI Development framework (Idea → Research → Prototype → PRD → Kanban → Execution → QA). Orchestrates the full lifecycle."
argument-hint: "Describe the project or feature idea to build"
agent: agent
model: ["Claude Opus 4.6 (copilot)", "Claude Sonnet 4.6 (copilot)"]
tools: [vscode, execute, read, agent, edit, search, todo, web]
---

# 7 Phases of AI Development

Run all seven phases of the AI development lifecycle for the idea described below. Each phase produces specific artifacts. Complete each phase fully before moving to the next. Skip phases only when explicitly marked optional and the user confirms.

**User's idea:** {{ input }}

---

## Phase 1: Idea Refinement

**Goal:** Turn a vague idea into a concrete, well-scoped project definition.

1. Read the user's idea above.
2. Use the `/grill-me` skill to interview the user — walk down every branch of the decision tree until you reach shared understanding on:
   - What is being built and why
   - Target users and use cases
   - Key constraints (tech stack, timeline, scale)
   - What is explicitly out of scope
3. Produce a concise **Problem Statement** (3-5 sentences) and save it to `IDEA.md` in the project root.

**Artifact:** `IDEA.md`

---

## Phase 2: Research (Optional)

**Goal:** Cache all external dependency documentation so agents can work without repeated web exploration.

Ask the user: _"Does this project involve external APIs, unfamiliar libraries, or dependencies that need exploration?"_

If yes:

1. Identify all external dependencies from the idea (APIs, packages, services, protocols).
2. For each dependency, fetch and cache:
   - Installation / setup instructions
   - Core API surface (classes, methods, config schemas)
   - Authentication and connection parameters
   - Code examples relevant to the project's use case
3. Save everything to `RESEARCH.md` in the project root.
4. Add a header: `> ⚠️ Ephemeral: This file is scoped to this sprint. Delete after shipping to prevent stale context.`

If no: Skip to Phase 3.

**Artifact:** `RESEARCH.md` (ephemeral)

---

## Phase 3: Prototyping (Skipped by default)

**Goal:** Impose design taste on the outcome before committing to a plan.

Skip this phase by default and proceed to Phase 4. Only run prototyping if the user explicitly requested it (e.g., "prototype first", "explore designs", "show me options").

If prototyping was requested:

1. Use the `/design-an-interface` skill to generate multiple radically different approaches for the key design decisions.
2. Create throwaway prototypes for each approach — UI mockups, architecture spikes, or integration tests.
3. Present options to the user and get a decision on each.
4. Commit the winning designs to the codebase (in a `prototypes/` directory or directly in the project structure) so they're available as concrete examples during implementation.

**Artifact:** Prototype code committed to the repo

---

## Phase 4: Product Requirements Document (PRD)

**Goal:** Describe the end state — what users will see and how it will behave. Not the journey, the destination.

1. Use the `/write-a-prd` skill to create the PRD through:
   - Codebase exploration (if code already exists)
   - User interview to hammer out every decision point
   - Walking through the full decision tree to uncover edge cases
2. Reference `IDEA.md` for the problem statement and `RESEARCH.md` for technical constraints.
3. Save the PRD as `prd.json` using the schema from [prd-create.prompt.md](.github/prompts/prd-create.prompt.md):
   - Every item starts with `"passes": false`
   - Use specific, verifiable acceptance criteria in `steps`
   - Map `dependsOn` accurately
   - Include `outputs` with exact file paths
4. Create `progress.md` with checkbox tracking for all deliverables, organized by phase.

**Artifacts:** `prd.json`, `progress.md`

---

## Phase 5: Implementation Planning (Kanban Board)

**Goal:** Break the PRD into independently-grabbable work items with blocking relationships, enabling parallel execution.

1. Use the `/prd-to-issues` skill to convert `prd.json` into GitHub Issues.
2. Apply labels for filtering:
   - Phase: `phase:1`, `phase:2`, etc.
   - Priority: `priority:critical`, `priority:high`, `priority:medium`, `priority:low`
   - Effort: `effort:xs`, `effort:s`, `effort:m`, `effort:l`, `effort:xl`
   - Category: `category:functional`, `category:infrastructure`, `category:testing`, `category:deployment`, `category:dx`
3. Map `dependsOn` from `prd.json` to "Blocked by #N" references in each issue.
4. Identify parallel work clusters — groups of issues with no mutual dependencies that can be executed simultaneously.
5. Define execution waves ordered by the dependency graph:
   - **Wave 1:** Critical-path foundation items (no dependencies)
   - **Wave 2+:** Parallel clusters unlocked by Wave 1 completion
   - Continue until all items are assigned to a wave

Present the wave plan to the user for approval before proceeding.

**Artifacts:** GitHub Issues with labels and dependency links

---

## Phase 6: Execution

**Goal:** Implement all deliverables, working through the dependency graph wave by wave.

For each execution wave:

1. Pick the next unblocked wave from the plan.
2. For each deliverable in the wave:
   a. Read `RESEARCH.md` for relevant external dependency context.
   b. Read the prototype code if applicable.
   c. Follow the TDD red-green-refactor cycle (use `/tdd` skill):
   - Write a failing test based on the `steps` acceptance criteria from `prd.json`
   - Implement the minimum code to pass
   - Refactor for clarity
     d. Verify all `steps` from `prd.json` pass.
     e. Mark `"passes": true` in `prd.json`.
     f. Update `progress.md` — check off the deliverable and add a note under "Recent Updates".
3. After completing all items in a wave, run the full test suite to catch regressions.
4. Move to the next wave.

**Artifacts:** Working code, updated `prd.json` (passes: true), updated `progress.md`

---

## Phase 7: Quality Assurance

**Goal:** Verify implementation quality and catch issues before shipping.

After each execution wave (or after all waves complete):

1. Create a **QA Plan** covering:
   - All acceptance criteria from `prd.json` `steps` fields for completed deliverables
   - Edge cases and error scenarios
   - Security review (OWASP Top 10: injection, broken access control, API key exposure, etc.)
   - Performance review (N+1 queries, missing indexes, streaming latency)
   - Integration testing (end-to-end flows across multiple deliverables)
2. Present the QA plan to the user for review and testing.
3. Collect QA findings — bugs, UX issues, improvements.
4. For each finding:
   - Create a new deliverable in `prd.json` with appropriate phase, priority, and dependencies
   - Add to `progress.md`
   - Create a GitHub Issue
5. If new deliverables were created, loop back to **Phase 6** to execute them, then return here for another QA pass.

Repeat the Execution → QA loop until all quality gates pass.

**Artifacts:** QA plan, new issues for findings, final verified `prd.json` with all items passing

---

## Completion

When all deliverables pass and QA is clean:

1. Update `progress.md` with final stats and completion date.
2. Delete `RESEARCH.md` (ephemeral — prevents stale context in future work).
3. Summarize what was built, total deliverables completed, and any known limitations.
