'use client';

import { useEffect, useState } from 'react';
import { getWideImages } from '@/services/image-service';
import { ImgixImage } from '@/components/image';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const controlClassName =
    'h-10 w-10 border-2 border-primary-tint bg-primary text-white shadow-md transition-colors duration-200 ease-in-out hover:border-secondary-tint hover:bg-secondary';

export default function CarouselPage(): React.ReactNode {
    const images = getWideImages();
    const [api, setApi] = useState<CarouselApi>();
    const [selected, setSelected] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setSlideCount(api.scrollSnapList().length);
        setSelected(api.selectedScrollSnap());
        api.on('select', () => setSelected(api.selectedScrollSnap()));
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="mx-auto w-full max-w-360"
        >
            <CarouselContent className="aspect-9/5">
                {images.map((image) => (
                    <CarouselItem key={image.src} className="h-full">
                        <ImgixImage
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={400}
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
                variant="default"
                className={cn('inset-y-0 left-4 my-auto', controlClassName)}
            />
            <CarouselNext
                variant="default"
                className={cn('inset-y-0 right-4 my-auto', controlClassName)}
            />
            <div className="mt-4 flex justify-center gap-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === selected ? 'true' : undefined}
                        onClick={(): void => api?.scrollTo(index)}
                        className={cn(
                            'h-2.5 w-2.5 rounded-full transition-colors',
                            index === selected ? 'bg-primary' : 'bg-white/30',
                        )}
                    />
                ))}
            </div>
        </Carousel>
    );
}
