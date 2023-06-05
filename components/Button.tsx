import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    active: boolean;
}

export default function Button({
    type,
    disabled,
    label,
    onClick,
    active,
}: ButtonProps): React.ReactElement {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`px-5 py-2 bg-primary text-white rounded-md transition ease-in-out duration-75 hover:bg-secondary hover:transition-colors ${
                active && 'font-bold'
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
