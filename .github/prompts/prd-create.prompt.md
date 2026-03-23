---
description: "Use when: converting feature requirements, plans, or specifications into a structured prd.json with trackable items, acceptance criteria, and dependency chains."
argument-hint: "Paste or describe the feature requirements to convert into PRD items"
agent: agent
model: Claude Sonnet 4.6 (copilot)
tools: [vscode, execute, read, agent, edit, search, todo]
---

Convert the provided feature requirements into a structured `prd.json` file.

## Schema

Each item in the JSON array must follow this structure:

| Field         | Type     | Required | Description                                                                 |
| ------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `id`          | string   | yes      | Pattern: `P{phase}-{seq}` (e.g., `P1-001`, `P7-032`)                        |
| `phase`       | integer  | yes      | Delivery phase number                                                       |
| `category`    | enum     | yes      | `functional`, `infrastructure`, `testing`, `deployment`, or `dx`            |
| `priority`    | enum     | yes      | `critical`, `high`, `medium`, or `low`                                      |
| `effort`      | enum     | yes      | T-shirt size: `xs` (<30min), `s` (1-2h), `m` (2-4h), `l` (4-8h), `xl` (8h+) |
| `title`       | string   | yes      | Short title, max 80 chars                                                   |
| `description` | string   | yes      | Detailed description of the deliverable                                     |
| `outputs`     | string[] | yes      | Files or artifacts this item produces                                       |
| `dependsOn`   | string[] | no       | IDs of items that must pass before this can start                           |
| `steps`       | string[] | yes      | Ordered verification steps (acceptance criteria) — be specific and testable |
| `passes`      | boolean  | yes      | Always `false` initially                                                    |
| `tags`        | string[] | no       | Labels for cross-cutting filtering                                          |
| `notes`       | string   | no       | Blockers, context, or implementation decisions                              |

## Rules

1. Every item starts with `"passes": false`
2. Use specific, verifiable acceptance criteria in `steps` — prefer commands (`php artisan test --filter=X`), file existence checks, and observable assertions over vague language
3. Map `dependsOn` accurately — items cannot start until dependencies pass
4. Assign `priority: "critical"` only to items that block multiple downstream items
5. Include `outputs` with exact file paths relative to project root
6. Group items by phase, sequence IDs within each phase (P1-001, P1-002, P2-003...)
7. Categories: `functional` = agents/tools/API features, `infrastructure` = config/db/middleware/auth, `testing` = test suites, `deployment` = CI/CD/Docker/cloud, `dx` = docs/UX/boost

## Output

1. Save the PRD as `prd.json` in the project root — a flat JSON array of items
2. Create an empty `progress.md` in the project root for tracking notes
