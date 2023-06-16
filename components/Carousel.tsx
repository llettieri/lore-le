import { useImage } from '@/hooks/useImage';
import { ArrowIcon } from '@/icons/ArrowIcon';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

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
            className="w-16 h-16 md:w-32 md:h-32 text-white pointer-events-auto"
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
            className="w-16 h-16 md:w-32 md:h-32 text-white pointer-events-auto"
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

export default function Carousel(): React.ReactElement {
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
                className="overflow-hidden rounded-xl shadow-2xl max-w-7xl mx-auto"
                ref={emblaRef}
                id="embla-viewport"
            >
                <div className="flex max-w-7xl relative" id="embla-container">
                    {getWideImages().map((i, index) => (
                        <div
                            className="relative aspect-video flex-[0_0_100%]"
                            key={index}
                        >
                            <Image
                                src={i.src}
                                alt={i.alt}
                                fill
                                className="object-cover w-auto h-auto"
                                sizes="100vw"
                                placeholder="blur"
                                blurDataURL="/placeholder.svg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 flex justify-between pointer-events-none touch-none mx-auto max-w-7xl">
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </div>
    );
}
