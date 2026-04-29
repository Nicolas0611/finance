# Skill: TanStack Query

## Mental model
TanStack Query is a cache manager, not just a fetcher.
Every piece of server data has an address (queryKey) and a lifetime (staleTime).

## Query keys — always structured
// queryKeys.ts
export const transactionKeys = {
  all:            ['transactions']                      as const,
  byId:           (id: string) => ['transactions', id]  as const,
  list:           (filters: object) =>
                    ['transactions', 'list', filters]   as const,
}

## useQuery — reading data
const { data, isLoading, isFetching, error } = useQuery({
  queryKey:  transactionKeys.all,
  queryFn:   getTransactions,
  staleTime: 1000 * 60 * 5,    // 5 min — always set this explicitly
})

// isLoading  → true only on first load (no cached data) → show skeleton
// isFetching → true on any request including background → show subtle indicator

## useMutation — writing data
const { mutate, mutateAsync, isPending, isError, error } = useMutation({
  mutationFn: createTransaction,
  onSuccess:  (newItem) => {
    qc.invalidateQueries({ queryKey: transactionKeys.all })
    qc.setQueryData(transactionKeys.byId(newItem.id), newItem)
  },
  onError: (err) => {
    // error already typed as AppError — show to user
  },
})

## Cache operations
invalidateQueries → mark stale, TanStack refetches in background
setQueryData     → inject data directly, zero network request
removeQueries    → delete from cache (use only on delete operations)

## mutate vs mutateAsync
mutate      → fire and forget — delete button, toggle switch
mutateAsync → await the result — close modal after save, redirect after create

## Optimistic updates (for snappy UI)
onMutate: async (payload) => {
  await qc.cancelQueries({ queryKey: transactionKeys.byId(id) })
  const previous = qc.getQueryData(transactionKeys.byId(id))
  qc.setQueryData(transactionKeys.byId(id), (old) => ({ ...old, ...payload }))
  return { previous }
},
onError: (_err, _payload, context) => {
  qc.setQueryData(transactionKeys.byId(id), context?.previous)
},
onSettled: () => {
  qc.invalidateQueries({ queryKey: transactionKeys.byId(id) })
},