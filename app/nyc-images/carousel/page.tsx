import { tw } from '@/lib/helpers';
import { getWideImages } from '@/services/image-service';
import { Carousel } from 'flowbite-react';
import { CustomFlowbiteTheme } from 'flowbite-react/types';
import React, { ReactNode } from 'react';
import { ImgixImage } from '@/components/image';

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
        <Carousel className="max-h-200 max-w-360" theme={carouselTheme}>
            {images.map((image) => (
                <ImgixImage
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
