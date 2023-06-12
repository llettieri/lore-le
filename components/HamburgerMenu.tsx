'use client';

import React from 'react';

interface HamburgerMenuProps {
    showModal: boolean;
    toggle: () => void;
}

export const HamburgerMenu = ({
    showModal,
    toggle,
}: HamburgerMenuProps): React.ReactElement => {
    return (
        <button
            className="relative flex z-10 flex-col h-5 justify-between items-center"
            onClick={toggle}
            type="button"
            title="Navigation Menu"
        >
            <span
                className={`w-8 h-0.5 bg-white transition-transform delay-75 ease-in-out ${
                    showModal ? 'translate-y-[0.54rem] rotate-45' : ''
                }`}
            ></span>
            <span
                className={`w-8 h-0.5 bg-white transition-opacity delay-75 ease-in-out ${
                    showModal ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`w-8 h-0.5 bg-white transition-transform delay-75 ease-in-out ${
                    showModal ? '-translate-y-[0.54rem] -rotate-45' : ''
                }`}
            ></span>
        </button>
    );
};
