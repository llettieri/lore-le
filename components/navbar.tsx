'use client';

import { tw } from '@/lib/helpers';
import { nextLoader } from '@/lib/image-loader/nextjs';
import {
    Navbar as FBNavbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react';
import { CustomFlowbiteTheme } from 'flowbite-react/types';
import Image from 'next/image';
import React, { ReactElement } from 'react';

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
        title: 'Images',
        href: '/nyc-images',
        enabled: true,
    },
    {
        title: 'Drone Video',
        href: '/drone-video',
        enabled: true,
    },
];

const navbarTheme: CustomFlowbiteTheme['navbar'] = {
    root: {
        base: tw`bg-navbar p-4 drop-shadow-2xl`,
        inner: {
            base: tw`mx-auto flex max-w-7xl flex-wrap-reverse items-center justify-between`,
            fluid: {
                on: tw``,
                off: tw`container`,
            },
        },
        rounded: {
            on: tw``,
            off: tw``,
        },
        bordered: {
            on: tw``,
            off: tw``,
        },
    },
    link: {
        base: tw`block py-2 pl-3 pr-4 text-xl transition ease-in-out md:p-0`,
        active: {
            on: tw``,
            off: tw`hover:text-primary hover:bg-main-background text-white md:hover:bg-transparent`,
        },
        disabled: {
            on: tw``,
            off: tw``,
        },
    },
};

export const Navbar = (): ReactElement => {
    const enabledLinks = links.filter((l) => l.enabled);

    return (
        <FBNavbar
            fluid
            theme={navbarTheme}
            applyTheme={{ root: 'replace', link: 'replace' }}
        >
            <NavbarCollapse>
                {enabledLinks.map((link) => (
                    <NavbarLink key={link.title} href={link.href}>
                        {link.title}
                    </NavbarLink>
                ))}
            </NavbarCollapse>
            <NavbarBrand href="/">
                <Image
                    width={100}
                    height={20}
                    src="/logo/logo.svg"
                    alt="Lore-Le Logo"
                    loader={nextLoader}
                />
            </NavbarBrand>
            <NavbarToggle />
        </FBNavbar>
    );
};
