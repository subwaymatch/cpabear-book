# CPA Bear Book

An open-source textbook for CPA exam candidates, published at [book.cpabear.com](https://book.cpabear.com). It covers the three Core sections (FAR, AUD, REG) and the three Discipline sections (BAR, ISC, TCP) of the 2026 Uniform CPA Examination.

The site is built with [Docusaurus 3](https://docusaurus.io/) and TypeScript, with KaTeX for math, Mermaid for diagrams, and [Pagefind](https://pagefind.app/) for search.

## Requirements

- Node.js 20 or later (CI uses Node 22)
- npm (the repository uses `package-lock.json`, so use npm rather than yarn)

## Getting Started

```bash
npm ci            # install the exact dependency versions from package-lock.json
npm run start     # start the dev server at http://localhost:3030
```

Most changes reload automatically while the dev server is running. Search is built from the production output, so it only works after a build.

## Commands

| Command | Purpose |
|---|---|
| `npm run start` | Start the local dev server on port 3030 |
| `npm run build` | Build the production site into `build/` and generate the Pagefind search index |
| `npm run serve` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run clear` | Clear the Docusaurus cache |

Before opening a pull request, run `npm run build && npm run typecheck`. The build fails on broken internal links.

## Project Layout

| Path | Contents |
|---|---|
| `docs/<section>/` | Chapter content in Markdown (MDX), one folder per exam section |
| `sidebars.ts` | Sidebar structure for each section |
| `src/components/` | Custom components, including the `JournalEntry` table |
| `src/pages/` | Home, about, and 2026 blueprint pages |
| `src/theme/` | Swizzled theme components (code blocks and search) |
| `docusaurus.config.ts` | Site configuration |

## Writing Content

See [AGENTS.md](AGENTS.md) for the authoring conventions, including:

- the ```` ```journal ```` code fence for formatted journal entries,
- escaping dollar amounts as `\$1,000` (a bare `$` starts KaTeX math), and
- the writing style rules for punctuation and symbols.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages through GitHub Actions (`.github/workflows/deploy.yml`). Pull requests into `main` run a test build (`.github/workflows/test-deploy.yml`) but are not published.
