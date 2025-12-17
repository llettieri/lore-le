import dayjs from 'dayjs';
import {
    Footer as FBFooter,
    FooterCopyright,
    FooterLink,
    FooterLinkGroup,
} from 'flowbite-react';
import React, { ReactNode } from 'react';

export const Footer = (): ReactNode => {
    const currentYear = dayjs().year();

    return (
        <FBFooter
            container
            className="bg-navbar dark:bg-navbar shrink-0 rounded-none"
        >
            <FooterLinkGroup className="justify-center text-lg text-white sm:justify-start">
                <FooterLink href="/imprint">Imprint</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </FooterLinkGroup>
            <FooterCopyright
                className="text-end text-lg text-gray-400 *:text-gray-400 md:text-white *:md:text-white dark:md:text-white"
                by="Lorenzo Lettieri"
                year={currentYear}
            />
        </FBFooter>
    );
};
