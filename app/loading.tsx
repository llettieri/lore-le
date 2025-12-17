import { Spinner } from 'flowbite-react';
import React, { ReactNode } from 'react';
import { UnoptimizedImage } from '@/components/image';

export default function LoadingPage(): ReactNode {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <Spinner
                aria-label="Loading page"
                className="text-primary mb-8"
                size="lg"
            />
            <UnoptimizedImage
                src="https://media.giphy.com/media/pK4av7uBK3I4M/giphy.gif"
                alt="loading"
                width={500}
                height={200}
                className="h-auto w-auto"
            />
        </div>
    );
}
