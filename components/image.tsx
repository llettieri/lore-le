'use client';

import Image, { ImageProps } from 'next/image';
import nextLoader from '@/lib/image-loader/nextjs';
import imgixLoader from '@/lib/image-loader/imgix';
import { ReactNode } from 'react';

const ImgixImage = (props: Omit<ImageProps, 'loader'>): ReactNode => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} loader={imgixLoader} />
);

const NextImage = (props: Omit<ImageProps, 'loader'>): ReactNode => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} loader={nextLoader} />
);

const UnoptimizedImage = (props: Omit<ImageProps, 'loader'>): ReactNode => (
    <NextImage {...props} unoptimized />
);

export { ImgixImage, NextImage, UnoptimizedImage };
