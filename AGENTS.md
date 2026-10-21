# AGENTS.md

This file describes the project structure, conventions, and workflows for AI agents working on the **CPA Bear Book** repository.

## Project Overview

CPA Bear Book is an open-source, Docusaurus-based textbook for CPA exam candidates. The site is published at [book.cpabear.com](https://book.cpabear.com) and covers six exam sections:

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
- **Diagrams:** Mermaid via `@docusaurus/theme-mermaid`
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
│   │   ├── JournalEntry/     # Custom component to render accounting journal entries
│   │   └── SectionCard/      # Card component used on the home page
│   ├── css/
│   │   └── custom.css        # Global custom CSS
│   ├── pages/
│   │   ├── index.tsx         # Home page
│   │   └── about.tsx         # About page
│   └── theme/
│       └── CodeBlock/        # Swizzled CodeBlock to intercept `journal` language fences
├── static/                   # Static assets (images, favicon)
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

Write the way a careful human author types. Do not use em dashes (`—`), en dashes (`–`), Unicode arrows (`→`, `↑`, `↓`), check or cross marks (`✓`, `✅`, `❌`), emoji, the ellipsis character (`…`), the Unicode minus sign (`−`), or curly quotes. Use commas, colons, parentheses, or separate sentences instead; write ranges as `1-5` or `\$100 to \$200`; write `Yes`/`No` in tables. Standard notation such as `§`, `×`, `÷`, `≥`, `≤`, and currency symbols is fine.

### Math

Use standard LaTeX syntax. Inline: `$formula$`. Block: `$$formula$$`.

### Diagrams

Use standard Mermaid syntax in ` ```mermaid ` fences.

## Sidebar Configuration

Sidebars are defined in `sidebars.ts` and exported as `farSidebar`, `audSidebar`, `regSidebar`, `barSidebar`, `iscSidebar`, and `tcpSidebar`. Each sidebar entry references a doc by its ID (the file path relative to `docs/`, without the `.md` extension).

## Deployment

The site is hosted on Cloudflare Workers as static assets and deployed by Workers Builds, Cloudflare's Git integration:

- Pushes to `main` run `npm run build`, then `npx wrangler deploy`, publishing production at `book.cpabear.com`.
- Pushes to any other branch run `npm run build`, then `npx wrangler preview`. Cloudflare comments the preview URL on the pull request.

The build and deploy commands live in the Cloudflare dashboard (Worker **Settings** > **Builds**), and the Worker settings live in `wrangler.jsonc`. Keep the Worker `name` in `wrangler.jsonc` in sync with the dashboard, or builds fail. Pull requests also run the `test-deploy.yml` GitHub Actions build check. To reproduce Cloudflare's routing locally (trailing-slash redirects, 404 handling), run `npm run build && npx wrangler dev`.

## TypeScript

- The `tsconfig.json` extends `@docusaurus/tsconfig` and unsets its `baseUrl`, which TypeScript 7 no longer supports.
- Run `npm run typecheck` to check types without building.
- All source files in `src/` should be TypeScript (`.ts` / `.tsx`). Never commit compiled `.js` copies next to them (they are gitignored): webpack resolves `.js` before `.tsx`, so a stale copy silently replaces the real component, and duplicate pages cause "Duplicate routes found" warnings.
