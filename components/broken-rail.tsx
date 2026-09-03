'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * A single, deliberately broken rail stop, reusing `RailStop`'s dot/connector
 * vocabulary from the journey timeline. "missing" reads as a route that was
 * never on the rail (dashed connector to a faded dot, matching the timeline's
 * own "unreached" styling). "broken" reads as a route that *was* reachable
 * and failed at runtime (solid connector all the way, ending in a dashed red
 * ring instead) — the two failure modes get distinct shapes, not just labels.
 */
export const BrokenRail = ({
    variant = 'missing',
}: {
    variant?: 'missing' | 'broken';
}): ReactNode => {
    const pathname = usePathname();
    const broken = variant === 'broken';

    return (
        <div className="flex items-start">
            <div className="flex flex-col items-center gap-2.5">
                <span className="border-primary flex size-7 shrink-0 items-center justify-center rounded-full border-2">
                    <span className="bg-primary size-2.5 rounded-full" />
                </span>
                <span className="text-xs font-semibold text-white/40">/</span>
            </div>
            <div className="flex h-7 w-14 shrink-0 items-center sm:w-20">
                <div
                    className={
                        broken
                            ? 'border-primary h-0 w-full border-t-2'
                            : 'border-primary/50 h-0 w-full border-t-2 border-dashed'
                    }
                />
            </div>
            <div className="flex flex-col items-center gap-2.5">
                <span
                    className={
                        broken
                            ? 'border-destructive/70 flex size-7 shrink-0 animate-pulse items-center justify-center rounded-full border-2 border-dashed'
                            : 'border-primary/30 flex size-7 shrink-0 items-center justify-center rounded-full border-2'
                    }
                >
                    <span
                        className={
                            broken
                                ? 'bg-destructive/60 size-2.5 rounded-full'
                                : 'bg-primary/35 size-2.5 rounded-full'
                        }
                    />
                </span>
                <span
                    className={
                        broken
                            ? 'text-destructive/70 max-w-32 truncate text-xs font-semibold sm:max-w-48'
                            : 'text-primary/70 max-w-32 truncate text-xs font-semibold sm:max-w-48'
                    }
                >
                    {pathname}
                </span>
            </div>
        </div>
    );
};
