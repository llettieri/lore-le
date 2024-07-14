import { CustomFlowbiteTheme, Button as FBButton } from 'flowbite-react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

const buttonTheme: CustomFlowbiteTheme['button'] = {
    base: 'transition-colors duration-200 ease-in-out rounded-md',
    color: {
        primary:
            'bg-primary border-primaryTint border-2 text-white hover:border-secondaryTint hover:bg-secondary',
    },
};

interface ButtonProps {
    title: string;
    link?: string;
    onClick?: () => void;
}

export const Button = ({ title, onClick, link }: ButtonProps): ReactElement => {
    return (
        <FBButton theme={buttonTheme} color="primary" onClick={onClick}>
            {link ? (
                <Link href={link} prefetch={true}>
                    {title}
                </Link>
            ) : (
                title
            )}
        </FBButton>
    );
};
