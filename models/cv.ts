/**
 * Single source of truth for every piece of CV content.
 * Nothing in the UI hardcodes copy — components read these types only.
 */

/** Kebab-case id. For tools it is ALSO the icon filename: public/icons/<slug>.svg */
export type Slug = string;

/** Add a language here first. Everything else keeps compiling. */
export type Locale = 'en' | 'de' | 'it';

/**
 * Any user-visible string. Today every value is a plain string; when a second
 * language arrives, swap the ones you translate for { en: '…', de: '…' } and
 * resolve with t() from content/i18n.ts. Nothing else changes.
 */
export type Localized<T> = T | Partial<Record<Locale, T>>;

export interface ProfileLink {
    label: string; // "GitHub"
    handle: string; // "github.com/lore-le" — what is rendered
    href: string;
    icon?: Slug; // public/icons/<slug>.svg
}

export interface Profile {
    name: string;
    role: string;
    location: string;
    available: boolean;
    availableNote?: Localized<string>;
    headline: Localized<string>; // hero, may contain no markup
    intro: Localized<string>; // hero paragraph
    profile: Localized<string>; // longer paragraph, used in the PDF
    email: string;
    phone?: string;
    languages: string[];
    links: ProfileLink[];
    portrait?: string; // /portrait.jpg — omit and the UI renders nothing
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
    slug: Slug; // icon lives at public/icons/<slug>.svg
    name: string;
    kind: ToolKind;
    /** Which marquee row it rides in. Leave out and it is auto-balanced. */
    row?: 1 | 2;
    /** Show in the condensed PDF skill list. */
    featured?: boolean;
}

export type TimelineKind = 'job' | 'rotation' | 'education' | 'award';

/**
 * A sub-step inside one timeline stop — used when two short rotations in the
 * same product read better as one stop with two phases than as two stops.
 */
export interface TimelinePhase {
    title: Localized<string>;
    period: Localized<string>;
    from: string; // ISO 'YYYY-MM'
    to?: string;
    summary: Localized<string>;
    tools?: Slug[];
}

export interface TimelineEntry {
    id: Slug;
    kind: TimelineKind;
    /** Rail label — "2022", "Now". */
    railLabel: string;
    /** Rail caption under the label. */
    railTitle: Localized<string>;
    title: Localized<string>;
    org: Localized<string>;
    /** Human period — "Aug 2024 – Present". */
    period: Localized<string>;
    /** ISO 'YYYY-MM'. Used for sorting and the PDF, never displayed raw. */
    from: string;
    /** Omit for "still going". */
    to?: string;
    /** Long copy, for the site. */
    summary: Localized<string>;
    /** Short copy, for the PDF handout. Falls back to `summary` if absent. */
    summaryShort?: Localized<string>;
    /** Optional sub-steps rendered inside this stop's card. */
    phases?: TimelinePhase[];
    /** Tool slugs. Must exist in toolbox.ts — validated at build time. */
    tools: Slug[];
    /** Bullets. Shown in the PDF, and in the expanded card when present. */
    highlights?: Localized<string>[];
    /** Rotations hang off a job. */
    parentId?: Slug;
    /** Hide from the rail without deleting it. */
    hidden?: boolean;
}

export type CredentialKind = 'certification' | 'award' | 'diploma';

export interface Credential {
    id: Slug;
    kind: CredentialKind;
    title: Localized<string>;
    issuer: string;
    /** ISO 'YYYY-MM'. Rendered via a formatter, sorted on. */
    date: string;
    grade?: string;
    href?: string;
    /** Pull into the highlighted column instead of the plain list. */
    featured?: boolean;
}

export interface CvContent {
    locale: Locale;
    profile: Profile;
    tools: Tool[];
    timeline: TimelineEntry[];
    credentials: Credential[];
}
