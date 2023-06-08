import withSVGIcon from '@/icons/withSVGIcon';
import React from 'react';

const BurgerMenu = (): React.ReactElement => {
    return (
        <>
            <path stroke="currentColor" d="M4 18L20 18"></path>
            <path stroke="currentColor" d="M4 12L20 12"></path>
            <path stroke="currentColor" d="M4 6L20 6"></path>;
        </>
    );
};

export const BurgerMenuIcon = withSVGIcon(BurgerMenu, '0 0 24 24');
