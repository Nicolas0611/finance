export interface TransactionsDTO {
  data: {
    transactions: TransactionDTO[];
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
