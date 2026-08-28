'use client';

import React, { ReactElement } from 'react';
import type { Tool } from '@/models/cv';
import { ToolCard } from './tool-card';

interface Props {
    tools: Tool[];
    direction?: 'left' | 'right';
    /** Seconds for one full pass. Longer row = larger number. */
    duration?: number;
}

/**
 * The -50% translate loop is only gap-free while the row stays narrower
 * than twice its own rendered width, so a short tool list repeats a few
 * times first — widening what counts as "one copy" — before being
 * duplicated once more for the seamless -50% loop. Keeps it gap-free on
 * any realistic viewport without measuring anything in JS.
 */
const MIN_REPEATS = 4;

export const ToolboxMarquee = ({
    tools,
    direction = 'left',
    duration = 34,
}: Props): ReactElement => {
    const copy = Array.from({ length: MIN_REPEATS }, () => tools).flat();
    const looped = [...copy, ...copy];
    /**
     * `duration` is "seconds per one original pass" — since the animated
     * distance is now MIN_REPEATS times wider (one "copy" = MIN_REPEATS
     * repeats of the tool list), the actual CSS duration scales up by the
     * same factor to keep the on-screen speed constant.
     */
    const cssDuration = duration * MIN_REPEATS;

    return (
        <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] py-1.5">
            <div
                /**
                 * Keyframes live in app/globals.css (see globals.additions.css).
                 */
                className={`flex w-max gap-3.5 ${
                    direction === 'left'
                        ? 'animate-[marquee-left_var(--mq)_linear_infinite]'
                        : 'animate-[marquee-right_var(--mq)_linear_infinite]'
                }`}
                style={{ '--mq': `${cssDuration}s` } as React.CSSProperties}
            >
                {looped.map((tool, i) => (
                    <ToolCard key={`${tool.slug}-${i}`} tool={tool} />
                ))}
            </div>
        </div>
    );
};
