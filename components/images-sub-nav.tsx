'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

const navButtonClassName =
    'cursor-pointer rounded-md border-2 border-primary-tint bg-primary text-white transition-colors duration-200 ease-in-out hover:border-secondary-tint hover:bg-secondary';

export const ImagesSubNav = (): ReactNode => {
    const { push } = useRouter();
    return (
        <div className="mb-5 flex flex-row justify-center gap-5">
            <Button
                onClick={(): void => push('carousel')}
                className={navButtonClassName}
            >
                Carousel
            </Button>
            <Button
                onClick={(): void => push('gallery')}
                className={navButtonClassName}
            >
                Gallery
            </Button>
        </div>
    );
};
