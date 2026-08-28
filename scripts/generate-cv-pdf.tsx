import { renderToFile } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
    byKind,
    printPhaseSummary,
    printSkills,
    profile,
    t,
    visibleTimeline,
} from '@/content';
import { CvDocument } from '@/lib/cv-pdf/document';
import type {
    CertificationView,
    EducationView,
    JobView,
    RecognitionView,
} from '@/lib/cv-pdf/types';
import { IMGIX_URL } from '@/lib/image-loader/imgix';

dayjs.extend(customParseFormat);

const formatDate = (iso: string): string =>
    dayjs(iso, 'YYYY-MM').format('MMM YYYY');

const portraitUrl = (src: string): string =>
    `${IMGIX_URL}${src}?auto=format&fit=crop&crop=faces&w=300&h=300&q=80`;

async function main(): Promise<void> {
    const jobs: JobView[] = visibleTimeline()
        .filter((entry) => entry.kind === 'job')
        .sort((a, b) => b.from.localeCompare(a.from))
        .map((entry) => ({
            id: entry.id,
            title: t(entry.title),
            org: t(entry.org),
            period: t(entry.period),
            highlights: (entry.highlights ?? []).map((h) => t(h)),
            phases: (entry.phases ?? []).map((phase) => ({
                title: t(phase.title),
                summaryShort: t(printPhaseSummary(phase)),
            })),
        }));

    const education: EducationView[] = byKind('diploma').map((c) => ({
        id: c.id,
        title: t(c.title),
        issuer: c.issuer,
        date: formatDate(c.date),
        grade: c.grade,
    }));

    const certifications: CertificationView[] = byKind('certification').map(
        (c) => ({
            id: c.id,
            title: t(c.title),
            issuer: c.issuer,
            date: formatDate(c.date),
        }),
    );

    const awards: RecognitionView[] = byKind('award').map((c) => ({
        id: c.id,
        title: t(c.title),
        issuer: c.issuer,
    }));

    const linkedin = profile.links.find((link) => link.label === 'LinkedIn');

    const contactRows = [
        { label: 'Location', value: profile.location },
        ...(profile.phone ? [{ label: 'Phone', value: profile.phone }] : []),
        { label: 'Email', value: profile.email },
        ...(linkedin ? [{ label: 'LinkedIn', value: linkedin.handle }] : []),
        { label: 'Languages', value: profile.languages.join(', ') },
    ];

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
            profileSummary={t(profile.profile)}
            education={education}
            jobs={jobs}
            skills={printSkills}
            certifications={certifications}
            awards={awards}
            contactRows={contactRows}
        />,
        './public/cv.pdf',
    );

    console.log('Generated public/cv.pdf');
}

main().catch((error: unknown) => {
    console.error('Failed to generate public/cv.pdf');
    console.error(error);
    process.exit(1);
});
