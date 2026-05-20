import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
import type { TransactionsDTO } from "../types/dto";
import {
  DEFAULT_TRANSACTION_PAGE_SIZE,
  type PaginatedTransactions,
} from "../types/pagination";
import { mapPaginatedTransactions } from "../mappers/transactionMapper";

export type TransactionListParams = {
  page: number;
  pageSize?: number;
};

const getTransactions = async ({
  page,
  pageSize = DEFAULT_TRANSACTION_PAGE_SIZE,
}: TransactionListParams): Promise<PaginatedTransactions> => {
  const { data } = await apiClient.get<TransactionsDTO>(
    ENDPOINTS.transactions.list,
    { params: { page, pageSize } },
  );
  return mapPaginatedTransactions(data);
};

export const transactionService = {
  getTransactions,
};
