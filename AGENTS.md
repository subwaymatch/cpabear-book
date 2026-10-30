# AGENTS.md

This file describes the project structure, conventions, and workflows for AI agents working on the **CPA Bear Book** repository.

## AI Agent Policy

This policy applies to every AI agent working in this repository. It covers everything an agent writes: book content, code, comments, configuration, documentation, commit messages, and pull request titles and descriptions. Human contributors follow the same character rules.

### Characters that read as AI-written

Do not use the characters below. People rarely type them by hand, they are common in AI-generated text, and readers notice them.

| Avoid | Use instead |
|---|---|
| Em dash (`—`) and en dash (`–`) | A comma, colon, parentheses, or a new sentence. Write ranges with a hyphen (`1-5`, `10-20%`) or with "to" (`\$100 to \$200`). |
| Arrows (`→`, `←`, `⇒`, `↑`, `↓`) | Words such as "to", "becomes", "leads to", "increases", or "decreases" |
| Check and cross marks (`✓`, `✅`, `✗`, `❌`) | `Yes` and `No` |
| Emoji | Nothing, or a word |
| Ellipsis character (`…`) | Three periods (`...`), or a rewrite |
| Unicode minus sign (`−`) | A hyphen (`-`), including inside LaTeX math |
| Curly quotes (`‘` `’` `“` `”`) | Straight quotes (`'` and `"`) |
| Decorative bullets and symbols (`•`, `●`, `★`, `◆`, `▲`) | A Markdown list, or nothing |
| Invisible characters (non-breaking, zero-width, and narrow spaces) | A normal space, or nothing |

Standard notation is fine: `§`, `×`, `÷`, `±`, `≈`, `≠`, `≥`, `≤`, fractions such as `½`, and currency symbols.

**The exception.** Use one of these characters only when it perfectly fits the surrounding text or is necessary. For example:

- **Verbatim text:** quoting a title, statute, standard, or other source word for word, when the original uses the character and the exact wording matters.
- **Exact matches:** text that must match something outside your control, such as a UI label, a file name, command output, or data.
- **Code and tests:** code that must contain the character, such as a check that detects these characters or its test fixtures.
- **Purpose-built notation:** box-drawing characters in a directory tree, like the one in this file, or the examples in this policy.
- **Required boilerplate:** text that your tool or platform adds automatically, such as an attribution line.

Convenience, habit, and emphasis are not reasons. When you are unsure, rewrite the sentence without the character. When an exception applies, use the character only where it is needed.

## Project Overview

