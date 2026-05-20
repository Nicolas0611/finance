import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
import type { TransactionResponse } from "../types/models";
import type { TransactionsDTO } from "../types/dto";

const getTransactions = async (): Promise<TransactionResponse[]> => {
  const { data } = await apiClient.get<TransactionsDTO>(
    ENDPOINTS.transactions.list,
  );
  return data.data.transactions;
};

export const transactionService = {
  getTransactions,
};
