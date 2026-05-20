import { useQuery } from "@tanstack/react-query";
import { transactionKeys } from "./queryKeys";
import {
  transactionService,
  type TransactionListParams,
} from "@/features/transactions/services/transactionService";

export const useTransactionList = (params: TransactionListParams) =>
  useQuery({
    queryKey: transactionKeys.list(params),
    queryFn: () => transactionService.getTransactions(params),
    retry: false,
  });
