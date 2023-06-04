'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface LinkElement {
    href: string;
    title: string;
    enabled?: boolean;
}

const links: LinkElement[] = [
    {
        title: 'Home',
        href: '/',
        enabled: true,
    },
    {
        title: 'Drone Video',
        href: '/m152/video',
        enabled: true,
    },
    {
        title: 'Image Gallery',
        href: '/m152/gallery',
        enabled: true,
    },
    {
        title: 'About me',
        href: '/me',
    },
];

export function NavBar(): React.ReactElement {
    const pathname = usePathname();
    const enabledLinks = links.filter((l) => l.enabled);

    return (
        <nav className="bg-gray-700 h-fit p-3 text-white flex items-center justify-between drop-shadow-2xl">
            <ul className="flex gap-2">
                {enabledLinks.map((link, index) => (
                    <li
                        key={`${link.href}_${link.title}`}
                        className="flex gap-2"
                    >
                        <Link
                            className={`hover:text-primary transition ease-in-out hover:transition-colors ${
                                pathname === link.href ? 'font-bold' : ''
                            }`}
                            key={link.title}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                        {index !== enabledLinks.length - 1 && (
                            <span key={Math.random()}>|</span>
                        )}
                    </li>
                ))}
            </ul>
            <Link href="/">
                <Image
                    src="/logo/logo.svg"
                    alt="Lore-Le Logo"
                    width={200}
                    height={40}
                />
            </Link>
        </nav>
    );
}