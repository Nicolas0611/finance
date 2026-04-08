export const userKeys = {
  all:  ['users']                                        as const,
  byId: (id: string) => ['users', id]                   as const,
  list: (f: Record<string, unknown>) => ['users', 'list', f] as const,
};
