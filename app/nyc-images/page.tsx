'use client';

import { Button } from '@/components/Button';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

type View = 'carousel' | 'gallery' | 'none';

const ViewComponent = {
    gallery: <Gallery />,
    carousel: <Carousel />,
    none: null,
};

export default function GalleryPage(): ReactNode {
    const path = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [view, setView] = useState<View>('none');

    const changeView = (view: View): void =>
        router.replace(`${path}?view=${view}`);

    useEffect(() => {
        const viewParam = searchParams.get('view') as View;

        if (!viewParam) {
            router.replace(`${path}?view=carousel`, {});
        } else {
            setView(viewParam);
        }
    }, [path, router, searchParams]);

    return (
        <div
            className={`${
                view === 'carousel' && 'flex h-full flex-col justify-center'
            }`}
        >
            <div className="mb-5 flex flex-row justify-center gap-5">
                <Button
                    onClick={(): void => changeView('carousel')}
                    title="Carousel"
                />
                <Button
                    onClick={(): void => changeView('gallery')}
                    title="Gallery"
                />
            </div>
            {ViewComponent[view]}
        </div>
    );
}
