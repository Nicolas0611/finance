import { useTransactionList } from "@/features/transactions/hooks";
import { DEFAULT_TRANSACTION_PAGE_SIZE } from "@/features/transactions/types/pagination";

type UseTransactionsParams = {
  page: number;
  pageSize?: number;
};

const useTransactions = ({
  page,
  pageSize = DEFAULT_TRANSACTION_PAGE_SIZE,
}: UseTransactionsParams) => {
  const { data, isLoading, isFetching, error } = useTransactionList({
    page,
    pageSize,
  });

  return {
    transactions: data?.items ?? [],
    meta: data?.meta,
    isLoading,
    isFetching,
    error,
  };
};

export default useTransactions;
