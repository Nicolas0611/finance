import type { PaginationMeta } from "./pagination";

export interface TransactionsDTO {
  data: {
    items: TransactionDTO[];
    meta: PaginationMeta;
  };
  success: boolean;
}

export interface TransactionDTO {
  amount: number;
  category: { id: string; name: string };
  categoryId: string;
  createdAt: Date;
  description: string;
  id: string;
  updatedAt: Date;
  userId: string;
}
