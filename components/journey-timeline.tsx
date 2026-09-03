'use client';

import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import type { TimelineEntry, TimelinePhase } from '@/models/cv';
import { t } from '@/content/i18n';
import { toolBySlug } from '@/content/toolbox';
import { baseValues } from '@/content/base-values';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * One rail stop: the dot and label, plus the connector reaching to the next
 * stop. `index`/`count` drive the past/future coloring and the transparent
 * stub at each end of the rail.
 */
const RailStop = ({
    entry,
    index,
    activeIndex,
    count,
    triggerRef,
}: {
    entry: TimelineEntry;
    index: number;
    activeIndex: number;
    count: number;
    triggerRef: React.Ref<HTMLButtonElement>;
}): ReactNode => {
    const past = index <= activeIndex;

    return (
        <Fragment>
            <TabsTrigger
                ref={triggerRef}
                value={entry.id}
                className="h-auto w-37.5 flex-none scroll-ml-13 flex-col gap-3.5 rounded-none border-none p-0 text-center after:hidden"
            >
                <span className="flex w-full items-center">
                    <span
                        className={`h-0.5 flex-1 transition-colors duration-400 ${index === 0 ? 'bg-transparent' : past ? 'bg-primary' : 'bg-primary/20'}`}
                    />
                    <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 transition ${past ? 'border-primary' : 'border-primary/30'} ${index === activeIndex ? 'bg-primary/20' : ''}`}
                    >
                        <span
                            className={`size-2.5 rounded-full transition ${past ? 'bg-primary' : 'bg-primary/35'}`}
                        />
                    </span>
                    <span
                        className={`h-0.5 flex-1 transition-colors duration-400 ${index === count - 1 ? 'bg-transparent' : index < activeIndex ? 'bg-primary' : 'bg-primary/20'}`}
                    />
                </span>
                <span>
                    <span className="text-foreground block text-sm font-extrabold">
                        {entry.railLabel}
                    </span>
                    <span className="block text-xs font-semibold whitespace-break-spaces text-white/60">
                        {t(entry.railTitle)}
                    </span>
                </span>
            </TabsTrigger>
            {index < count - 1 && (
                <div
                    aria-hidden
                    className="flex h-7 w-6 shrink-0 items-center md:w-auto md:flex-1"
                >
                    <div
                        className={`h-0.5 w-full transition-colors duration-400 ${index < activeIndex ? 'bg-primary' : 'bg-primary/20'}`}
                    />
                </div>
            )}
        </Fragment>
    );
};

/** The rotation phases nested under a timeline entry, as their own mini sub-timeline. */
const PhaseTimeline = ({ phases }: { phases: TimelinePhase[] }): ReactNode => (
    <ol className="border-primary/30 relative ml-1 border-l pl-6.5">
        {phases.map((phase) => (
            <li key={String(phase.title)} className="relative mt-4 last:pb-0">
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
                            .map((s) => toolBySlug.get(s)?.name ?? s)
                            .join(' · ')}
                    </span>
                </p>
                <p className="max-w-[64ch] text-[14.5px]/relaxed text-pretty whitespace-pre-line text-white/70">
                    {t(phase.summary)}
                </p>
            </li>
        ))}
    </ol>
);

/**
 * Horizontal rail + summary panel. Reads the array it is given, so the
 * number of stops, their labels and their order all come from content.
 */
export const JourneyTimeline = ({
    entries,
}: {
    entries: TimelineEntry[];
}): ReactNode => {
    const [activeId, setActiveId] = useState(entries[entries.length - 1].id);
    const activeIndex = entries.findIndex((e) => e.id === activeId);
    const entry = entries[activeIndex];

    const activeTriggerRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        activeTriggerRef.current?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    }, [activeId]);

    return (
        <Tabs value={activeId} onValueChange={setActiveId} className="gap-0">
            <div className="no-scrollbar -mx-13 mb-11 overflow-x-auto px-13 pb-1 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
                <TabsList
                    variant="line"
                    className="w-max min-w-full items-start gap-0 rounded-none p-0 group-data-horizontal/tabs:h-auto md:w-full"
                >
                    {entries.map((e, i) => (
                        <RailStop
                            key={e.id}
                            entry={e}
                            index={i}
                            activeIndex={activeIndex}
                            count={entries.length}
                            triggerRef={
                                i === activeIndex ? activeTriggerRef : null
                            }
                        />
                    ))}
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
                        <h3 className="mb-1 text-3xl wrap-break-word">
                            {t(entry.title)}
                        </h3>
                        <p className="mb-5 font-semibold text-white/60">
                            {t(entry.org)}
                        </p>
                        <p className="max-w-[62ch] text-base/relaxed text-pretty text-white/80">
                            {t(entry.summary)}
                        </p>
                        {entry.phases && (
                            <div className="mt-7.5">
                                <p className="mb-4 text-[15px] font-bold tracking-widest text-white/50">
                                    {entry.phases.length}{' '}
                                    {t(baseValues.rotationsTerm)}
                                </p>
                                <PhaseTimeline phases={entry.phases} />
                            </div>
                        )}
                    </div>
                    {entry.tools.length > 0 && (
                        <div>
                            <p className="mb-3 text-[11px] font-bold tracking-widest text-white/50">
                                {t(baseValues.workedWithLabel)}
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
