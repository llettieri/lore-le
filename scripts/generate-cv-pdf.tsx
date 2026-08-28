/* eslint-disable no-console */
import { renderToFile } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
    byKind,
    defaultLocale,
    locales,
    printPhaseSummary,
    printSkills,
    profile,
    t,
    visibleTimeline,
} from '@/content';
import { CvDocument } from '@/lib/cv-pdf/document';
import { cvPdfLabels } from '@/lib/cv-pdf/labels';
import type {
    CertificationView,
    EducationView,
    JobView,
    RecognitionView,
} from '@/lib/cv-pdf/types';
import { IMGIX_URL } from '@/lib/image-loader/imgix';
import type { Locale } from '@/models/cv';

dayjs.extend(customParseFormat);

const formatDate = (iso: string): string =>
    dayjs(iso, 'YYYY-MM').format('MMM YYYY');

const portraitUrl = (src: string): string =>
    `${IMGIX_URL}${src}?auto=format&fit=crop&crop=faces&w=300&h=300&q=80`;

const outputPath = (locale: Locale): string =>
    locale === defaultLocale ? './public/cv.pdf' : `./public/cv-${locale}.pdf`;

/** dayjs ships one locale file per supported language, keyed the same as our Locale type. */
const setDayjsLocale = async (locale: Locale): Promise<void> => {
    if (locale !== defaultLocale) {
        await import(`dayjs/locale/${locale}.js`);
    }
    dayjs.locale(locale);
};

async function generateForLocale(locale: Locale): Promise<void> {
    await setDayjsLocale(locale);
    const labels = cvPdfLabels(locale);

    const jobs: JobView[] = visibleTimeline()
        .filter((entry) => entry.kind === 'job')
        .sort((a, b) => b.from.localeCompare(a.from))
        .map((entry) => ({
            id: entry.id,
            title: t(entry.title, locale),
            org: t(entry.org, locale),
            period: t(entry.period, locale),
            highlights: (entry.highlights ?? []).map((h) => t(h, locale)),
            phases: (entry.phases ?? []).map((phase) => ({
                title: t(phase.title, locale),
                summaryShort: t(printPhaseSummary(phase), locale),
            })),
        }));

    const education: EducationView[] = byKind('diploma').map((c) => ({
        id: c.id,
        title: t(c.title, locale),
        issuer: c.issuer,
        date: formatDate(c.date),
        grade: c.grade,
    }));

    const certifications: CertificationView[] = byKind('certification').map(
        (c) => ({
            id: c.id,
            title: t(c.title, locale),
            issuer: c.issuer,
            date: formatDate(c.date),
        }),
    );

    const awards: RecognitionView[] = byKind('award').map((c) => ({
        id: c.id,
        title: t(c.title, locale),
        issuer: c.issuer,
    }));

    const linkedin = profile.links.find((link) => link.label === 'LinkedIn');

    const contactRows = [
        { label: labels.location, value: profile.location },
        ...(profile.phone
            ? [{ label: labels.phone, value: profile.phone }]
            : []),
        { label: labels.email, value: profile.email },
        ...(linkedin
            ? [{ label: labels.linkedin, value: linkedin.handle }]
            : []),
        { label: labels.languages, value: profile.languages.join(', ') },
    ];

    const path = outputPath(locale);

    await renderToFile(
        <CvDocument
            name={profile.name}
            role={profile.role}
            location={profile.location}
            phone={profile.phone}
            email={profile.email}
            linkedinHandle={linkedin?.handle}
            languages={profile.languages.join(', ')}
            portraitUrl={
                profile.portrait ? portraitUrl(profile.portrait) : undefined
            }
            profileSummary={t(profile.profile, locale)}
            education={education}
            jobs={jobs}
            skills={printSkills}
            certifications={certifications}
            awards={awards}
            contactRows={contactRows}
            labels={labels}
        />,
        path,
    );

    console.log(`Generated ${path}`);
}

async function main(): Promise<void> {
    for (const locale of locales) {
        await generateForLocale(locale);
    }
}

main().catch((error: unknown) => {
    console.error('Failed to generate CV PDF(s)');
    console.error(error);
    process.exit(1);
});
