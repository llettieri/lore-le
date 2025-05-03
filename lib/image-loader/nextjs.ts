import { ImageLoader, ImageLoaderProps } from 'next/image';

export const nextLoader: ImageLoader = ({
    src,
    width,
}: ImageLoaderProps): string => `${src}?w=${width}`;
