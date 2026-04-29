# Data Fetching Rules

## Server state ownership
- TanStack Query owns ALL server state — no exceptions
- Never store API response data in useState
- Never store API response data in Zustand
- Zustand is for UI state only — modal open/close, sidebar collapsed, active tab

## Services
- Service functions are pure async functions — no hooks, no React, no state
- Services always return typed Domain Models — never raw AxiosResponse or DTOs
- Every service function calls the mapper before returning
- API paths come only from ENDPOINTS — never raw strings in services

## Axios
- Only one Axios instance — src/api/apiClient.ts
- Auth token injection only in the request interceptor
- Error normalization only in the response interceptor
- Never call axios.create() outside apiClient.ts
- Never use fetch() anywhere in the codebase

## TanStack Query patterns

### Query keys
- Always defined in hooks/queryKeys.ts — never inline strings
- Structured hierarchically for prefix invalidation:
  transactions.all → ['transactions']
  transactions.byId → ['transactions', id]
  transactions.list(filters) → ['transactions', 'list', filters]

### useQuery
- Always set explicit staleTime — never rely on default
- Use enabled: !!param to prevent queries with missing params
- isLoading → first load skeleton
- isFetching → subtle background refresh indicator (not a blocker)

### useMutation
- onSuccess → invalidateQueries or setQueryData
- onError → roll back optimistic update if applicable
- onSettled → final cleanup, runs always
- mutate → fire and forget (delete, toggle)
- mutateAsync → when you need to await (redirect, close modal, chain operations)

### Cache management
- invalidateQueries → data changed, you don't have the new value yet
- setQueryData → mutation response already contains updated data, inject directly
- removeQueries → only on delete operations
- Never fetch again just to update the cache if the mutation response has the data

## Error handling
- All errors normalized through normalizeError() in utils/errors.ts
- AppError type: { message: string; status?: number; code?: string }
- Never expose raw Axios errors to components