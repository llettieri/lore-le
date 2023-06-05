'use client';

import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import React, { useState } from 'react';

type View = 'carousel' | 'gallery';

export default function GalleryPage(): React.ReactElement {
    const [view, setView] = useState<View>('carousel');
    return (
        <div
            className={`${
                view === 'carousel' && 'h-full flex flex-col justify-center'
            }`}
        >
            <div className="flex flex-row gap-5 justify-center mb-5">
                <Button
                    onClick={(): void => setView('carousel')}
                    label="Carousel"
                    active={view === 'carousel'}
                />
                <Button
                    className="flex-1"
                    onClick={(): void => setView('gallery')}
                    label="Gallery"
                    active={view === 'gallery'}
                />
            </div>
            {view === 'carousel' ? <Carousel /> : <Gallery />}
        </div>
    );
}
