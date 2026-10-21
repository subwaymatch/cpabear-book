# CPA Bear Book

An open-source textbook for CPA exam candidates, published at [book.cpabear.com](https://book.cpabear.com). It covers the three Core sections (FAR, AUD, REG) and the three Discipline sections (BAR, ISC, TCP) of the 2026 Uniform CPA Examination.

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
| `npx wrangler dev` | Serve `build/` locally with Cloudflare's asset routing (run after a build) |

Before opening a pull request, run `npm run build && npm run typecheck`. The build fails on broken internal links.

## Project Layout

| Path | Contents |
|---|---|
| `docs/<section>/` | Chapter content in Markdown (MDX), one folder per exam section |
| `sidebars.ts` | Sidebar structure for each section |
| `src/components/` | Custom components, including the `JournalEntry` table |
| `src/pages/` | Home, about, and 2027 blueprint guide pages |
| `src/theme/` | Swizzled theme components (code blocks, Mermaid diagrams, and search) |
| `docusaurus.config.ts` | Site configuration |
| `wrangler.jsonc` | Cloudflare Workers configuration for production and preview deployments |

## Writing Content

See [AGENTS.md](AGENTS.md) for the authoring conventions, including:

- the ```` ```journal ```` code fence for formatted journal entries,
- escaping dollar amounts as `\$1,000` (a bare `$` starts KaTeX math), and
- the writing style rules for punctuation and symbols.

## Deployment

The site is hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) as static assets, deployed by Workers Builds (Cloudflare's Git integration). `wrangler.jsonc` holds the configuration.

- **Production:** every push to `main` runs `npm run build`, then `npx wrangler deploy`, which publishes to [book.cpabear.com](https://book.cpabear.com).
- **Previews:** every other branch runs `npm run build`, then `npx wrangler preview`. Cloudflare posts the preview URL as a comment on the pull request and updates it on each push.

Pull requests into `main` also run a GitHub Actions build check (`.github/workflows/test-deploy.yml`).

To deploy by hand from a machine logged in with `npx wrangler login`, run `npm run deploy` (production) or `npm run deploy:preview` (a preview for the current branch).
