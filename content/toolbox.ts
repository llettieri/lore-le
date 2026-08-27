import type { Tool } from '@/models/cv';

/**
 * Add a tool: one entry here + drop public/icons/<slug>.svg.
 * Nothing else to touch — the marquee, the PDF skill list and the
 * per-role tool chips all read this array.
 */
export const tools: Tool[] = [
    {
        slug: 'typescript',
        name: 'TypeScript',
        kind: 'Language',
        row: 1,
        featured: true,
    },
    {
        slug: 'python',
        name: 'Python',
        kind: 'Language',
        row: 1,
        featured: true,
    },
    { slug: 'react', name: 'React', kind: 'Framework', row: 1, featured: true },
    {
        slug: 'nextdotjs',
        name: 'Next.js',
        kind: 'Framework',
        row: 1,
        featured: true,
    },
    { slug: 'react-native', name: 'React Native', kind: 'Framework', row: 1 },
    { slug: 'tailwindcss', name: 'Tailwind CSS', kind: 'Framework', row: 1 },
    { slug: 'graphql', name: 'GraphQL', kind: 'API', row: 1, featured: true },
    {
        slug: 'googlecloud',
        name: 'Google Cloud',
        kind: 'Platform',
        row: 2,
        featured: true,
    },
    {
        slug: 'kubernetes',
        name: 'Kubernetes',
        kind: 'Platform',
        row: 2,
        featured: true,
    },
    { slug: 'redhatopenshift', name: 'OpenShift', kind: 'Platform', row: 2 },
    {
        slug: 'rabbitmq',
        name: 'RabbitMQ',
        kind: 'Messaging',
        row: 2,
        featured: true,
    },
    { slug: 'docker', name: 'Docker', kind: 'Tooling', row: 2 },
    { slug: 'git', name: 'Git', kind: 'Tooling', row: 2 },
];

export const toolBySlug = new Map(tools.map((t) => [t.slug, t]));

/**
 * Tools without an explicit `row` are alternated across the two rows,
 * in declaration order, independently of the ones that pin themselves.
 */
const assignedRows: (1 | 2)[] = (() => {
    let next: 1 | 2 = 1;
    return tools.map((t) => {
        if (t.row) return t.row;
        const row = next;
        next = next === 1 ? 2 : 1;
        return row;
    });
})();

export const toolRow = (row: 1 | 2): Tool[] =>
    tools.filter((_, i) => assignedRows[i] === row);
