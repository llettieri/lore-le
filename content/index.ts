import type { CvContent } from '@/models/cv';
import { defaultLocale } from './i18n';
import { profile } from './profile';
import { tools } from './toolbox';
import { timeline } from './timeline';
import { credentials } from './credentials';
import { baseValues } from './base-values';

export const cv: CvContent = {
    baseValues,
    credentials,
    locale: defaultLocale,
    profile,
    timeline,
    tools,
};

export { profile, tools, timeline, credentials };
export { toolBySlug, toolRow } from './toolbox';
export { visibleTimeline, printSummary, printPhaseSummary } from './timeline';
export { byKind } from './credentials';
export { locales, defaultLocale, t, tAll } from './i18n';
export { printSkills } from './print-skills';
