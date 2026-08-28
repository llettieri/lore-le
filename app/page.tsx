import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, { ReactNode } from 'react';
import {
    byKind,
    credentials,
    profile,
    t,
    toolRow,
    visibleTimeline,
} from '@/content';
import { JourneyTimeline } from '@/components/journey-timeline';
import { ToolboxMarquee } from '@/components/toolbox-marquee';
import type { Credential } from '@/models/cv';

dayjs.extend(customParseFormat);

const formatCredentialDate = (iso: string): string =>
    dayjs(iso, 'YYYY-MM').format('MMM YYYY');

const featuredCardClassName = (kind: Credential['kind']): string =>
    kind === 'award'
        ? 'border-primary/20 bg-primary/[0.08] rounded-[14px] border p-5'
        : 'rounded-[14px] border border-white/[0.09] bg-white/[0.03] p-5';

export default function Home(): ReactNode {
    const timeline = visibleTimeline();
    const featuredCredentials = credentials.filter((c) => c.featured);
    const certifications = byKind('certification');

    return (
        <div className="-m-5 sm:-m-10">
            <section
                id="about"
                className="relative overflow-hidden px-13 pt-19 pb-21"
            >
                <div
                    className="pointer-events-none absolute -top-45 -left-30 h-160 w-160 rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(23,167,235,0.14), transparent 65%)',
                    }}
                />
                <div className="relative grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_300px]">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2.25 rounded-[20px] border border-[rgba(23,167,235,0.25)] bg-[rgba(23,167,235,0.12)] py-1.5 pr-3.5 pl-2.5">
                            <span className="bg-live-dot h-1.75 w-1.75 rounded-full" />
                            <span className="text-pill-text text-[12.5px] font-bold">
                                {t(profile.availableNote ?? '')}
                            </span>
                        </div>
                        <h1 className="mb-5 text-[68px] leading-[1.02] font-extralight tracking-[-0.03em] text-white">
                            Hi, I&apos;m{' '}
                            <span className="text-primary font-black">
                                Lorenzo
                            </span>
                            .
                            <br />
                            {t(profile.headline)}
                        </h1>
                        <p className="text-body-text mb-8 max-w-[44ch] text-[19px] leading-[1.65] text-pretty">
                            {t(profile.intro)}
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="hover:bg-primary-tint bg-primary text-main-background rounded-[30px] px-6.5 py-3.5 text-[15px] font-extrabold transition-colors"
                            >
                                Get in touch
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="hover:border-primary hover:text-primary text-pill-outline-text rounded-[30px] border border-white/20 px-6.5 py-3.5 text-[15px] font-bold transition-colors"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="flex aspect-square items-center justify-center rounded-full border border-[rgba(23,167,235,0.3)]"
                            style={{
                                background:
                                    'repeating-linear-gradient(135deg, rgba(23,167,235,0.14) 0 8px, rgba(23,167,235,0.04) 8px 16px)',
                            }}
                        >
                            <span className="text-muted-deep text-center font-mono text-[11px] leading-[1.6] font-semibold">
                                portrait
                                <br />
                                (or nothing)
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="toolbox" className="pb-13">
                <div className="px-13 pb-6.5">
                    <p className="text-primary text-[15px] font-black tracking-[0.02em]">
                        Toolbox
                    </p>
                    <p className="text-muted-foreground mt-1.25 text-[15px]">
                        Languages, frameworks and platforms I&apos;ve shipped
                        with.
                    </p>
                </div>
                <div className="flex flex-col gap-3.5">
                    <ToolboxMarquee
                        tools={toolRow(1)}
                        direction="left"
                        duration={34}
                    />
                    <ToolboxMarquee
                        tools={toolRow(2)}
                        direction="right"
                        duration={40}
                    />
                </div>
            </section>

            <section
                id="journey"
                className="bg-background-alt px-13 pt-19 pb-20"
            >
                <div className="mb-11">
                    <p className="text-primary text-[15px] font-black tracking-[0.02em]">
                        Journey
                    </p>
                    <h2 className="mt-2 text-[42px] leading-tight font-extralight tracking-tight text-white">
                        Six years, one company,{' '}
                        <span className="font-black">three teams</span>.
                    </h2>
                    <p className="text-muted-foreground mt-3 text-[15.5px]">
                        Pick a stop on the line.
                    </p>
                </div>
                <JourneyTimeline entries={timeline} />
            </section>

            <section id="certifications" className="px-13 pt-19 pb-21">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div>
                        <p className="text-primary text-[15px] font-black tracking-[0.02em]">
                            Certifications &amp; awards
                        </p>
                        <h2 className="mt-2 mb-8 text-[42px] leading-tight font-extralight tracking-tight text-white">
                            Certified, and{' '}
                            <span className="font-black">ranked</span>.
                        </h2>
                        <div className="flex flex-col gap-3">
                            {featuredCredentials.map((c) => (
                                <div
                                    key={c.id}
                                    className={featuredCardClassName(c.kind)}
                                >
                                    <p className="text-[15px] font-extrabold">
                                        {t(c.title)}
                                    </p>
                                    <p className="text-muted-foreground mt-1 text-[13px] font-semibold">
                                        {c.issuer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-[11px] font-bold tracking-widest text-white/50">
                            {certifications.length} CERTIFICATIONS
                        </p>
                        <ul>
                            {certifications.map((c, i) => (
                                <li
                                    key={c.id}
                                    className={`flex items-center justify-between py-3.5 ${
                                        i < certifications.length - 1
                                            ? 'border-b border-white/8'
                                            : ''
                                    }`}
                                >
                                    <span className="text-sm font-bold">
                                        {t(c.title)}
                                    </span>
                                    <span className="text-meta text-[12.5px] font-semibold whitespace-nowrap">
                                        {c.issuer} ·{' '}
                                        {formatCredentialDate(c.date)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
