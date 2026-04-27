---
name: ruflo-init
description: Initialize a repository with ruflo - an enterprise AI orchestration platform for Claude Code. Use when user wants to initialize ruflo, setup ruflo, configure ruflo, or mentions "ruflo init".
---

# Skill: Ruflo Init

## Overview

Initialize the current repository with ruflo by pulling the latest configuration from https://github.com/ruvnet/ruflo and running `ruflo init`.

Ruflo is a multi-agent AI orchestration framework that transforms Claude Code into a powerful multi-agent development platform with swarms, memory, and intelligent task routing.

---

## Step 1 — Check Prerequisites

Before starting, verify:
- Node.js 20+ is installed
- npm/pnpm/bun is available
- Claude Code is installed (optional but recommended)

---

## Step 2 — Pull Ruflo Configuration

Clone or pull the ruflo repository to get the latest configuration files:

```bash
# If .ruflo directory doesn't exist, clone the config
if [ ! -d ".ruflo" ]; then
  git clone --depth 1 https://github.com/ruvnet/ruflo.git .ruflo-temp
  # Copy relevant config files
  cp -r .ruflo-temp/.claude . 2>/dev/null || true
  cp -r .ruflo-temp/.agents . 2>/dev/null || true
  cp -r .ruflo-temp/.github . 2>/dev/null || true
  rm -rf .ruflo-temp
fi
```

---

## Step 3 — Run Ruflo Init

Execute the initialization command using npx (recommended - no global install needed):

```bash
npx ruflo@latest init
```

Or with the wizard for guided setup:
```bash
npx ruflo@latest init --wizard
```

---

## Step 4 — Verify Installation

Check that ruflo is properly configured:

1. Look for `.claude/` directory with `CLAUDE.md`
2. Check for `.agents/` directory with agent configurations
3. Verify `.github/` workflows are present
4. Confirm MCP tools are available

---

## Step 5 — Optional: Add MCP Server

If the user wants full Claude Code integration, add ruflo as an MCP server:

```bash
claude mcp add ruflo -- npx -y ruflo@latest mcp start
```

Verify with:
```bash
claude mcp list
```

---

## Output

After completion, provide a summary:
- What was installed
- Key directories created (.claude, .agents, etc.)
- Next steps for using ruflo
- Link to documentation: https://github.com/ruvnet/ruflo
