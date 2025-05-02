/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [{ hostname: 'media.giphy.com' }, {
            protocol: 'https',
            hostname: 'lore-le.imgix.net',
        }],
        localPatterns: [{pathname: '/logo/**'}],
        loader: 'custom',
        loaderFile: 'lib/image-loader/imgix.ts',
    },
};

export default nextConfig;
