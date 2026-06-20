# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start Next.js dev server
pnpm build            # Production build (also writes public/version.json)
pnpm lint             # ESLint with auto-fix
pnpm prettier-write   # Format all files
```

## Architecture

**Next.js 16 / React 19 personal bio site (App Router)** built with flowbite-react UI components and Tailwind CSS v4.

### Key Directories

| Path | Purpose |
|------|---------|
| `/app` | Next.js App Router pages and layouts |
| `/components` | UI components (flowbite-react-based) |
| `/lib` | Utilities (image loader, helpers) |
| `/services` | Data-fetching utilities |
| `/models` | TypeScript types/interfaces |
| `/public` | Static assets |

### UI

- **flowbite-react** + **Tailwind CSS v4** for components and theming
- Custom imgix image loader at `lib/image-loader/imgix.ts`
- Path alias: `@/` maps to the repository root
