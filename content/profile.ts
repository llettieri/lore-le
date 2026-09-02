import type { Profile } from '@/models/cv';

export const profile: Profile = {
    name: 'Lorenzo Lettieri',
    role: 'Junior Software Engineer',
    location: 'Zurich, Switzerland',
    catchPhrase: 'I build more than ' + '\n' + 'just software.',
    intro: 'Four years of apprenticeship at Sunrise, now a Junior Software Engineer there. Frontend, backend, and the cloud in between.',
    professionalHighlights: {
        moreLabel: 'Skills & quick facts',
        chips: [
            { icon: '🛠️', label: 'Backend systems' },
            { icon: '☁️', label: 'Cloud & Orchestration' },
            { icon: '🔌', label: 'APIs & messaging' },
        ],
        facts: [
            { label: 'Experience', value: '4y' },
            { label: 'Teams', value: '3' },
            { label: 'Company', value: '1' },
        ],
    },
    personal: {
        catchPhrase: 'Music, keys, ' + '\n' + 'and good company.',
        intro: 'Music takes up a lot of my free time, mostly listening. Sometimes playing keyboard on my own. The rest goes to good food, good drinks, and good company.',
        highlights: {
            moreLabel: 'Hobbies & quick facts',
            chips: [
                { icon: '🎵', label: 'Music' },
                { icon: '🎹', label: 'Keyboard' },
                { icon: '🍸', label: 'Dining & bars' },
                { icon: '✈️', label: 'Love to travel' },
            ],
            facts: [
                { label: 'Playing Keyboard', value: '+10y' },
                { label: 'Coffee', value: 'Black' },
                { label: 'Visited Countries', value: '9' },
                { label: 'Favourite Drink', value: 'Gin Tonic' },
            ],
        },
    },
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
