import './globals.css';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SITE_URL } from '@/lib/site';
import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';

export const viewport: Viewport = {
    colorScheme: 'dark',
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Lorenzo Lettieri — Software Engineer',
    description:
        'Software Engineer at Sunrise GmbH. Four-year apprenticeship, now building frontend, backend and cloud infrastructure.',
    keywords: ['lore-le', 'personal', 'developer', 'software', 'engineer'],
    openGraph: {
        title: 'Lorenzo Lettieri — Software Engineer',
        description:
            'Software Engineer at Sunrise GmbH. Four-year apprenticeship, now building frontend, backend and cloud infrastructure.',
        images: ['/logo/logo_white_large.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    return (
        <html lang="en" className="dark">
            <body className="overflow-hidden">
                <div className="flex h-dvh flex-col overflow-hidden">
                    <Navbar />
                    <div className="flex flex-1 flex-col overflow-auto">
                        <main className="bg-main-background flex-1 p-5 sm:p-10">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
