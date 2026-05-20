import { useQuery } from "@tanstack/react-query";
import { transactionKeys } from "./queryKeys";
import { transactionService } from "@/features/transactions/services/transactionService";

export const useTransactionList = () =>
  useQuery({
    queryKey: transactionKeys.all,
    queryFn: transactionService.getTransactions,
    retry: false,
  });
