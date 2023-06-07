import { useImage } from '@/app/hooks/useImage';
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
            className="w-32 h-32 text-white pointer-events-auto"
            onClick={onClick}
            disabled={!enabled}
            title="Next"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 32 32">
                <path
                    fill="currentColor"
                    d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                />
            </svg>
        </button>
    );
}

function PrevButton({ onClick, enabled }: ButtonProps): React.ReactElement {
    return (
        <button
            className="w-32 h-32 text-white pointer-events-auto"
            onClick={onClick}
            disabled={!enabled}
            title="Previous"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -5 32 32">
                <path
                    fill="currentColor"
                    d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
                />
            </svg>
        </button>
    );
}

export default function Carousel(): React.ReactElement {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay(autoplayOptions),
    ]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [yTranslation, setYTranslation] = useState(0);
    const { getWideImages } = useImage();
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev);
        setNextBtnEnabled(emblaApi.canScrollNext);
    }, []);
    const translationCallback = useCallback(
        () =>
            setYTranslation((emblaApi?.rootNode()?.clientHeight ?? 0) / 2 + 64),
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        onSelect(emblaApi);

        emblaApi.on('reInit', translationCallback);
        emblaApi.on('resize', translationCallback);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);

        emblaApi.emit('reInit');
    }, [emblaApi, onSelect, translationCallback]);

    return (
        <div>
            <div
                className="overflow-hidden rounded-xl shadow-2xl max-w-7xl mx-auto"
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
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {yTranslation !== 0 && (
                <div
                    className="relative flex justify-between pointer-events-none mx-auto max-w-7xl"
                    style={{ transform: `translateY(-${yTranslation}px)` }}
                >
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
            )}
        </div>
    );
}
