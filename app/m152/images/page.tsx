'use client';

import { Button } from '@/components/Button';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

type View = 'carousel' | 'gallery' | 'none';

const ViewComponent = {
    gallery: <Gallery />,
    carousel: <Carousel />,
    none: null,
};

export default function GalleryPage(): ReactNode {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState<View>('none');

    useEffect(() => {
        const viewParam = searchParams.get('view') as View;
        if (!viewParam) {
            router.push('images?view=carousel');
        } else {
            setView(viewParam);
        }
    }, [router, searchParams]);

    const toggle = (view: View): void => router.replace(`images?view=${view}`);

    return (
        <div
            className={`${
                view === 'carousel' && 'flex h-full flex-col justify-center'
            }`}
        >
            <div className="mb-5 flex flex-row justify-center gap-5">
                <Button
                    onClick={(): void => toggle('carousel')}
                    title="Carousel"
                />
                <Button
                    onClick={(): void => toggle('gallery')}
                    title="Gallery"
                />
            </div>
            {ViewComponent[view]}
        </div>
    );
}
