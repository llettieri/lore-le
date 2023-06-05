'use client';

import { useImage } from '@/app/hooks/useImage';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';
import Image from 'next/image';
import React, { useState } from 'react';

type View = 'carousel' | 'gallery';

export default function GalleryPage(): React.ReactElement {
    const { images } = useImage();
    const [toggleView, setToggleView] = useState<View>('carousel');

    return (
        <div
            className={`${
                toggleView === 'carousel' &&
                'h-full flex flex-col justify-center'
            }`}
        >
            <div className="top-0 flex flex-row gap-5 justify-center mb-5">
                <Button
                    onClick={(): void => setToggleView('carousel')}
                    label="Carousel"
                    active={toggleView === 'carousel'}
                />
                <Button
                    className="flex-1"
                    onClick={(): void => setToggleView('gallery')}
                    label="Gallery"
                    active={toggleView === 'gallery'}
                />
            </div>
            {toggleView === 'carousel' ? (
                <Carousel loop>
                    {images().map((i, index) => (
                        <div
                            className="relative h-[32rem] flex-[0_0_100%]"
                            key={index}
                        >
                            <Image
                                src={i.src}
                                alt={i.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            ) : (
                <Gallery />
            )}
        </div>
    );
}
