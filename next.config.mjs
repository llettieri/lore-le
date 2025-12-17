import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.giphy.com',
            },
            {
                protocol: 'https',
                hostname: 'lore-le.imgix.net',
            },
        ],
        localPatterns: [{ pathname: '/logo/**' }],
        loader: 'custom',
        loaderFile: 'lib/image-loader/imgix.ts',
    },
};

export default withFlowbiteReact(nextConfig);
