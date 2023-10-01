import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className="flex h-24 flex-shrink-0 items-center justify-center bg-navbar text-center">
            <p className="text-xl text-white">
                &copy; Copyright 2023{' '}
                <span className="font-bold">Lettieri Lorenzo</span>
            </p>
        </div>
    );
}
