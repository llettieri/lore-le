import { getWideImages } from '@/services/ImageService';
import { Carousel } from 'flowbite-react';
import React, { ReactNode } from 'react';

export default function CarouselPage(): ReactNode {
    const images = getWideImages();

    return (
        <Carousel className="max-h-[50rem] max-w-[90rem]">
            {images.map((image) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={image.src} src={image.src} alt={image.alt} />
            ))}
        </Carousel>
    );
}
