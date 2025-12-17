import { ImagesSubNav } from '@/components/images-sub-nav';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NYC Images | Lorenzo Lettieri',
    description:
        'Take a look at these fantastic pictures of the big apple! All the pics were shot by myself.',
    keywords: ['lore-le', 'personal', 'pictures', 'nyc', 'winter', 'big-apple'],
};

interface NycImagesLayoutProps {
    children: ReactNode;
}

export default function NycImagesLayout({
    children,
}: NycImagesLayoutProps): ReactNode {
    return (
        <div className="flex h-full flex-col">
            <ImagesSubNav />
            <div className="flex flex-grow items-center justify-center">
                {children}
            </div>
        </div>
    );
}
