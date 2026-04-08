import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry:                2,
      staleTime:            1000 * 60 * 10,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools  />
  </QueryClientProvider>
);
