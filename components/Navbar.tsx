'use client';

import {
    Navbar as FBNavbar,
    FlowbiteTheme,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react';
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

const navbarTheme: FlowbiteTheme['navbar'] = {
    root: {
        base: 'bg-navbar p-4 drop-shadow-2xl',
        inner: {
            base: 'mx-auto flex flex-wrap-reverse items-center justify-between max-w-7xl',
            fluid: {
                on: '',
                off: 'container',
            },
        },
        rounded: {
            on: '',
            off: '',
        },
        bordered: {
            on: '',
            off: '',
        },
    },
    collapse: {
        base: 'w-full md:block md:w-auto',
        list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
        hidden: {
            on: 'hidden',
            off: '',
        },
    },
    link: {
        base: 'transition ease-in-out text-xl block py-2 pl-3 pr-4 md:p-0',
        active: {
            on: '',
            off: 'text-white hover:text-primary hover:bg-mainBackground md:hover:bg-transparent',
        },
        disabled: {
            on: '',
            off: '',
        },
    },
    toggle: {
        base: 'inline-flex items-center rounded-lg text-md text-white focus:outline-none md:hidden',
        icon: 'h-8 w-8 shrink-0',
    },
    brand: { base: '' },
};

export function Navbar(): ReactElement {
    const enabledLinks = links.filter((l) => l.enabled);

    return (
        <FBNavbar fluid theme={navbarTheme}>
            <NavbarCollapse>
                {enabledLinks.map((link) => (
                    <NavbarLink key={link.title} href={link.href}>
                        {link.title}
                    </NavbarLink>
                ))}
            </NavbarCollapse>
            <NavbarBrand href="/">
                <img src="/logo/logo.svg" alt="Lore-Le Logo" />
            </NavbarBrand>
            <NavbarToggle />
        </FBNavbar>
    );
}
