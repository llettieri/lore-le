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

/** Duplicated once and translated -50%, so the loop is seamless at any count. */
export const ToolboxMarquee = ({
    tools,
    direction = 'left',
    duration = 34,
}: Props): ReactElement => (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] py-1.5">
        <div
            /**
             * Keyframes live in app/globals.css (see globals.additions.css).
             * The animation is expressed as a class, not an inline style, so
             * `motion-reduce:animate-none` can actually win — duration stays
             * data-driven through the --mq custom property.
             */
            className={`flex w-max gap-3.5 motion-reduce:animate-none ${
                direction === 'left'
                    ? 'animate-[marquee-left_var(--mq)_linear_infinite]'
                    : 'animate-[marquee-right_var(--mq)_linear_infinite]'
            }`}
            style={{ '--mq': `${duration}s` } as React.CSSProperties}
        >
            {[...tools, ...tools].map((tool, i) => (
                <ToolCard key={`${tool.slug}-${i}`} tool={tool} />
            ))}
        </div>
    </div>
);
