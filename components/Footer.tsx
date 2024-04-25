import dayjs from 'dayjs';
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    const currentYear = dayjs().year();
    return (
        <div className="flex h-24 flex-shrink-0 items-center justify-center bg-navbar text-center">
            <p className="text-xl text-white">
                &copy; Copyright {currentYear}{' '}
                <span className="font-bold">Lettieri Lorenzo</span>
            </p>
        </div>
    );
}
