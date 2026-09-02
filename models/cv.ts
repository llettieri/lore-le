/**
 * Single source of truth for every piece of CV content.
 */

/** Kebab-case id. For tools, it is ALSO the icon filename: public/icons/<slug>.svg */
export type Slug = string;

/** Add a language here first. Everything else keeps compiling. */
export type Locale = 'en' | 'de' | 'it';

/**
 * Any user-visible string.
 */
export type Localized<T> = T | Partial<Record<Locale, T>>;

export interface BaseValues {
    certificationsDescription: Localized<string>;
    certificationsTerm: Localized<string>;
    certificationsTitle: Localized<string>;
    downloadButtonLabel: Localized<string>;
    getInTouchButtonLabel: Localized<string>;
    journeyDescription: Localized<string>;
    journeySubtitle: Localized<string>;
    journeyTitle: Localized<string>;
    toolboxDescription: Localized<string>;
    toolboxTitle: Localized<string>;
    welcomeText: Localized<string>;
}

export interface ProfileLink {
    handle: string; // "GitHub"
    href: string; // "github.com/lore-le" — what is rendered
    icon?: Slug;
    label: string; // public/icons/<slug>.svg
}

export interface Profile {
    available: boolean;
    availableNote?: Localized<string>;
    catchPhrase: Localized<string>;
    email: string;

    intro: Localized<string>;
    languages: string[]; // hero, may contain no markup
    links: ProfileLink[]; // hero paragraph
    location: string; // longer paragraph, used in the PDF
    name: string;
    phone?: string;
    portrait?: string;
    profile: Localized<string>;
    role: string; // /portrait.jpg — omit and the UI shows a placeholder
}

export type ToolKind =
    | 'Language'
    | 'Framework'
    | 'API'
    | 'Platform'
    | 'Messaging'
    | 'Tooling'
    | 'Database';

export interface Tool {
    /** Show in the condensed PDF skill list. */
    featured?: boolean; // icon lives at public/icons/<slug>.svg
    kind: ToolKind;
    name: string;
    /** Which carousel row it rides in. Leave out and it is auto-balanced. */
    row?: 1 | 2;
    slug: Slug;
}

export type TimelineKind = 'job' | 'rotation' | 'education' | 'award';

/**
 * A sub-step inside one timeline stop — used when two short rotations in the
 * same product read better as one stop with two phases than as two stops.
 */
export interface TimelinePhase {
    from: string;
    period: Localized<string>;
    summary: Localized<string>; // ISO 'YYYY-MM'
    /** Short copy, for the PDF handout. Falls back to `summary` if absent. */
    summaryShort?: Localized<string>;
    title: Localized<string>;
    to?: string;
    tools?: Slug[];
}

export interface TimelineEntry {
    /** ISO 'YYYY-MM'. Used for sorting and the PDF, never displayed raw. */
    from: string;
    /** Hide from the rail without deleting it. */
    hidden?: boolean;
    /** Bullets. Shown in the PDF, and in the expanded card when present. */
    highlights?: Localized<string>[];
    id: Slug;
    kind: TimelineKind;
    org: Localized<string>;
    /** Rotations hang off a job. */
    parentId?: Slug;
    /** Human period — "Aug 2024 – Present". */
    period: Localized<string>;
    /** Optional sub-steps rendered inside this stop's card. */
    phases?: TimelinePhase[];
    /** Rail label — "2022", "Now". */
    railLabel: string;
    /** Rail caption under the label. */
    railTitle: Localized<string>;
    /** Long copy, for the site. */
    summary: Localized<string>;
    /** Short copy, for the PDF handout. Falls back to `summary` if absent. */
    summaryShort?: Localized<string>;
    title: Localized<string>;
    /** Omit for "still going". */
    to?: string;
    /** Tool slugs. Must exist in toolbox.ts — validated at build time. */
    tools: Slug[];
}

export type CredentialKind = 'certification' | 'award' | 'diploma';

export interface Credential {
    /** ISO 'YYYY-MM'. Rendered via a formatter, sorted on. */
    date: string;
    /** Pull into the highlighted column instead of the plain list. */
    featured?: boolean;
    grade?: string;
    href?: string;
    id: Slug;
    issuer: string;
    kind: CredentialKind;
    title: Localized<string>;
}

export interface CvContent {
    baseValues: BaseValues;
    credentials: Credential[];
    locale: Locale;
    profile: Profile;
    timeline: TimelineEntry[];
    tools: Tool[];
}
