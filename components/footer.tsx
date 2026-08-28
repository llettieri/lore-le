import dayjs from 'dayjs';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { ObfuscateSensibleText } from '@/components/obfuscate-sensible-text';

const pillClassName =
    'text-pill-outline-text rounded-[26px] border border-white/20 px-[22px] py-3 text-sm font-bold transition-colors hover:border-primary hover:text-primary';

export const Footer = (): ReactNode => {
    const currentYear = dayjs().year();

    return (
        <footer className="bg-card shrink-0">
            <div className="flex flex-col gap-6 p-13 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="mb-1.5 text-[26px] font-black text-white">
                        Let&apos;s talk.
                    </div>
                    <div className="text-muted-foreground text-[15px]">
                        <ObfuscateSensibleText
                            type="email"
                            content="me@lore-le.ch"
                        />{' '}
                        · German, Italian, English
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <a
                        href="https://github.com/llettieri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillClassName}
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/lore-le"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={pillClassName}
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-13 py-4 text-sm">
                <div className="flex gap-6">
                    <Link href="/imprint" className="hover:text-primary">
                        Imprint
                    </Link>
                    <Link href="/privacy" className="hover:text-primary">
                        Privacy Policy
                    </Link>
                </div>
                <div>&copy; {currentYear} Lorenzo Lettieri</div>
            </div>
        </footer>
    );
};
