import type { Localized, TimelineEntry, TimelinePhase } from '@/models/cv';

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
        title: 'Application Development Apprentice',
        org: 'Sunrise GmbH · Zurich, Switzerland · Hybrid',
        period: 'Aug 2020 – Jul 2024 · 4 yrs',
        from: '2020-08',
        to: '2024-07',
        summary:
            'A four-year apprenticeship in application development with structured exposure to multiple technical departments. Worked in agile settings and developed a broad technical base across three internal rotations.',
        summaryShort:
            'A four-year apprenticeship in application development with structured exposure to multiple technical departments. Worked in agile settings and developed a broad technical base across three internal rotations.',
        tools: [],
        /** The three rotations render nested inside this stop. */
        phases: [
            {
                title: 'IT Platform Delivery / Service Delivery',
                period: 'Aug 2021 – Jan 2023 · 1 yr 6 mos',
                from: '2021-08',
                to: '2023-01',
                summary:
                    'During my apprenticeship in this team I had the opportunity to learn a lot of technologies and stacks. The main focus was on developing an enterprise application for the technicians, to debug our HFC-Network in Switzerland. With that I was able to learn a lot about the HFC-Network at Sunrise and also developing an actual application, which is used by other teams.\n' +
                    '\n' +
                    'Main points:\n' +
                    '- Communication between teams (customers)\n' +
                    '- Agile development\n' +
                    '- Fullstack development (SpringBoot and Angular)\n' +
                    '- Planing and implementation of Use-Cases',
                summaryShort:
                    'During my apprenticeship in this team I had the opportunity to learn a lot of technologies and stacks. The main focus was on developing an enterprise application for the technicians, to debug our HFC-Network in Switzerland. With that I was able to learn a lot about the HFC-Network at Sunrise and also developing an actual application, which is used by other teams.\n',
                tools: [
                    'typescript',
                    'angular',
                    'java',
                    'spring-boot',
                    'graphql',
                    'grpc',
                ],
            },
            {
                title: 'Web Developer — Wilmaa / YalloTV',
                period: 'Jan 2023 – Oct 2023 · 10 mos',
                from: '2023-01',
                to: '2023-10',
                summary:
                    "In this team I worked as a Frontend Developer, with the focus on web. My main tasks were working on the YalloTV web and sometimes also mobile application. I worked in an agile team and therefore it was product oriented. One of the big features, in which I contributed was the new search for YalloTV. Most of the services used were on AWS, and with that I also learned a lot how AWS works and how it's used.\n" +
                    '\n' +
                    'Main points:\n' +
                    '- Open communication between technology teams (Backend, Android TV, Apple TV)\n' +
                    '- Agile development\n' +
                    '- Web development (React.JS, React Native)\n' +
                    '- Planing, prioritise and estimating stories',
                summaryShort:
                    "In this team I worked as a Frontend Developer, with the focus on web. My main tasks were working on the YalloTV web and sometimes also mobile application. I worked in an agile team and therefore it was product oriented. One of the big features, in which I contributed was the new search for YalloTV. Most of the services used were on AWS, and with that I also learned a lot how AWS works and how it's used.\n",
                tools: ['typescript', 'react', 'react-native'],
            },
            {
                title: 'Backend Developer — Wilmaa / YalloTV',
                period: 'Oct 2023 – Jul 2024 · 10 mos',
                from: '2023-10',
                to: '2024-07',
                summary:
                    'After my Frontend Developer perspective, I decided to take a look at the Backend world. In my last year of apprenticeship I learned a lot about the different technologies used by the Wilmaa Backend Team, and I was also able to create a first version of a new Search-Service with AWS Opensearch as a Search-Engine/DB. I was mainly involved in YalloTV tasks but I also worked on some MySports topics. In addition to that I also learned a lot more about AWS with the focus on the networking part.\n' +
                    '\n' +
                    'Main points:\n' +
                    '- Open communication to the clients (Frontend Developers)\n' +
                    '- DevOps\n' +
                    '- Developing microservices (FastAPI)\n' +
                    '- Network security (AWS WAF)\n' +
                    '- Load Balancing (AWS LoadBalancer)\n' +
                    '- Serving services for the clients',
                summaryShort:
                    'I expanded from frontend into backend work, with exposure to Python and event-driven communications. Contributed to the yallo TV platform and also some MySports features. Additionally deep dived in various AWS and GCP services.',
                tools: [
                    'python',
                    'fastapi',
                    'flask',
                    'rabbitmq',
                    'redis',
                    'mongodb',
                    'grpc',
                ],
            },
        ],
        highlights: [
            'Completed a four-year apprenticeship in application development with structured exposure to multiple technical departments.',
            'Worked in agile settings and developed a broad technical base during several internal rotations.',
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
            'Continued at Sunrise after the apprenticeship in a full professional software engineering role, building on previous cross-team development experience with the focus on backend and platform-focused work.',
        summaryShort:
            'Full professional software engineering role in a hybrid environment with the focus on backend and platform-focused work.',
        tools: [
            'python',
            'fastapi',
            'flask',
            'rabbitmq',
            'redis',
            'mongodb',
            'grpc',
        ],
        highlights: [
            'Continued at Sunrise after the apprenticeship in a full professional software engineering role.',
            'Contributes to software engineering work in a hybrid environment while building on previous cross-team development experience',
            'Applies knowledge gained across frontend, backend, and platform-focused work.',
        ],
    },
];

export const visibleTimeline = (): TimelineEntry[] =>
    timeline.filter((e) => !e.hidden);

export const printSummary = (e: TimelineEntry): Localized<string> =>
    e.summaryShort ?? e.summary;

export const printPhaseSummary = (p: TimelinePhase): Localized<string> =>
    p.summaryShort ?? p.summary;
