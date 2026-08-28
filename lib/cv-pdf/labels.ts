import type { Locale } from '@/models/cv';
import { defaultLocale } from '@/content';

export interface CvPdfLabels {
    personalDetails: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    languages: string;
    education: string;
    grade: string;
    profile: string;
    experience: string;
    skills: string;
    certifications: string;
    additionalRecognition: string;
}

/**
 * Static UI labels for the CV PDF, per locale. Separate from the
 * Localized<T> content fields (profile/timeline/credentials):
 * fall back to `defaultLocale` when a locale has no entry yet.
 */
const labelsByLocale: Partial<Record<Locale, CvPdfLabels>> = {
    en: {
        personalDetails: 'Personal Details',
        location: 'Location',
        phone: 'Phone',
        email: 'Email',
        linkedin: 'LinkedIn',
        languages: 'Languages',
        education: 'Education',
        grade: 'Grade',
        profile: 'Profile',
        experience: 'Experience',
        skills: 'Skills',
        certifications: 'Certifications',
        additionalRecognition: 'Additional Recognition',
    },
};

export const cvPdfLabels = (locale: Locale): CvPdfLabels =>
    labelsByLocale[locale] ??
    labelsByLocale[defaultLocale] ??
    (Object.values(labelsByLocale)[0] as CvPdfLabels);
