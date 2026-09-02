'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import nextLoader from '@/lib/image-loader/nextjs';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Localized } from '@/models/cv';
import { t } from '@/content';

interface LinkElement {
    href: string;
    title: Localized<string>;
    enabled?: boolean;
}

const links: LinkElement[] = [
    {
        title: 'About',
        href: '/#about',
        enabled: true,
    },
    {
        title: 'Toolbox',
        href: '/#toolbox',
        enabled: true,
    },
    {
        title: 'Journey',
        href: '/#journey',
        enabled: true,
    },
    {
        title: 'Certifications',
        href: '/#certifications',
        enabled: true,
    },
    {
        title: 'Images',
        href: '/nyc-images',
        enabled: false,
    },
    {
        title: 'Drone Video',
        href: '/drone-video',
        enabled: false,
    },
];

interface SocialLink {
    title: string;
    href: string;
    Icon: typeof GithubIcon;
}

const socialLinks: SocialLink[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/llettieri',
        Icon: GithubIcon,
    },
    {
        title: 'LinkedIn',
        href: 'https://linkedin.com/in/lore-le',
        Icon: LinkedinIcon,
    },
];

const navLinkClassName = (isActive: boolean): string =>
    cn(
        'hover:text-primary text-sm font-semibold transition-colors',
        isActive ? 'text-white' : 'text-nav-muted',
    );

export const Navbar = (): ReactElement => {
    const pathname = usePathname();
    const enabledLinks = links.filter((link) => link.enabled);

    return (
        <header className="bg-background">
            <div className="flex items-center justify-between px-13 py-5.5">
                <Link href="/" className="flex items-center">
                    <Image
                        width={100}
                        height={22}
                        src="/logo/logo.svg"
                        alt="Lore-Le Logo"
                        loader={nextLoader}
                        className="h-auto min-h-5.5 w-auto"
                    />
                </Link>
                <div className="hidden items-center gap-7.5 md:flex">
                    <nav className="flex items-center gap-7.5">
                        {enabledLinks.map((link) => {
                            const translatedTitle = t(link.title);

                            return (
                                <Link
                                    key={translatedTitle}
                                    href={link.href}
                                    aria-current={
                                        pathname === link.href
                                            ? 'page'
                                            : undefined
                                    }
                                    className={navLinkClassName(
                                        pathname === link.href,
                                    )}
                                >
                                    {translatedTitle}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-2.25">
                        {socialLinks.map(({ title, href, Icon }) => (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={title}
                                className="hover:border-primary hover:text-primary text-icon-muted flex h-8.5 w-8.5 items-center justify-center rounded-full border border-[rgba(23,167,235,0.35)] transition-colors"
                            >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            type="button"
                            aria-label="Open menu"
                            className="flex h-11 w-11 items-center justify-center text-white md:hidden"
                        >
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <SheetDescription className="sr-only">
                            Site navigation
                        </SheetDescription>
                        <nav className="flex flex-col gap-1 p-4">
                            {enabledLinks.map((link) => {
                                const translatedTitle = t(link.title);

                                return (
                                    <SheetClose key={translatedTitle} asChild>
                                        <Link
                                            href={link.href}
                                            aria-current={
                                                pathname === link.href
                                                    ? 'page'
                                                    : undefined
                                            }
                                            className={cn(
                                                'flex min-h-11 items-center text-base font-semibold',
                                                navLinkClassName(
                                                    pathname === link.href,
                                                ),
                                            )}
                                        >
                                            {translatedTitle}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
