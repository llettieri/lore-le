import { SITE_URL } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/imprint`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
