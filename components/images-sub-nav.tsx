'use client';

import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export const ImagesSubNav = (): ReactNode => {
    const { push } = useRouter();
    return (
        <div className="mb-5 flex flex-row justify-center gap-5">
            <Button onClick={(): void => push('carousel')} title="Carousel" />
            <Button onClick={(): void => push('gallery')} title="Gallery" />
        </div>
    );
};
