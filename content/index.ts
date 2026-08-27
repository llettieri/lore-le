import type { CvContent } from '@/models/cv';
import { defaultLocale } from './i18n';
import { profile } from './profile';
import { tools } from './toolbox';
import { timeline } from './timeline';
import { credentials } from './credentials';

/** The whole CV, one object. Pages import from here, never from the files above. */
export const cv: CvContent = {
    locale: defaultLocale,
    profile,
    tools,
    timeline,
    credentials,
};

export { profile, tools, timeline, credentials };
export { toolBySlug, toolRow } from './toolbox';
export { visibleTimeline, printSummary } from './timeline';
export { byKind } from './credentials';
export { locales, defaultLocale, t, tAll } from './i18n';
