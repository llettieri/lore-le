'use client';

import React, { ReactElement } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import type { Tool } from '@/models/cv';
import { ToolCard } from './tool-card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

interface Props {
    tools: Tool[];
    direction?: 'left' | 'right';
}

const MIN_REPEATS = 4;

export const ToolboxCarousel = ({
    tools,
    direction = 'left',
}: Props): ReactElement => {
    const repeated = Array.from({ length: MIN_REPEATS }, () => tools).flat();

    return (
        <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] py-1.5">
            <Carousel
                opts={{
                    loop: true,
                    align: 'start',
                    watchDrag: true,
                    dragFree: true,
                }}
                plugins={[
                    AutoScroll({
                        speed: 0.8,
                        direction:
                            direction === 'left' ? 'forward' : 'backward',
                        stopOnInteraction: false,
                        stopOnMouseEnter: false,
                        stopOnFocusIn: false,
                        startDelay: 0,
                    }),
                ]}
            >
                <CarouselContent className="-ml-3.5">
                    {repeated.map((tool, i) => (
                        <CarouselItem
                            key={`${tool.slug}-${i}`}
                            className="basis-auto pl-3.5"
                        >
                            <ToolCard tool={tool} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};
