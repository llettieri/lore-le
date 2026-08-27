import Image from 'next/image';
import React, { ReactElement } from 'react';
import type { Tool } from '@/models/cv';
import nextLoader from '@/lib/image-loader/nextjs';

/**
 * The marquee tile. Icon comes from public/icons/<slug>.svg by convention,
 * so adding a tool never touches this file.
 */
export const ToolCard = ({ tool }: { tool: Tool }): ReactElement => (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 pr-6 pl-4 whitespace-nowrap">
        <span className="bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-xl">
            <Image
                src={`/icons/${tool.slug}.svg`}
                loader={nextLoader}
                alt=""
                width={20}
                height={20}
                aria-hidden
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
