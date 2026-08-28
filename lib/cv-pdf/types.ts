export interface ContactRow {
    label: string;
    value: string;
}

export interface PhaseView {
    title: string;
    summaryShort: string;
}

export interface JobView {
    id: string;
    title: string;
    org: string;
    period: string;
    highlights: string[];
    phases: PhaseView[];
}

export interface EducationView {
    id: string;
    title: string;
    issuer: string;
    date: string;
    grade?: string;
}

export interface CertificationView {
    id: string;
    title: string;
    issuer: string;
    date: string;
}

export interface RecognitionView {
    id: string;
    title: string;
    issuer: string;
}

export interface CvPdfProps {
    name: string;
    role: string;
    location: string;
    phone?: string;
    email: string;
    linkedinHandle?: string;
    languages: string;
    portraitUrl?: string;
    profileSummary: string;
    education: EducationView[];
    jobs: JobView[];
    skills: string[];
    certifications: CertificationView[];
    awards: RecognitionView[];
    contactRows: ContactRow[];
}
