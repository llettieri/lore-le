import { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { BrokenRail } from '@/components/broken-rail';
import { RichText } from '@/components/rich-text';
import { baseValues } from '@/content/base-values';
import { t } from '@/content/i18n';

export const metadata: Metadata = {
    title: '404 | Lorenzo Lettieri',
    description: "This page doesn't exist.",
};

export default function NotFound(): ReactNode {
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
                <BrokenRail />
                <p className="text-primary mt-10 text-8xl font-black sm:text-9xl">
                    404
                </p>
                <h1 className="mt-3 text-3xl">
                    <RichText text={t(baseValues.notFoundHeadline)} />
                </h1>
                <p className="mt-4 max-w-[46ch] text-base/relaxed text-pretty text-white/80">
                    {t(baseValues.notFoundDescription)}
                </p>
                <Link
                    href="/"
                    className="hover:bg-primary-tint bg-primary text-main-background mt-8 rounded-[30px] px-6.5 py-3.5 text-center text-[15px] font-extrabold transition-colors"
                >
                    {t(baseValues.backToHomeButtonLabel)}
                </Link>
            </div>
        </div>
    );
}
