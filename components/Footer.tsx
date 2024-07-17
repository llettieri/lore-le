import dayjs from 'dayjs';
import { Footer as FBFooter, FooterCopyright } from 'flowbite-react';
import React, { ReactNode } from 'react';

export const Footer = (): ReactNode => {
    const currentYear = dayjs().year();

    return (
        <FBFooter container className="flex-shrink-0 rounded-none bg-navbar">
            <FBFooter.LinkGroup className="justify-center text-lg text-white sm:justify-start">
                <FBFooter.Link href="/imprint">Imprint</FBFooter.Link>
                <FBFooter.Link href="/privacy">Privacy Policy</FBFooter.Link>
            </FBFooter.LinkGroup>
            <FooterCopyright
                className="text-end text-lg text-gray-400 *:text-gray-400 md:text-white *:md:text-white"
                by="Lorenzo Lettieri"
                year={currentYear}
            />
        </FBFooter>
    );
};
