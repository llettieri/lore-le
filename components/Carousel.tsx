'use client';

import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import React, { PropsWithChildren } from 'react';

const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
};

export default function Carousel({
    children,
    ...options
}: PropsWithChildren & EmblaOptionsType): React.ReactElement {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

    return (
        <div className="overflow-hidden rounded-xl shadow-2xl" ref={emblaRef}>
            <div className="flex">{children}</div>
        </div>
    );
}
