import React, { ComponentType, ReactElement } from 'react';

interface IconProps {
    id?: string;
    width?: number | string;
    height?: number | string;
    label?: string;
}

export default function withSVGIcon(
    WrappedComponent: ComponentType<IconProps>,
    viewBox: string,
): ComponentType<IconProps> {
    const SvgIcon = (props: IconProps): ReactElement => {
        const { id, label, width, height } = props;

        return (
            <svg
                height={height}
                width={width}
                id={id}
                aria-label={label}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox}
            >
                <WrappedComponent {...props} />
            </svg>
        );
    };

    return SvgIcon;
}
