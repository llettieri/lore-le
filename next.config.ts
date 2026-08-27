import { NextConfig } from 'next';
import { version } from './package.json';
import { writeFileSync } from 'node:fs';

writeFileSync('./public/version.json', JSON.stringify({ version }));

const nextConfig: NextConfig = {
    output: 'standalone',
    allowedDevOrigins: ['llettieri.hub'],
    images: {
        remotePatterns: [
            { hostname: 'media.giphy.com' },
            { hostname: 'lore-le.imgix.net' },
        ],
        localPatterns: [{ pathname: '/logo/**' }],
        loader: 'custom',
        loaderFile: 'lib/image-loader/imgix.ts',
    },
};

export default nextConfig;
