'use client';

import { ReactNode } from 'react';
import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

function Collapsible({
    ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>): ReactNode {
    return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
    ...props
}: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleTrigger
>): ReactNode {
    return (
        <CollapsiblePrimitive.CollapsibleTrigger
            data-slot="collapsible-trigger"
            {...props}
        />
    );
}

function CollapsibleContent({
    ...props
}: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleContent
>): ReactNode {
    return (
        <CollapsiblePrimitive.CollapsibleContent
            data-slot="collapsible-content"
            {...props}
        />
    );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
