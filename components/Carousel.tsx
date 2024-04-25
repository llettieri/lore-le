'use client';

import { useImage } from '@/hooks/useImage';
import { ArrowIcon } from '@/icons/ArrowIcon';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';

const autoplayOptions: AutoplayOptionsType = {
    delay: 3000,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
};

interface ButtonProps {
    onClick: () => void;
    enabled: boolean;
}

function NextButton({ onClick, enabled }: ButtonProps): React.ReactElement {
    return (
        <button
            className="pointer-events-auto h-16 w-16 text-white md:h-32 md:w-32"
            onClick={onClick}
            disabled={!enabled}
            title="Next"
            type="button"
        >
            <ArrowIcon />
        </button>
    );
}

function PrevButton({ onClick, enabled }: ButtonProps): React.ReactElement {
    return (
        <button
            className="pointer-events-auto h-16 w-16 text-white md:h-32 md:w-32"
            onClick={onClick}
            disabled={!enabled}
            title="Previous"
            type="button"
        >
            <div className="rotate-180">
                <ArrowIcon />
            </div>
        </button>
    );
}

export default function Carousel(): ReactElement {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'end' },
        [Autoplay(autoplayOptions)],
    );
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const { getWideImages } = useImage();
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev);
        setNextBtnEnabled(emblaApi.canScrollNext);
    }, []);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        onSelect(emblaApi);

        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);

        emblaApi.emit('reInit');
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div
                className="mx-auto max-w-7xl overflow-hidden rounded-xl shadow-2xl"
                ref={emblaRef}
                id="embla-viewport"
            >
                <div className="flex max-w-7xl" id="embla-container">
                    {getWideImages().map((i, index) => (
                        <div
                            className="relative aspect-video flex-[0_0_100%]"
                            key={index}
                        >
                            <Image
                                src={i.src}
                                alt={i.alt}
                                fill
                                className="h-auto w-auto object-cover"
                                blurDataURL="/placeholder.svg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 mx-auto flex max-w-7xl -translate-y-1/2 touch-none justify-between">
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </div>
    );
}
