import dayjs from 'dayjs';
import { Footer as FBFooter, FooterCopyright } from 'flowbite-react';
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    const currentYear = dayjs().year();

    return (
        <FBFooter container className="flex-shrink-0 rounded-none bg-navbar">
            <FBFooter.LinkGroup className="text-lg text-white">
                <FBFooter.Link href="/imprint">Imprint</FBFooter.Link>
                <FBFooter.Link href="/privacy">Privacy Policy</FBFooter.Link>
            </FBFooter.LinkGroup>
            <FooterCopyright
                className="text-lg text-white"
                by="Lorenzo Lettieri"
                year={currentYear}
            />
        </FBFooter>
    );
}
