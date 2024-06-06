/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [{hostname: 'media.giphy.com'}, {hostname: 'lore-le.ch'}]
    },
};

module.exports = nextConfig;
