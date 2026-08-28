import { SITE_URL } from '@/lib/site';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Legacy routes, hidden from the nav — reachable but not
            // meant to be indexed. See CLAUDE.md.
            disallow: ['/nyc-images', '/drone-video'],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
