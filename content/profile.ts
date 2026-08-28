import type { Profile } from '@/models/cv';

export const profile: Profile = {
    name: 'Lorenzo Lettieri',
    role: 'Junior Software Engineer',
    location: 'Zurich, Switzerland',
    available: true,
    availableNote: 'Open to good problems',
    headline: 'I build software.',
    intro: 'Four years of apprenticeship at Sunrise, now a Junior Software Engineer there. Frontend, backend, and the cloud in between.',
    profile:
        'Software Engineer with a strong foundation in application development, built through a four-year apprenticeship and continued professional experience at Sunrise GmbH. Experience spans enterprise software, web development, backend systems, cloud technologies, and agile team environments. Brings a practical, curious, and growth-oriented approach to solving technical problems and building useful digital products.',
    email: 'me@lore-le.ch',
    languages: ['German', 'Italian', 'English'],
    links: [
        {
            label: 'GitHub',
            handle: 'github.com/llettieri',
            href: 'https://github.com/llettieri',
            icon: 'github',
        },
        {
            label: 'LinkedIn',
            handle: 'linkedin.com/in/lore-le',
            href: 'https://linkedin.com/in/lore-le',
            icon: 'linkedin',
        },
    ],
    portrait: 'portrait/me.png',
};
