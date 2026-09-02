# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Regenerates public/cv*.pdf, then starts the Next.js dev server
pnpm build            # Validates content, regenerates public/cv*.pdf, then production build (also writes public/version.json)
pnpm lint             # ESLint with auto-fix
pnpm prettier-write   # Format all files
```

`pnpm build` fails loudly — before `next build` even runs — if a timeline
entry references a tool slug that doesn't exist in `content/toolbox.ts`, or
a tool has no matching `public/icons/<slug>.svg`. Run
`pnpm exec tsx scripts/validate-content.ts` on its own to check content
without doing a full build.

Both `dev` and `build` also run `scripts/generate-cv-pdf.tsx` **before** the
Next command, not chained after — `next dev` blocks indefinitely, so
anything chained after it with `&&` would never run in a live session. This
was tried and reverted once already; see the "CV PDF" section below.

## Architecture

**Next.js 16 / React 19 personal bio site (App Router)** built with shadcn/ui (Radix) components and Tailwind CSS v4. `/` is a single-page CV composed entirely from the typed content layer in `/content`; nothing about the CV's copy is hardcoded in `app/page.tsx`.

### Key Directories

| Path | Purpose |
|------|---------|
| `/app` | Next.js App Router pages and layouts |
| `/components` | Hand-written UI components; generated shadcn primitives live in `/components/ui` |
| `/content` | The CV's actual content — profile, toolbox, timeline, credentials (see below) |
| `/models` | TypeScript types/interfaces (`models/cv.ts` defines the content layer's shape) |
| `/scripts` | Build-time scripts (`validate-content.ts`, `generate-cv-pdf.tsx`) |
| `/lib` | Utilities (image loaders, `cn()` helper); `/lib/cv-pdf` is the CV PDF's own rendering layer (see below) |
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
- **Hero mode toggle** (`components/hero-mode-toggle.tsx`): the
  Professional/Personal `Tabs` switch reserves a fixed `min-h-92` around the
  headline + intro so switching modes causes zero layout shift. That value
  must stay ≥ the true worst case — a 3-line headline plus the 4-line
  `line-clamp`ed intro — not just whatever fits today's copy, or a longer
  edit to either mode's text will silently reintroduce the jump. For the
  same reason, the CTAs are passed in via a `ctas` prop and rendered
  *before* the `Highlights` collapsible in each mode: only the collapsible
  expanding is allowed to push page content down, never the CTAs — and the
  hero grid uses `items-start`, not `items-center`, so the portrait doesn't
  reposition either when it expands.
- **Collapsible expand/collapse animation is free**: `tw-animate-css`
  (already a dependency, used for `Sheet`'s slide/fade) ships
  `animate-collapsible-down`/`-up` keyframes keyed to Radix's own
  `--radix-collapsible-content-height` var — just add the
  `data-[state=...]:animate-collapsible-*` classes to `CollapsibleContent`,
  no custom CSS needed.

### CV PDF

The hero's "Download CV" button links to a real static file
(`public/cv*.pdf`), not a page — there is no `/cv` route. It's generated by
`scripts/generate-cv-pdf.tsx` using `@react-pdf/renderer`, sourced from the
same `content/index.ts` the site itself reads.

- A print-your-own-page approach (`window.print()` on an HTML/CSS page) was
  built and shipped first, then torn out — mobile browsers' support for
  programmatically triggering print is genuinely unreliable (many Android
  browsers largely ignore `window.print()`), and no amount of print-CSS
  fixing changes that platform limitation. A real generated file works
  identically on every device.
- **Do not wire generation into `next.config.ts`** the way `version.json`'s
  write is — tried this, reverted it. Verified two concrete problems in
  this Next version: a real local import chain (this generator's
  document/styles/types + the content layer) fails to resolve from
  `next.config.ts` with `Cannot find module` (Next's TS support for
  `next.config.ts` only transpiles that one entry file, not a deeper local
  import graph), and the config function gets invoked multiple times per
  single build — which would mean redundantly re-fetching the portrait and
  re-rendering the PDF several times per build. Regenerating via a plain
  script run *before* `next dev`/`next build` (see Commands above) is the
  approach that actually works.
- **Font is Helvetica** (`@react-pdf/renderer`'s built-in), not Nunito —
  deliberately. Fetching a font from Google Fonts during the Docker build
  would reintroduce an external, non-deterministic build dependency; a
  generated PDF is a different rendering surface than the site, so this
  doesn't conflict with the "one font family everywhere" rule above (that
  rule is about the site's on-screen UI).
- **Locale-aware already**: the generator loops over `content/i18n.ts`'s
  `locales`, writing `public/cv.pdf` for the default locale and
  `public/cv-<locale>.pdf` for each additional one, with every `t(value)`
  call passed the matching `locale`. Static document chrome ("Personal
  Details", "Education", etc. — not real CV content) lives in
  `lib/cv-pdf/labels.ts`, resolved the same fallback-to-default way. Since
  `locales` is still just `['en']`, this only produces `cv.pdf` today — the
  multi-file path is proven (smoke-tested with a temporary `'de'` entry:
  dayjs correctly rendered German month names) but otherwise dead code
  until real translated content exists.
- `lib/cv-pdf/document.tsx`'s styling is a separate `StyleSheet` — react-pdf
  has no CSS, no pseudo-elements, and no `object-fit`. The timeline's dot
  markers (`.job::before` in spirit) are real, absolutely-positioned `View`s
  layered on the job's left border, not a pseudo-element.

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
- **Site copy**: `content/base-values.ts` holds the static UI strings (section
  titles, descriptions, button labels) as `Localized<string>` — everything
  `app/page.tsx` renders outside of profile/timeline/credentials data comes
  from here, not JSX literals. A value may embed `**word**` to render that
  span emphasized; `components/rich-text.tsx`'s `RichText` component parses
  it (`variant="primary"` vs `"bold"` picks the color). This is an
  intentionally tiny markdown-lite convention, not a full markdown parser —
  don't reach for `*`, links, or nesting, they won't render.
- **Edit the hero's Professional/Personal toggle**: `profile.personal`
  (the Personal mode's headline + intro) and
  `profile.professionalHighlights` / `profile.personal.highlights` (the
  "show more" disclosure — chips + quick facts, one `HeroHighlights` per
  mode) in `content/profile.ts`. Chips take a plain emoji `icon`, not a
  toolbox slug — there's no `public/icons/<slug>.svg` asset to add.
- **Translations**: the content model already supports per-locale values via
  `Localized<T>` (`content/i18n.ts`'s `t()`/`tAll()`) — a value can be a
  plain string (resolved as-is) or `{ en: '...', de: '...' }`. Adding a
  language is additive; no site routing work needed for it yet. Add the
  locale to `content/i18n.ts`'s `locales` array and `pnpm build` will also
  start emitting `public/cv-<locale>.pdf` for it automatically — but also
  add its entry to `lib/cv-pdf/labels.ts`, since that file's static labels
  aren't `Localized<T>` content and won't translate on their own.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
