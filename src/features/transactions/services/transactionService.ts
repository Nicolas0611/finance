import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
import type { Transaction } from "../types/models";
import type { TransactionsDTO } from "../types/dto";
import { mapTransactions } from "../mappers/transactionMapper";

const getTransactions = async (): Promise<Transaction[]> => {
  const { data } = await apiClient.get<TransactionsDTO>(
    ENDPOINTS.transactions.list,
  );
  return mapTransactions(data);
};

export const transactionService = {
  getTransactions,
};
