'use client';

import React, { ReactElement } from 'react';
import { Briefcase, ChevronDown, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { RichText } from '@/components/rich-text';
import { baseValues } from '@/content/base-values';
import { t } from '@/content';
import type { HeroHighlights, Profile } from '@/models/cv';
import { cn } from '@/lib/utils';

interface Props {
    ctas: ReactElement;
    profile: Profile;
}

const tabTriggerClassName = cn(
    'text-body-text hover:text-pill-text data-[state=active]:bg-primary data-[state=active]:text-main-background cursor-pointer gap-2.5 rounded-full border-none px-5 py-2.5 text-sm font-bold data-[state=active]:border-none data-[state=active]:shadow-none',
);

const Highlights = ({
    highlights,
}: {
    highlights: HeroHighlights;
}): ReactElement => (
    <Collapsible className="mt-8">
        <CollapsibleTrigger className="group/more text-meta hover:text-pill-text mt-4.5 inline-flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.03em] uppercase transition-colors">
            {t(highlights.moreLabel)}
            <ChevronDown
                className="h-3 w-3 transition-transform group-data-[state=open]/more:rotate-180"
                aria-hidden="true"
            />
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden pt-3.5">
            <div className="mb-3 flex flex-wrap gap-2">
                {highlights.chips.map((chip, i) => (
                    <span
                        key={i}
                        className="border-primary/20 bg-primary/8 text-pill-text inline-flex items-center gap-1.5 rounded-full border px-3 py-1.25 text-xs font-bold"
                    >
                        <span aria-hidden="true">{chip.icon}</span>
                        {t(chip.label)}
                    </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-5">
                {highlights.facts.map((fact, i) => (
                    <div key={i}>
                        <p className="text-[15px] font-black text-white">
                            {t(fact.value)}
                        </p>
                        <p className="text-meta text-[10px] font-bold tracking-[0.04em] uppercase">
                            {t(fact.label)}
                        </p>
                    </div>
                ))}
            </div>
        </CollapsibleContent>
    </Collapsible>
);

export const HeroModeToggle = ({ ctas, profile }: Props): ReactElement => (
    <Tabs defaultValue="professional" className="gap-0">
        <TabsList className="h-auto gap-2 rounded-full border border-white/10 bg-white/6 p-2">
            <TabsTrigger value="professional" className={tabTriggerClassName}>
                <Briefcase className="h-5.5 w-5.5" aria-hidden="true" />
                {t(baseValues.heroProfessionalTabLabel)}
            </TabsTrigger>
            <TabsTrigger value="personal" className={tabTriggerClassName}>
                <Sparkles className="h-5.5 w-5.5" aria-hidden="true" />
                {t(baseValues.heroPersonalTabLabel)}
            </TabsTrigger>
        </TabsList>

        <TabsContent value="professional" className="mt-5">
            <div className="animate-in fade-in-0 slide-in-from-bottom-2 flex min-h-92 flex-col justify-center duration-300 ease-out">
                <h1 className="mb-5 text-[68px] leading-[1.02] tracking-[-0.03em] whitespace-pre-line text-white">
                    <RichText text={t(baseValues.welcomeText)} />
                    <br />
                    <RichText text={t(profile.catchPhrase)} />
                </h1>
                <p className="text-body-text line-clamp-4 max-w-[44ch] text-[19px] leading-[1.65] text-pretty">
                    {t(profile.intro)}
                </p>
            </div>
            {ctas}
            <Highlights highlights={profile.professionalHighlights} />
        </TabsContent>

        <TabsContent value="personal" className="mt-5">
            <div className="animate-in fade-in-0 slide-in-from-bottom-2 flex min-h-92 flex-col justify-center duration-300 ease-out">
                <h1 className="mb-5 text-[68px] leading-[1.02] tracking-[-0.03em] whitespace-pre-line text-white">
                    <RichText text={t(baseValues.welcomeText)} />
                    <br />
                    <RichText text={t(profile.personal.catchPhrase)} />
                </h1>
                <p className="text-body-text line-clamp-4 max-w-[44ch] text-[19px] leading-[1.65] text-pretty">
                    {t(profile.personal.intro)}
                </p>
            </div>
            {ctas}
            <Highlights highlights={profile.personal.highlights} />
        </TabsContent>
    </Tabs>
);
