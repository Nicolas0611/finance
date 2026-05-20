import type { TransactionsDTO } from "../types/dto";
import type { Transaction } from "../types/models";

export const mapTransactions = (data: TransactionsDTO): Transaction[] => {
  const { transactions } = data.data;
  return transactions.map((transaction) => ({
    id: transaction.id,
    description: transaction.description,
    amount: transaction.amount,
    category: transaction.category.name,
    date: transaction.createdAt,
  }));
};
