'use client';

import { HamburgerMenu } from '@/components/HamburgerMenu';
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

    const toggle = (): void => setShowModal(!showModal);

    return (
        <nav className="bg-gray-700 z-10 h-fit min-h-[4rem] p-3 text-white flex items-center justify-between drop-shadow-2xl flex-row-reverse md:flex-row">
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
                <HamburgerMenu showModal={showModal} toggle={toggle} />
                <div
                    className={`bg-black absolute top-0 left-0 h-screen w-screen transition-all delay-100 ${
                        showModal ? 'opacity-30' : 'opacity-0 hidden'
                    }`}
                ></div>
                <div
                    id="mobile-nav"
                    className={`fixed top-0 right-0 h-screen min-w-[10rem] pt-[4rem] bg-gray-700 transition-transform delay-100 ease-in-out ${
                        showModal
                            ? 'translate-x-0 shadow-2xl'
                            : 'translate-x-full'
                    }`}
                >
                    <ul className="flex flex-col gap-2">
                        {enabledLinks.map((link) => (
                            <li
                                key={`${link.href}_${link.title}`}
                                className="flex flex-col gap-2"
                            >
                                <Link
                                    className={`hover:text-primary mx-2 transition ease-in-out hover:transition-colors ${
                                        pathname === link.href
                                            ? 'font-bold'
                                            : ''
                                    }`}
                                    key={link.title}
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
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
