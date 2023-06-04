/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com', 'lore-le.ch']
    },
    output: 'standalone',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,require-await
    async redirects() {
        return [
            {
                source: '/me',
                destination: '/',
                permanent: true,
            }
        ];
    }
};

module.exports = nextConfig;
