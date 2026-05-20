import { useState } from "react";
import { Table, TablePagination } from "@/components";
import { PageDescription } from "@/layouts";
import { useTransactions } from "@/features/transactions/hooks";
import LoaderWrapper from "@/components/LoaderWrapper/LoaderWrapper";
import { columns } from "./TransactionPage.data";

const TransactionsPage = () => {
  const [page, setPage] = useState(1);

  const { transactions, isLoading, isFetching } = useTransactions();

  return (
    <PageDescription
      title="Transactions"
      description="All your income and expenses at a glance."
    >
      <LoaderWrapper isLoading={isLoading} isFetching={isFetching}>
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
      </LoaderWrapper>
    </PageDescription>
  );
};

export default TransactionsPage;
