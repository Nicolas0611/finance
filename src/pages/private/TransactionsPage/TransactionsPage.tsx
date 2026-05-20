import { useState } from "react";
import {
  LoadingSpinner,
  Table,
  TablePagination,
  type TableColumn,
} from "@/components";
import { PageDescription } from "@/layouts";
import { useTransactions } from "@/features/transactions/hooks";
import type { Transaction } from "@/features/transactions/types/models";
import { formatCurrency, formatDate } from "@/utils/format";

const columns: TableColumn<Transaction>[] = [
  {
    key: "recipient",
    header: "Recipient / Sender",
    render: (row) => row.description,
    width: "fill",
  },
  {
    key: "category",
    header: "Category",
    render: (row) => row.category,
    width: "fill",
  },
  {
    key: "date",
    header: "Transaction Date",
    render: (row) => formatDate(row.date),
    width: "wide",
  },
  {
    key: "amount",
    header: "Amount",
    align: "right",
    render: (row) => formatCurrency(row.amount),
    width: "fill",
  },
];

const TransactionsPage = () => {
  const [page, setPage] = useState(1);

  const { transactions, isLoading, isFetching, error } = useTransactions();

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <PageDescription
      title="Transactions"
      description="All your income and expenses at a glance."
    >
      <Table
        aria-label="Transactions"
        columns={columns}
        rows={transactions}
        getRowKey={(row) => row.id}
        footer={
          <TablePagination
            currentPage={page}
            totalPages={16}
            onPageChange={setPage}
          />
        }
      />
    </PageDescription>
  );
};

export default TransactionsPage;
