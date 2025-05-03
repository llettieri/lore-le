import './globals.css';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeConfig } from 'flowbite-react';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Lorenzo Lettieri',
    description: 'You wanna learn more about me? You are at the right place!',
    keywords: ['lore-le', 'personal', 'developer', 'software'],
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    return (
        <html lang="en">
            <body className="touch-none overflow-hidden">
                <ThemeConfig dark={false} />
                <div className="flex h-screen flex-col overflow-hidden">
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
