export interface TransactionResponse {
  amount: number;
  category: { id: string; name: string };
  categoryId: string;
  createdAt: Date;
  description: string;
  id: string;
  updatedAt: Date;
  userId: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
}
