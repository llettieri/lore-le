import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Providers } from '@/components/Providers';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Lorenzo Lettieri',
    description: 'My own website',
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    return (
        <html lang="en">
            <body className={`${inter.className} touch-none overflow-hidden`}>
                <Providers>
                    <div className="flex h-screen flex-col overflow-hidden">
                        <NavBar />
                        <div className="flex flex-1 flex-col overflow-auto">
                            <main className="flex-1 bg-mainBackground p-10">
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
