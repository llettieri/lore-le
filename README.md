# Lore-Le

Lorenzo Lettieri's personal site — a single-page, typed-content-driven CV at
[lore-le.ch](https://lore-le.ch), plus a couple of legacy media galleries kept around for continuity.

## 🚀 Features

- 🖥 **Live CV**: hero, a self-scrolling toolbox carousel, a clickable career timeline (with nested rotations for the
  apprenticeship years), and certifications/awards — all on one deep-linkable page
- 📄 **Downloadable CV PDF**: a real, static `cv.pdf` generated at build time from the same typed content, not a page a
  visitor prints themselves
- 📇 **Typed content layer**: adding a tool, a job or a certification is a one-entry change in `content/`, never a
  component edit
- ✅ **Build-time content validation**: a bad tool slug or a missing icon fails `pnpm build`, not the page
- 📱 **Responsive, dark-only design**: no light theme, no toggle — built to one look
- 🖼 **Legacy routes**: NYC photo carousel/gallery and a drone video page are still live at their URLs, just unlinked
  from the main nav

## 🛠 Tech Stack

| Frontend                | Content               | Tools                          |
|-------------------------|-----------------------|--------------------------------|
| Next.js 16 (App Router) | Typed content modules | TypeScript                     |
| React 19                | `dayjs` for dates     | Tailwind CSS v4                |
| shadcn/ui (Radix)       | imgix image CDN       | ESLint / Prettier              |
|                         |                       | pnpm                           |
|                         |                       | `@react-pdf/renderer` (CV PDF) |

## 🎯 Scope

This is a personal site, not a template — it exists to present one person's CV and a couple of media pages, and it's
intentionally opinionated rather than general-purpose:

- `/` is the CV. Everything on it — profile, toolbox, career timeline, credentials — comes from the typed content
  modules in `content/`, never hardcoded in the page component.
- `/nyc-images/*` and `/drone-video` are older photo/video pages, kept functional but hidden from the nav
  (`enabled: false` in
  `components/navbar.tsx`'s `links` array) rather than deleted.
- `/imprint` and `/privacy` are the legal pages Swiss sites are expected to carry.
- Styling is dark-only by design (`className="dark"` on `<html>`,
  `@custom-variant dark` tied to that class rather than the visitor's OS preference) — there's no light theme to
  maintain.
- The "Download CV" button serves a real generated PDF (`public/cv.pdf`), built at `pnpm build`/`pnpm dev` time from the
  same content the site reads — not a page a visitor prints themselves. Translations (German/Italian) are designed for
  in the content model (`Localized<T>`,
  `summaryShort`) and the PDF generator already loops over configured locales, but no translated content exists yet —
  additive later, not a rewrite.

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/llettieri/lore-le.git
cd lore-le

# Install the Node version specified in .nvmrc (requires nvm)
nvm install
nvm use

# Enable pnpm via corepack
corepack enable pnpm

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

No API keys or environment variables are required to run this project.

## 📇 Content Model

The CV is data, not markup. `models/cv.ts` defines the shape; `content/*.ts`
holds the actual values; `app/page.tsx` composes the page from
`content/index.ts` and never imports the individual content files directly.

- **Add a tool**: one entry in `content/toolbox.ts` (`slug`, `name`, `kind`)
  plus an icon at `public/icons/<slug>.svg`. Nothing else to touch — the toolbox carousel, the "worked with" chips, and
  the build validator all read this one array.
- **Add a job or education entry**: one entry in `content/timeline.ts`. Short rotations within a role live as `phases`
  nested inside their parent entry, not as separate timeline stops.
- **Add a certification or award**: one entry in `content/credentials.ts`. Counts and sort order shown on the site (e.g.
  "N certifications") are always derived from the array, never hardcoded.
- **Validation**: `scripts/validate-content.ts` runs before every
  `pnpm build` and fails the build if a timeline entry references a tool slug that doesn't exist, or a tool has no
  matching icon file.
- **CV PDF**: `scripts/generate-cv-pdf.tsx` runs before every `pnpm dev`
  and `pnpm build`, rendering `public/cv.pdf` from the same content via
  `@react-pdf/renderer` — a separate rendering path from the site (its own styling, Helvetica instead of the site's
  Nunito) since react-pdf has no CSS or DOM.

## 📁 Project Structure

The most important directories:

```
├── app/            # Next.js App Router pages and layouts
├── components/     # Hand-written UI; generated shadcn primitives in components/ui/
├── content/        # The CV's actual content — profile, toolbox, timeline, credentials
├── lib/            # Utilities (image loaders, cn() helper); lib/cv-pdf/ is the CV PDF's own rendering layer
├── models/         # TypeScript types for the content layer (models/cv.ts)
├── public/         # Static assets, including public/icons/<slug>.svg and the generated cv.pdf
├── scripts/        # Build-time scripts (content validation, CV PDF generation)
└── services/       # Data-fetching utilities (image services)
```
