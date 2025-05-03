import { tw } from '@/lib/helpers';
import { getWideImages } from '@/services/image-service';
import { Carousel } from 'flowbite-react';
import { CustomFlowbiteTheme } from 'flowbite-react/types';
import Image from 'next/image';
import React, { ReactNode } from 'react';

const carouselTheme: CustomFlowbiteTheme['carousel'] = {
    scrollContainer: {
        base: tw`no-scrollbar`,
    },
    item: {
        wrapper: {
            on: tw`transform transform-gpu`,
            off: tw`transform transform-gpu`,
        },
    },
    control: {
        base: tw`bg-primary hover:border-secondary-tint border-primary-tint hover:bg-secondary cursor-pointer border-2 text-white transition-colors duration-200 ease-in-out`,
    },
};

export default function CarouselPage(): ReactNode {
    const images = getWideImages();

    return (
        <Carousel className="max-h-[50rem] max-w-[90rem]" theme={carouselTheme}>
            {images.map((image) => (
                <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={400}
                />
            ))}
        </Carousel>
    );
}
