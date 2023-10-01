import withSVGIcon from '@/icons/withSVGIcon';
import React, { ReactElement } from 'react';

const Arrow = (): ReactElement => {
    return (
        <path
            fill="currentColor"
            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
        />
    );
};

export const ArrowIcon = withSVGIcon(Arrow, '-3 -5 32 32');
