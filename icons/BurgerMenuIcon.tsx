import withSVGIcon from '@/icons/withSVGIcon';
import React from 'react';

const BurgerMenu = (): React.ReactElement => {
    return (
        <>
            <path stroke="currentColor" d="M4 17L20 17"></path>
            <path stroke="currentColor" d="M4 12L20 12"></path>
            <path stroke="currentColor" d="M4 7L20 7"></path>
        </>
    );
};

export const BurgerMenuIcon = withSVGIcon(BurgerMenu, '0 0 24 18');
