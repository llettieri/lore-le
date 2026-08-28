import type { Locale, Localized } from '@/models/cv';

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

export const tAll = <T>(values: Localized<T>[], locale?: Locale): T[] =>
    values.map((v) => t(v, locale));
