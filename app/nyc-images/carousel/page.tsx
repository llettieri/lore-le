import { getWideImages } from '@/services/image-service';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export default function CarouselPage(): ReactNode {
    const images = getWideImages();

    return (
        <Carousel className="max-h-[50rem] max-w-[90rem]">
            {images.map((image) => (
                <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            ))}
        </Carousel>
    );
}
