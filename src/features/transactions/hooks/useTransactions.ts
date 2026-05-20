import { useTransactionList } from "@/features/transactions/hooks";

const useTransactions = () => {
  const {
    data: transactions = [],
    isLoading,
    isFetching,
    error,
  } = useTransactionList();

  return {
    transactions,
    isLoading,
    isFetching,
    error,
  };
};

export default useTransactions;
