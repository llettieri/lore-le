'use client';

import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface NycImagesLayoutProps {
    children: ReactNode;
}

export default function NycImagesLayout({
    children,
}: NycImagesLayoutProps): ReactNode {
    const { push } = useRouter();

    return (
        <>
            <div className="mb-5 flex flex-row justify-center gap-5">
                <Button
                    onClick={(): void => push('carousel')}
                    title="Carousel"
                />
                <Button onClick={(): void => push('gallery')} title="Gallery" />
            </div>
            {children}
        </>
    );
}
