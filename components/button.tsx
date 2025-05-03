import { tw } from '@/lib/helpers';
import { Button as FBButton } from 'flowbite-react';
import { CustomFlowbiteTheme } from 'flowbite-react/types';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const buttonTheme: CustomFlowbiteTheme['button'] = {
    base: tw`cursor-pointer rounded-md transition-colors duration-200 ease-in-out`,
    color: {
        primary: tw`bg-primary border-primary-tint hover:border-secondary-tint hover:bg-secondary border-2 text-white`,
    },
};

interface ButtonProps {
    title: string;
    link?: string;
    onClick?: () => void;
}

export const Button = ({ title, onClick, link }: ButtonProps): ReactNode => {
    return (
        <FBButton
            theme={buttonTheme}
            color="primary"
            onClick={onClick}
            applyTheme="replace"
        >
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
