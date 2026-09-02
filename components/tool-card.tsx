import React, { CSSProperties, ReactElement } from 'react';
import type { Tool } from '@/models/cv';

/**
 * The carousel card. Icon comes from public/icons/<slug>.svg by convention,
 * so adding a tool never touches this file.
 *
 * Icons are tinted to the primary blue via CSS mask rather than shown at
 * their native brand colors — a mask ignores the source SVG's own fill(s)
 * entirely, so it works regardless of how many colors the icon has and
 * doesn't require re-sourcing icons from a currentColor-friendly set.
 */
export const ToolCard = ({ tool }: { tool: Tool }): ReactElement => {
    const iconUrl = `url(/icons/${tool.slug}.svg)`;
    const maskStyle: CSSProperties = {
        WebkitMaskImage: iconUrl,
        maskImage: iconUrl,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
    };

    return (
        <div
            aria-label={tool.slug}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 pr-6 pl-4 whitespace-nowrap select-none"
        >
            <span className="bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-xl">
                <span
                    aria-hidden
                    className="bg-primary block size-5"
                    style={maskStyle}
                />
            </span>
            <span>
                <span className="block text-[15px] font-extrabold">
                    {tool.name}
                </span>
                <span className="text-primary-tint/70 block text-[11px] font-semibold">
                    {tool.kind}
                </span>
            </span>
        </div>
    );
};
