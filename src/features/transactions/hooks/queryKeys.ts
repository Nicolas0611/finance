import type { TransactionListParams } from "../services/transactionService";

export const transactionKeys = {
  all: ["transactions"] as const,
  list: (params: TransactionListParams) =>
    ["transactions", "list", params] as const,
  byId: (id: string) => ["transactions", id] as const,
};
