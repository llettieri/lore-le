import { Loader2 } from 'lucide-react';
import React, { ReactNode } from 'react';
import { UnoptimizedImage } from '@/components/image';

export default function LoadingPage(): ReactNode {
    return (
        <div
            aria-busy="true"
            className="flex h-full flex-col items-center justify-center"
        >
            <Loader2
                className="text-primary mb-8 h-8 w-8 animate-spin"
                aria-hidden="true"
            />
            <span className="sr-only">Loading</span>
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
