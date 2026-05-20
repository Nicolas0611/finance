import type { TransactionsDTO } from "../types/dto";
import type { PaginatedTransactions } from "../types/pagination";

export const mapPaginatedTransactions = (
  data: TransactionsDTO,
): PaginatedTransactions => {
  const { items, meta } = data.data;

  return {
    items: items.map((transaction) => ({
      id: transaction.id,
      description: transaction.description,
      amount: transaction.amount,
      category: transaction.category.name,
      date: transaction.createdAt,
    })),
    meta,
  };
};
