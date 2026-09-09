import type { Credential } from '@/models/cv';

export const credentials: Credential[] = [
    {
        id: 'ict-rang-2024',
        kind: 'award',
        title: 'ICT Berufsabschluss im Rang 2024',
        issuer: 'ICT-Berufsbildung Schweiz',
        date: '2024-07',
        artifactUrl: 'https://lore-le.ch/media/cert/Auszeichnung-ZLI.pdf',
        featured: true,
    },
    {
        id: 'swissskills-2023',
        kind: 'award',
        title: 'SwissSkills – ICT Championship 2023',
        issuer: 'ICT-Berufsbildung Schweiz',
        date: '2023-09',
        artifactUrl:
            'https://lore-le.ch/media/cert/swissskills2023%20participation%20confirmation.pdf',
        featured: true,
    },
    {
        id: 'vet-diploma',
        kind: 'diploma',
        title: 'Federal VET Diploma — Computer Science',
        issuer: 'Berufsbildungsschule Winterthur',
        date: '2024-07',
        grade: '5.5',
        featured: true,
    },
    {
        id: 'vocational-baccalaureate',
        kind: 'diploma',
        title: 'Vocational Baccalaureate',
        issuer: 'Berufsmaturitätsschule Winterthur',
        date: '2024-07',
        grade: '4.7',
    },
    {
        id: 'gc-cloud-architecture',
        kind: 'certification',
        title: 'Cloud Architecture: Design, Implement, and Manage',
        issuer: 'Google',
        date: '2025-07',
        artifactUrl:
            'https://www.credly.com/badges/876a918d-c341-45e3-bdad-85d3565c428b',
    },
    {
        id: 'gc-app-dev-env',
        kind: 'certification',
        title: 'Set Up an App Dev Environment on Google Cloud',
        issuer: 'Google',
        date: '2025-07',
        artifactUrl:
            'https://www.credly.com/badges/d2a5f2c0-f885-456c-857d-9a1d4eecce00',
    },
    {
        id: 'gc-gke-costs',
        kind: 'certification',
        title: 'Optimize Costs for Google Kubernetes Engine',
        issuer: 'Google',
        date: '2025-07',
        artifactUrl:
            'https://www.credly.com/badges/f9a29d33-6779-4012-949a-38a7da5f8a32',
    },
    {
        id: 'gc-cloud-security',
        kind: 'certification',
        title: 'Implement Cloud Security Fundamentals',
        issuer: 'Google',
        date: '2025-06',
        artifactUrl:
            'https://www.credly.com/badges/975a2da2-a4af-421f-89ef-1a857c9094f2',
    },
    {
        id: 'gc-aws-pros',
        kind: 'certification',
        title: 'Build Google Cloud Infrastructure for AWS Professionals',
        issuer: 'Google',
        date: '2025-06',
        artifactUrl:
            'https://www.credly.com/badges/914c3fa7-cf03-4cd2-b25f-4bab66ffc830',
    },
    {
        id: 'rh-do180',
        kind: 'certification',
        title: 'DO180 — Red Hat OpenShift Administration I',
        issuer: 'Red Hat',
        date: '2023-05',
        artifactUrl: 'https://lore-le.ch/media/cert/do180-certificate.pdf',
    },
];

export const byKind = (kind: Credential['kind']): Credential[] =>
    credentials
        .filter((c) => c.kind === kind)
        .sort((a, b) => b.date.localeCompare(a.date));
