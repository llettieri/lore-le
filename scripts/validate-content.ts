/**
 * Run in `pnpm build` (before next build) so bad content fails the build,
 * not the page. Catches the two mistakes you will actually make:
 * a tool slug that does not exist, and a missing icon file.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { cv } from '../content';

const errors: string[] = [];
const slugs = new Set(cv.tools.map((t) => t.slug));

for (const entry of cv.timeline) {
    const referenced = [
        ...entry.tools,
        ...(entry.phases ?? []).flatMap((p) => p.tools ?? []),
    ];
    for (const slug of referenced) {
        if (!slugs.has(slug)) {
            errors.push(
                `timeline "${entry.id}" references unknown tool "${slug}"`,
            );
        }
    }
}

for (const tool of cv.tools) {
    const icon = join(process.cwd(), 'public', 'icons', `${tool.slug}.svg`);
    if (!existsSync(icon)) {
        errors.push(
            `tool "${tool.slug}" has no icon at public/icons/${tool.slug}.svg`,
        );
    }
}

const ids = cv.timeline.map((e) => e.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) errors.push(`duplicate timeline ids: ${dupes.join(', ')}`);

if (errors.length) {
    console.error(
        'Content validation failed:\n' +
            errors.map((e) => `  · ${e}`).join('\n'),
    );
    process.exit(1);
}

console.log(
    `Content OK — ${cv.tools.length} tools, ${cv.timeline.length} timeline entries, ${cv.credentials.length} credentials.`,
);
