import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode } from "react";

const STALE_TIME = 1000 * 60 * 10;
const REFETCH_ON_WINDOW_FOCUS = false;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: STALE_TIME,
      refetchOnWindowFocus: REFETCH_ON_WINDOW_FOCUS,
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
    <ReactQueryDevtools />
  </QueryClientProvider>
);
