'use client';

import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type View = 'carousel' | 'gallery';

export default function GalleryPage(): React.ReactElement {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState<View>();

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
                view === 'carousel' && 'h-full flex flex-col justify-center'
            }`}
        >
            <div className="flex flex-row gap-5 justify-center mb-5">
                <Button
                    onClick={(): void => toggle('carousel')}
                    label="Carousel"
                    active={view === 'carousel'}
                />
                <Button
                    className="flex-1"
                    onClick={(): void => toggle('gallery')}
                    label="Gallery"
                    active={view === 'gallery'}
                />
            </div>
            {/* @ts-expect-error Server Component */}
            {view === 'carousel' ? <Carousel /> : <Gallery />}
        </div>
    );
}
