'use client';

import React, { ReactElement } from 'react';

interface HamburgerMenuProps {
    showModal: boolean;
    toggle: () => void;
}

export const HamburgerMenu = ({
    showModal,
    toggle,
}: HamburgerMenuProps): ReactElement => {
    return (
        <button
            className="relative z-10 flex h-5 flex-col items-center justify-between"
            onClick={toggle}
            type="button"
            title="Navigation Menu"
        >
            <span
                className={`h-0.5 w-8 bg-white transition-transform delay-75 ease-in-out ${
                    showModal ? 'translate-y-[0.54rem] rotate-45' : ''
                }`}
            ></span>
            <span
                className={`h-0.5 w-8 bg-white transition-opacity delay-75 ease-in-out ${
                    showModal ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`h-0.5 w-8 bg-white transition-transform delay-75 ease-in-out ${
                    showModal ? '-translate-y-[0.54rem] -rotate-45' : ''
                }`}
            ></span>
        </button>
    );
};
