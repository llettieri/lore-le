/* eslint-disable no-console */
'use client';

import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { BrokenRail } from '@/components/broken-rail';
import { RichText } from '@/components/rich-text';
import { baseValues } from '@/content/base-values';
import { t } from '@/content/i18n';

export default function Error({
    error,
    retry,
}: {
    error: Error & { digest?: string };
    retry: () => void;
}): ReactNode {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-13 py-16 text-center">
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    background:
                        'radial-gradient(circle, rgba(23,167,235,0.14), transparent 65%)',
                }}
            />
            <div className="relative flex flex-col items-center">
                <BrokenRail variant="broken" />
                <p className="text-primary mt-10 text-8xl font-black sm:text-9xl">
                    Error
                </p>
                <h1 className="mt-3 text-3xl">
                    <RichText text={t(baseValues.errorHeadline)} />
                </h1>
                <p className="mt-4 max-w-[46ch] text-base/relaxed text-pretty text-white/80">
                    {t(baseValues.errorDescription)}
                </p>
                <div className="mt-8 flex items-center gap-3">
                    <button
                        onClick={retry}
                        className="hover:bg-primary-tint bg-primary text-main-background rounded-[30px] px-6.5 py-3.5 text-center text-[15px] font-extrabold transition-colors"
                    >
                        {t(baseValues.errorTryAgainButtonLabel)}
                    </button>
                    <Link
                        href="/"
                        className="hover:border-primary hover:text-primary text-pill-outline-text rounded-[30px] border border-white/20 px-6.5 py-3.5 text-center text-[15px] font-bold transition-colors"
                    >
                        {t(baseValues.backToHomeButtonLabel)}
                    </Link>
                </div>
            </div>
        </div>
    );
}