CPA Bear Book is an open-source, Docusaurus-based textbook for CPA exam candidates. It follows the 2027 CPA Exam Blueprints, which take effect January 1, 2027. The site is published at [book.cpabear.com](https://book.cpabear.com) and covers six exam sections:

### Core Sections

| Section | Full Name |
|---------|-----------|
| FAR | Financial Accounting and Reporting |
| AUD | Auditing and Attestation |
| REG | Regulation |

### Discipline Sections

| Section | Full Name |
|---------|-----------|
| BAR | Business Analysis and Reporting |
| ISC | Information Systems and Controls |
| TCP | Tax Compliance and Planning |

## Tech Stack

- **Framework:** [Docusaurus v3](https://docusaurus.io/) (React, TypeScript, MDX)
- **Language:** TypeScript (`~7.0`)
- **Node.js:** ≥ 22.0 (pinned in `.node-version` for CI and Cloudflare builds)
- **Hosting:** Cloudflare Workers static assets, deployed with Wrangler (`wrangler.jsonc`)
- **Package manager:** npm (use `npm ci` for installs, not `yarn`)
- **Math rendering:** KaTeX via `remark-math` + `rehype-katex`
- **Diagrams:** Mermaid via `@docusaurus/theme-mermaid`, pinned to Mermaid 11 with an npm `overrides` entry in `package.json` (Mermaid 12 left diagrams blank after switching color modes)
- **Icons:** `lucide-react`

## Repository Structure

```
cpabear-book/
├── content/                  # Raw source material (outlines, Q&A CSV, topic checklists)
├── docs/                     # All site documentation (MDX files)
│   ├── far/                  # Financial Accounting and Reporting pages
│   ├── aud/                  # Auditing and Attestation pages
│   ├── reg/                  # Regulation pages
│   ├── bar/                  # Business Analysis and Reporting pages
│   ├── isc/                  # Information Systems and Controls pages
│   └── tcp/                  # Tax Compliance and Planning pages
├── src/
│   ├── components/
│   │   └── JournalEntry/     # Custom component to render accounting journal entries
│   ├── css/
│   │   └── custom.css        # Global custom CSS, including the home and blueprint page tokens
│   ├── pages/
│   │   ├── index.tsx         # Home page
│   │   ├── about.tsx         # About page
│   │   └── blueprint/2027/   # CPA Exam Blueprints 2027 guide (/blueprint/2027)
│   └── theme/
│       ├── CodeBlock/        # Swizzled CodeBlock to intercept `journal` language fences
│       ├── Mermaid/          # Swizzled Mermaid: serial rendering and click-to-enlarge viewer
│       └── SearchBar/        # Pagefind search
├── static/                   # Static assets (images, favicon, `_redirects`)
│   └── img/illustrations/    # Home and blueprint page illustrations (WebP, transparent)
├── docusaurus.config.ts      # Site configuration (title, navbar, footer, plugins)
├── sidebars.ts               # Sidebar structure for all six exam sections
├── tsconfig.json             # TypeScript configuration
├── wrangler.jsonc            # Cloudflare Workers config (production domain, previews)
└── package.json
```

## Development Commands

All commands are run from the repository root.

| Command | Purpose |
|---------|---------|
| `npm ci` | Install dependencies (use this, not `npm install`) |
| `npm run start` | Start local dev server at `http://localhost:3030` |
| `npm run build` | Production build (runs broken-link check) |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run clear` | Clear Docusaurus cache |
| `npm run serve` | Serve the production build locally |

**Validate changes with:** `npm run build && npm run typecheck`

> **Warning:** `npm run build` will fail if any internal links are broken (`onBrokenLinks: "throw"`). Always verify links are valid before committing.

## Content Authoring

### Docs Location

All content lives under `docs/`. Each section has its own subdirectory mirroring the sidebar defined in `sidebars.ts`. When adding a new page:

1. Create the MDX file in the correct `docs/<section>/` subdirectory.
2. Add the doc ID (file path without extension, relative to `docs/`) to `sidebars.ts` in the appropriate category.

### Journal Entry Code Blocks

Use the custom `journal` language fence in MDX to render a formatted accounting journal entry table. The `JournalEntry` component is automatically invoked by the swizzled `CodeBlock`.

**Syntax:**

````
```journal
[Optional Date]
Dr. Account Name[accountType] amount
Cr. Account Name[accountType] amount
```
````

**Account type codes** (optional, appended in `[brackets]`):

| Code | Type |
|------|------|
| `a` | Asset |
| `l` | Liability |
| `e` | Equity |
| `ca` | Contra-asset |
| `cl` | Contra-liability |
| `ce` | Contra-equity |

**Example:**

````
```journal
Jan 1, 2025
Dr. Cash[a] 10,000
Cr. Common Stock[e] 10,000
```
````

### Writing Style

The site should read like a readable book, not a rulebook or a dry textbook. Write for a smart candidate studying alone.

- Open each chapter with a few sentences on what the topic is, why it matters, and how the chapter is organized.
- Explain the idea in plain English, then state the precise rule, then show a short worked example with round numbers.
- Prefer connected prose to long bullet lists. Keep lists for steps, criteria, and elements, and tables for comparisons.
- Use admonitions (`:::tip`, `:::note`) sparingly, for real exam tips and common traps.
- Cover what the blueprint tests and cut the rest. For REG and TCP, teach the mechanics rather than tables of inflation-indexed amounts, which the blueprint does not test.
- Use the book's Bear-themed company names (Bear Co., Polar Inc., Grizzly Inc., Panda Industries, and so on).

Follow the character rules in the [AI Agent Policy](#ai-agent-policy) above.

### Math

Use standard LaTeX syntax. Inline: `$formula$`. Block: `$$formula$$`.

Because a bare `$` starts math, always escape dollar amounts in prose and tables: write `\$1,000`, not `$1,000`. Inside math, write `\%` for a percent sign.

### Diagrams

Use standard Mermaid syntax in ` ```mermaid ` fences. Readers can click any diagram to open it full screen, but every diagram should still be legible inline. The docs column is about 860px wide on desktop, so prefer left-to-right (`LR`) layouts for trees with many siblings, split large diagrams, and break long labels with `<br/>`.

## Sidebar Configuration

Sidebars are defined in `sidebars.ts` and exported as `farSidebar`, `audSidebar`, `regSidebar`, `barSidebar`, `iscSidebar`, and `tcpSidebar`. Each sidebar entry references a doc by its ID (the file path relative to `docs/`, without the `.md` extension).

## Deployment

The site is hosted on Cloudflare Workers as static assets and deployed by Workers Builds, Cloudflare's Git integration:

- Pushes to `main` run `npm run build`, then `npx wrangler deploy`, publishing production at `book.cpabear.com`.
- Pushes to any other branch run `npm run build`, then `npx wrangler preview`. Cloudflare comments the preview URL on the pull request.

The build and deploy commands live in the Cloudflare dashboard (Worker **Settings** > **Builds**), and the Worker settings live in `wrangler.jsonc`. Keep the Worker `name` in `wrangler.jsonc` in sync with the dashboard, or builds fail. Pull requests also run the `test-deploy.yml` GitHub Actions build check. To reproduce Cloudflare's routing locally (trailing-slash redirects, 404 handling), run `npm run build && npx wrangler dev`.

When a page moves, add a 301 rule to `static/_redirects` (Cloudflare's `_redirects` format) so old links keep working. For example, `/blueprint/2026` redirects to `/blueprint/2027`.

## TypeScript

- The `tsconfig.json` extends `@docusaurus/tsconfig` and unsets its `baseUrl`, which TypeScript 7 no longer supports.
- Run `npm run typecheck` to check types without building.
- All source files in `src/` should be TypeScript (`.ts` / `.tsx`). Never commit compiled `.js` copies next to them (they are gitignored): webpack resolves `.js` before `.tsx`, so a stale copy silently replaces the real component, and duplicate pages cause "Duplicate routes found" warnings.
