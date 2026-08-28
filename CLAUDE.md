# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start Next.js dev server
pnpm build            # Validates content (scripts/validate-content.ts), then production build (also writes public/version.json)
pnpm lint             # ESLint with auto-fix
pnpm prettier-write   # Format all files
```

`pnpm build` fails loudly — before `next build` even runs — if a timeline
entry references a tool slug that doesn't exist in `content/toolbox.ts`, or
a tool has no matching `public/icons/<slug>.svg`. Run
`pnpm exec tsx scripts/validate-content.ts` on its own to check content
without doing a full build.

## Architecture

**Next.js 16 / React 19 personal bio site (App Router)** built with shadcn/ui (Radix) components and Tailwind CSS v4. `/` is a single-page CV composed entirely from the typed content layer in `/content`; nothing about the CV's copy is hardcoded in `app/page.tsx`.

### Key Directories

| Path | Purpose |
|------|---------|
| `/app` | Next.js App Router pages and layouts |
| `/components` | Hand-written UI components; generated shadcn primitives live in `/components/ui` |
| `/content` | The CV's actual content — profile, toolbox, timeline, credentials (see below) |
| `/models` | TypeScript types/interfaces (`models/cv.ts` defines the content layer's shape) |
| `/scripts` | Build-time scripts (`validate-content.ts`) |
| `/lib` | Utilities (image loaders, `cn()` helper) |
| `/services` | Data-fetching utilities |
| `/public` | Static assets, including `public/icons/<slug>.svg` |

### UI

- **shadcn/ui** (Radix base) + **Tailwind CSS v4** for components and theming
- The site is dark-only: `className="dark"` on `<html>` (`app/layout.tsx`),
  and `@custom-variant dark (&:where(.dark, .dark *));` in `app/globals.css`
  ties Tailwind's `dark:` classes to that fixed class rather than the
  visitor's OS `prefers-color-scheme`. **Do not delete that
  `@custom-variant` line** — without it, every `dark:`-prefixed class shadcn
  generates (in `Button`, `Sheet`, etc.) silently falls back to the OS
  preference instead, which broke the carousel controls' color once already.
- Grids: any `grid` that only sets `md:grid-cols-*` needs an explicit
  `grid-cols-1` (or similar) for the base/mobile case too. Without it, CSS
  Grid's implicit auto column sizes to content's preferred width instead of
  shrinking to the container — unlike flex or block layout — so long
  unbreakable content (a compound word, a long tool-chip list) pushes the
  whole column past the viewport on mobile.
- Local image assets (anything under `/public`) need
  `loader={nextLoader}` from `lib/image-loader/nextjs.ts` explicitly passed
  to `next/image`. The app-wide default loader (`next.config.ts`) is the
  imgix one, for remote CDN photos — a local `<Image>` without its own
  `loader` prop gets its path wrongly prefixed with the imgix remote host.
- Dates use `dayjs`, not the built-in `Date`/`Intl` API.
- One font family, Nunito, everywhere — no second/mono family. (A JetBrains
  Mono import was tried and deliberately removed; don't re-add it.)
- Any color used more than once, or that has a name in the design spec,
  belongs in `app/globals.css`'s `@theme` block (`--color-*`) — not as a
  raw `text-[#hex]`/`bg-[#hex]` arbitrary value. Several one-off hex
  literals crept into the CV page before this was enforced; if you spot
  another one, add the token and swap it rather than leaving it inline.
- Path alias: `@/` maps to the repository root

### Content Layer

`app/page.tsx` composes the CV from `content/index.ts`'s exports — never
import `content/toolbox.ts` etc. directly from a page or component.

- **Add a tool**: one entry in `content/toolbox.ts`'s `tools` array
  (`slug`, `name`, `kind`, optionally `row`/`featured`), plus an icon at
  `public/icons/<slug>.svg`. Nothing else to touch.
  - Icon source: monochrome, not full-color — `ToolCard` renders every icon
    tinted to `--color-primary` via a CSS `mask-image` (`components/tool-card.tsx`),
    so a full-color brand mark just looks muddy. Fetch from
    [Iconify](https://icon-sets.iconify.design/)'s `simple-icons` set first
    (`https://api.iconify.design/simple-icons/<name>.svg`) — it's
    purpose-built as single-path monochrome brand marks, so it masks
    cleanly. When a tool isn't in `simple-icons` (checked via
    `https://api.iconify.design/search?query=<name>&prefix=simple-icons`,
    usually a trademark gap — Java, AWS), fall back to `mdi` or
    `fa6-brands`, both also solid/flat and stylistically consistent with
    `simple-icons`. Avoid outline/stroke sets (e.g. `tabler`) — mixed with
    the solid ones they read as inconsistent even after masking. If truly
    nothing solid exists anywhere (`react-native`, `grpc` so far), a
    full-color `devicon` source still works fine through the same mask —
    it just won't be as crisp as a purpose-built monochrome path.
- **Add a job or education entry**: one entry in `content/timeline.ts`.
  Short rotations within a role are nested `phases` on the parent entry,
  not separate timeline stops. `tools`/`phases[].tools` are slugs validated
  against `content/toolbox.ts` at build time.
- **Add a certification or award**: one entry in `content/credentials.ts`.
  Any count or sort order shown on the site must be derived from the array
  (`.length`, `.sort()`), never typed as a literal.
- **Translations**: the content model already supports per-locale values via
  `Localized<T>` (`content/i18n.ts`'s `t()`/`tAll()`) — a value can be a
  plain string (resolved as-is) or `{ en: '...', de: '...' }`. Adding a
  language is additive; no routing work needed for it yet.
