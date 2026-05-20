import { useState } from "react";
import { Table, TablePagination, type TableColumn } from "@/components";

interface TransactionRow {
  id: string;
  recipient: string;
  category: string;
  date: string;
  amount: string;
  isIncome: boolean;
}

const SAMPLE_ROWS: TransactionRow[] = [
  {
    id: "1",
    recipient: "Emma Richardson",
    category: "General",
    date: "19 Aug 2024",
    amount: "+$75.50",
    isIncome: true,
  },
  {
    id: "2",
    recipient: "Savory Bites Bistro",
    category: "Dining Out",
    date: "19 Aug 2024",
    amount: "-$55.50",
    isIncome: false,
  },
  {
    id: "3",
    recipient: "James Thompson",
    category: "General",
    date: "18 Aug 2024",
    amount: "-$42.30",
    isIncome: false,
  },
];

const columns: TableColumn<TransactionRow>[] = [
  {
    key: "recipient",
    header: "Recipient / Sender",
    render: (row) => row.recipient,
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
    render: (row) => row.date,
    width: "wide",
  },
  {
    key: "amount",
    header: "Amount",
    align: "right",
    render: (row) => row.amount,
    width: "fill",
  },
];

const TransactionsPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="p-8">
      <h1 className="text-preset-1 font-bold text-foreground mb-2">
        Transactions
      </h1>
      <p className="text-preset-3 text-secondary mb-8">
        All your income and expenses at a glance.
      </p>
      <Table
        aria-label="Transactions"
        columns={columns}
        rows={SAMPLE_ROWS}
        getRowKey={(row) => row.id}
        footer={
          <TablePagination
            currentPage={page}
            totalPages={16}
            onPageChange={setPage}
          />
        }
      />
    </div>
  );
};

export default TransactionsPage;
