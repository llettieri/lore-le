import type { Localized, TimelineEntry } from '@/models/cv';

/**
 * Chronological, oldest first. Add a stop: one entry.
 * `tools` are slugs from toolbox.ts — validated by scripts/validate-content.ts.
 * Short rotations live as `phases` inside their parent stop rather than as
 * their own stops, so the rail stays readable.
 * Dates from LinkedIn; 6 years 1 month at Sunrise GmbH as of Aug 2026.
 */
export const timeline: TimelineEntry[] = [
    {
        id: 'apprenticeship',
        kind: 'job',
        railLabel: '2020',
        railTitle: 'Apprenticeship begins',
        title: 'Lernender Informatiker Applikationsentwicklung',
        org: 'Sunrise GmbH · Hybrid',
        period: 'Aug 2020 – Aug 2024 · 4 yrs 1 mo',
        from: '2020-08',
        to: '2024-08',
        summary:
            'A four-year apprenticeship in application development with structured exposure to multiple technical departments. Worked in agile settings and developed a broad technical base across three internal rotations.',
        summaryShort:
            'Four-year apprenticeship in application development with structured exposure to multiple technical departments.',
        tools: [
            'typescript',
            'graphql',
            'react',
            'react-native',
            'python',
            'rabbitmq',
        ],
        /** The three rotations render nested inside this stop. */
        phases: [
            {
                title: 'IT Platform Delivery / Service Delivery',
                period: 'Aug 2021 – Jan 2023 · 1 yr 6 mos',
                from: '2021-08',
                to: '2023-01',
                summary:
                    'During my apprenticeship in this team I had the opportunity to learn a lot of technologies and stacks. The main focus was on developing an enterprise application for the technicians.',
                tools: ['typescript', 'graphql'],
            },
            {
                title: 'Web Developer — Wilmaa / YalloTV',
                period: 'Jan 2023 – Oct 2023 · 10 mos',
                from: '2023-01',
                to: '2023-10',
                summary:
                    'In this team I worked as a Frontend Developer, with the focus on web. My main tasks were working on the YalloTV web and sometimes also mobile application. I worked in an agile team.',
                tools: ['react', 'react-native'],
            },
            {
                title: 'Backend Developer — Wilmaa / YalloTV',
                period: 'Oct 2023 – Jul 2024 · 10 mos',
                from: '2023-10',
                to: '2024-07',
                summary:
                    'After my Frontend Developer perspective, I decided to take a look at the Backend world. In my last year of apprenticeship I learned a lot about the different technologies used by the Wilmaa Backend Team.',
                tools: ['python', 'rabbitmq'],
            },
        ],
        highlights: [
            'Completed a four-year apprenticeship in application development with structured exposure to multiple technical departments.',
            'Built practical experience across enterprise platforms, web applications, and backend services.',
        ],
    },
    {
        id: 'vet-diploma',
        kind: 'education',
        railLabel: '2024',
        railTitle: 'Diploma, ranked',
        title: 'Federal VET Diploma, Computer Science',
        org: 'Berufsbildungsschule Winterthur · grade 5.5',
        period: 'Aug 2020 – Jul 2024',
        from: '2020-08',
        to: '2024-07',
        summary:
            'Specialization in application development, alongside the Vocational Baccalaureate. Finished ICT Berufsabschluss im Rang 2024, after competing in the SwissSkills ICT Championship 2023.',
        tools: [],
    },
    {
        id: 'junior-engineer',
        kind: 'job',
        railLabel: 'Now',
        railTitle: 'Junior Software Engineer',
        title: 'Junior Software Engineer — Wilmaa',
        org: 'Sunrise GmbH · Zurich, Switzerland · Hybrid',
        period: 'Aug 2024 – Present',
        from: '2024-08',
        summary:
            'Continued at Sunrise after the apprenticeship in a full professional software engineering role, building on previous cross-team development experience across frontend, backend, and platform-focused work.',
        summaryShort:
            'Full professional software engineering role in a hybrid environment, across frontend, backend, and platform-focused work.',
        tools: ['typescript', 'python', 'googlecloud', 'kubernetes'],
        highlights: [
            'Continued at Sunrise after the apprenticeship in a full professional software engineering role.',
            'Applies knowledge gained across frontend, backend, and platform-focused work.',
        ],
    },
];

export const visibleTimeline = (): TimelineEntry[] =>
    timeline.filter((e) => !e.hidden);

/** Site copy is long; the PDF handout uses the short form where one exists. */
export const printSummary = (e: TimelineEntry): Localized<string> =>
    e.summaryShort ?? e.summary;
