import type { Locale, Localized } from '@/models/cv';

/**
 * English only today. The model already accepts per-locale values, so adding
 * a language is: push a locale here, then change the strings you want
 * translated from `'text'` to `{ en: 'text', de: 'Text' }`. Untranslated
 * strings keep working and fall back to `defaultLocale`.
 */
export const locales = ['en'] as const satisfies readonly Locale[];

export const defaultLocale: Locale = 'en';

/** Resolve a Localized<T> for a locale. Plain values pass straight through. */
export function t<T>(value: Localized<T>, locale: Locale = defaultLocale): T {
    if (value === null || typeof value !== 'object') return value as T;

    const map = value as Partial<Record<Locale, T>>;
    const keys = Object.keys(map);
    const looksLocalized = keys.length > 0 && keys.every((k) => k.length === 2);
    if (!looksLocalized) return value as T;

    return map[locale] ?? map[defaultLocale] ?? (Object.values(map)[0] as T);
}

/** Same, for string arrays (highlights, languages). */
export const tAll = <T>(values: Localized<T>[], locale?: Locale): T[] =>
    values.map((v) => t(v, locale));
