import React, { Fragment, ReactNode } from 'react';

interface Props {
    text: string;
    variant?: 'primary' | 'bold';
}

const variantClassName: Record<NonNullable<Props['variant']>, string> = {
    primary: 'text-primary font-black',
    bold: 'font-black',
};

/**
 * Renders `**word**` as emphasis, styled per `variant` — previously
 * hardcoded as a JSX span around "Lorenzo". Everything else renders as
 * plain text, so newlines still work with a `whitespace-pre-line` ancestor.
 */
export const RichText = ({ text, variant = 'primary' }: Props): ReactNode => {
    const parts = text.split(/\*\*(.+?)\*\*/g);

    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? (
                    <strong key={i} className={variantClassName[variant]}>
                        {part}
                    </strong>
                ) : (
                    <Fragment key={i}>{part}</Fragment>
                ),
            )}
        </>
    );
};
