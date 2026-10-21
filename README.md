# CPA Bear Book

An open-source textbook for CPA exam candidates, published at [book.cpabear.com](https://book.cpabear.com). It covers the three Core sections (FAR, AUD, REG) and the three Discipline sections (BAR, ISC, TCP) of the Uniform CPA Examination.

The book follows the 2027 CPA Exam Blueprints, which take effect January 1, 2027. Candidates testing in 2026 can use it too; the [blueprint guide](https://book.cpabear.com/blueprint/2027) explains the few differences.

The site is built with [Docusaurus 3](https://docusaurus.io/) and TypeScript, with KaTeX for math, Mermaid for diagrams, and [Pagefind](https://pagefind.app/) for search.

## Requirements

- Node.js 22 or later (CI and Cloudflare builds use the version in `.node-version`)
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
| `npx wrangler dev` | Serve `build/` locally with Cloudflare's routing, including redirects and 404 handling (run after a build) |

Before opening a pull request, run `npm run build && npm run typecheck`. The build fails on broken internal links.

## Project Layout

| Path | Contents |
|---|---|
| `docs/<section>/` | Chapter content in Markdown (MDX), one folder per exam section |
| `sidebars.ts` | Sidebar structure for each section |
| `src/components/` | Custom components, including the `JournalEntry` table |
| `src/pages/` | The home page, the about page, and the 2027 blueprint guide (`/blueprint/2027`) |
| `src/theme/` | Swizzled theme components: `CodeBlock` (journal entries), `Mermaid` (diagram rendering and click-to-enlarge), and `SearchBar` (Pagefind) |
| `static/` | Images, the favicon, and `_redirects` for pages that have moved |
| `content/` | Planning material, such as the AICPA blueprint and a topic checklist |
| `docusaurus.config.ts` | Site configuration |
| `wrangler.jsonc` | Cloudflare Workers configuration for production and preview deployments |
| `AGENTS.md` | Conventions for contributors and AI agents, including the AI agent policy |

## Writing Content

The book should read like a book, not a rulebook. Open each chapter by saying what the topic is and why it matters, explain an idea before stating the rule, and follow with a short worked example. Cover what the blueprint tests and leave out the rest.

To add a page, create the Markdown file in the right `docs/<section>/` folder and add its ID to `sidebars.ts`.

[AGENTS.md](AGENTS.md) has the full conventions, including:

- the ```` ```journal ```` code fence for formatted journal entries,
- escaping dollar amounts as `\$1,000` (a bare `$` starts KaTeX math),
- keeping diagrams legible inline: readers can click a diagram to enlarge it, but the content column is only about 860px wide, and
- the character rules: no em dashes or other characters common in AI-generated text, unless a character perfectly fits the surrounding text or is necessary.

## AI Agents

AI coding agents should read [AGENTS.md](AGENTS.md) before making changes; most agents load it automatically. Its AI agent policy applies to everything an agent writes in this repository, including commit messages and pull request descriptions.

## Maintenance Notes

- **Mermaid is pinned to version 11** through `overrides` in `package.json`. Mermaid 12 left many diagrams blank after a switch between light and dark mode. Before removing the pin, check that every diagram still renders in both modes.
- **Moved pages** need a 301 rule in `static/_redirects` so old links keep working. For example, `/blueprint/2026` redirects to `/blueprint/2027`.

## Deployment

The site is hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) as static assets, deployed by Workers Builds (Cloudflare's Git integration). `wrangler.jsonc` holds the configuration.

- **Production:** every push to `main` runs `npm run build`, then `npx wrangler deploy`, which publishes to [book.cpabear.com](https://book.cpabear.com).
- **Previews:** every other branch runs `npm run build`, then `npx wrangler preview`. Cloudflare posts the preview URL as a comment on the pull request and updates it on each push. Preview pages are marked `noindex`.

Pull requests into `main` also run a GitHub Actions build check (`.github/workflows/test-deploy.yml`).

To deploy by hand from a machine logged in with `npx wrangler login`, run `npm run deploy` (production) or `npm run deploy:preview` (a preview for the current branch).
