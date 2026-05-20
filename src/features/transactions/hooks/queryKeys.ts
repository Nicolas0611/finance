export const transactionKeys = {
  all: ["transactions"] as const,
  byId: (id: string) => ["transactions", id] as const,
};
