import withSVGIcon from '@/icons/withSVGIcon';
import React from 'react';

const PreviousArrow = (): React.ReactElement => {
    return (
        <path
            fill="currentColor"
            d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
        />
    );
};

export const PreviousArrowIcon = withSVGIcon(PreviousArrow, '-3 -5 32 32');
