'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactElement, useState } from 'react';

interface ProviderProps {
    children: ReactElement;
}

export const Providers = ({ children }: ProviderProps): ReactElement => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
