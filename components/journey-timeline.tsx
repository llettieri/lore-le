'use client';

import React, { ReactElement, useState } from 'react';
import type { TimelineEntry } from '@/models/cv';
import { t } from '@/content/i18n';
import { toolBySlug } from '@/content/toolbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Horizontal rail + summary panel. Reads the array it is given, so the
 * number of stops, their labels and their order all come from content.
 */
export const JourneyTimeline = ({
    entries,
}: {
    entries: TimelineEntry[];
}): ReactElement => {
    const [activeId, setActiveId] = useState(entries[entries.length - 1].id);
    const activeIndex = entries.findIndex((e) => e.id === activeId);
    const entry = entries[activeIndex];
    const progress = (activeIndex / Math.max(entries.length - 1, 1)) * 100;

    return (
        <Tabs value={activeId} onValueChange={setActiveId} className="gap-0">
            <div className="relative mb-11">
                <div className="bg-primary/20 absolute inset-x-0 top-3.5 h-0.5" />
                <div
                    className="bg-primary absolute top-3.5 left-0 h-0.5 transition-[width] duration-400"
                    style={{ width: `${progress}%` }}
                />
                <TabsList
                    variant="line"
                    className="relative h-auto w-full items-start justify-between gap-0 rounded-none p-0 group-data-horizontal/tabs:h-auto"
                >
                    {entries.map((e, i) => {
                        const past = i <= activeIndex;
                        return (
                            <TabsTrigger
                                key={e.id}
                                value={e.id}
                                className="h-auto w-37.5 flex-none flex-col gap-3.5 rounded-none border-none p-0 text-center after:hidden"
                            >
                                <span
                                    className={`flex size-7 items-center justify-center rounded-full border-2 transition ${past ? 'border-primary' : 'border-primary/30'} ${i === activeIndex ? 'bg-primary/20' : ''}`}
                                >
                                    <span
                                        className={`size-2.5 rounded-full transition ${past ? 'bg-primary' : 'bg-primary/35'}`}
                                    />
                                </span>
                                <span>
                                    <span className="text-foreground block text-sm font-extrabold">
                                        {e.railLabel}
                                    </span>
                                    <span className="block text-xs font-semibold text-white/60">
                                        {t(e.railTitle)}
                                    </span>
                                </span>
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
            </div>

            <TabsContent
                value={activeId}
                className="border-primary/20 from-primary/10 mx-auto max-w-7xl rounded-3xl border bg-linear-160 to-transparent p-10"
            >
                <div className="grid grid-cols-1 gap-13 md:grid-cols-[1fr_260px]">
                    <div>
                        <p className="text-primary mb-2.5 text-[13px] font-bold">
                            {t(entry.period)}
                        </p>
                        <h4 className="mb-1 text-3xl wrap-break-word">
                            {t(entry.title)}
                        </h4>
                        <p className="mb-5 font-semibold text-white/60">
                            {t(entry.org)}
                        </p>
                        <p className="max-w-[62ch] text-base/relaxed text-pretty text-white/80">
                            {t(entry.summary)}
                        </p>
                        {entry.phases && (
                            <div className="mt-7.5">
                                <p className="mb-4 text-[11px] font-bold tracking-widest text-white/50">
                                    {entry.phases.length} ROTATIONS
                                </p>
                                <ol className="border-primary/30 relative ml-1 border-l pl-6.5">
                                    {entry.phases.map((phase) => (
                                        <li
                                            key={String(phase.title)}
                                            className="relative last:pb-0"
                                        >
                                            <span className="border-primary bg-main-background absolute top-1.5 -left-8 size-2.5 rounded-full border-2" />
                                            <p className="mb-1.5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
                                                <span className="text-[15px] font-extrabold wrap-break-word">
                                                    {t(phase.title)}
                                                </span>
                                                <span className="text-[12.5px] font-semibold text-white/50">
                                                    {t(phase.period)}
                                                </span>
                                                <span className="text-primary text-[12.5px] font-semibold">
                                                    {(phase.tools ?? [])
                                                        .map(
                                                            (s) =>
                                                                toolBySlug.get(
                                                                    s,
                                                                )?.name ?? s,
                                                        )
                                                        .join(' · ')}
                                                </span>
                                            </p>
                                            <p className="max-w-[64ch] text-[14.5px]/relaxed text-pretty whitespace-pre-line text-white/70">
                                                {t(phase.summary)}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                    {entry.tools.length > 0 && (
                        <div>
                            <p className="mb-3 text-[11px] font-bold tracking-widest text-white/50">
                                WORKED WITH
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {entry.tools.map((slug) => (
                                    <li
                                        key={slug}
                                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-bold"
                                    >
                                        {toolBySlug.get(slug)?.name ?? slug}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    );
};
