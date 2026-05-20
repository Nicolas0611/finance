import type { TableColumn } from "@/components";
import type { Transaction } from "@/features/transactions/types/models";
import { formatCurrency, formatDate } from "@/utils/format";

export const columns: TableColumn<Transaction>[] = [
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
