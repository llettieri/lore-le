'use client';

import { BurgerMenuIcon } from '@/icons/BurgerMenuIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

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
        title: 'Images',
        href: '/m152/images',
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
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="bg-gray-700 h-fit min-h-[4rem] p-3 text-white flex items-center justify-between drop-shadow-2xl flex-row-reverse md:flex-row">
            <ul className="hidden md:flex gap-2">
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
            <div className="block md:hidden">
                <button
                    title="Open Menu"
                    type="button"
                    onClick={(): void => setShowModal(!showModal)}
                    className={`relative z-10 ${
                        showModal ? 'text-black' : 'text-white'
                    }`}
                >
                    {showModal ? (
                        <h1>close</h1>
                    ) : (
                        <BurgerMenuIcon width="3em" />
                    )}
                </button>

                <ul
                    className={`absolute top-0 right-0 flex flex-cols h-screen w-56 bg-amber-50 transition-transform delay-100 ease-in-out ${
                        showModal ? 'translate-x-0' : 'translate-x-[100%]'
                    }`}
                >
                    <li>test</li>
                </ul>
            </div>
            <Link href="/">
                <Image
                    src="/logo/logo.svg"
                    alt="Lore-Le Logo"
                    width={200}
                    height={40}
                    style={{ height: 'auto', width: 'auto' }}
                />
            </Link>
        </nav>
    );
}
