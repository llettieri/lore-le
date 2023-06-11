import './globals.css';

import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Lorenzo Lettieri',
    description: 'My own website',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html lang="en">
            <body className={`${inter.className} touch-none overflow-hidden`}>
                <div className="overflow-hidden h-screen flex flex-col">
                    <NavBar />
                    <div className="flex flex-col flex-1 overflow-auto">
                        <main className="p-10 bg-gray-300 flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
