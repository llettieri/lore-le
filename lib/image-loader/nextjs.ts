import { ImageLoader, ImageLoaderProps } from 'next/image';

const nextLoader: ImageLoader = ({ src, width }: ImageLoaderProps): string =>
    `${src}?w=${width}`;

export default nextLoader;
