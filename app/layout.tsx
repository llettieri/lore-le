import './globals.css';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React, { ReactNode } from 'react';

export const metadata = {
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
                <div className="flex h-screen flex-col overflow-hidden">
                    <Navbar />
                    <div className="flex flex-1 flex-col overflow-auto">
                        <main className="flex-1 bg-mainBackground p-5 sm:p-10">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
