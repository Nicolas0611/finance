import { cn } from "@/utils/cn";

/** Column widths from Figma: 120px (narrow) and 200px (wide). First column fills the rest. */
export type TableColumnWidth = "fill" | "narrow" | "wide";

export const tableStyles = {
  root: (className?: string) =>
    cn("w-full bg-surface rounded-lg p-3 flex flex-col gap-6", className),

  scroll: "w-full overflow-x-auto",

  table: "w-full min-w-[62.25rem] table-fixed border-collapse",

  col: (width: TableColumnWidth = "fill") =>
    cn(width === "narrow" && "w-30", width === "wide" && "w-50"),

  headerCell: (align: "left" | "right" = "left") =>
    cn(
      "px-4 py-3 text-preset-5 text-secondary font-normal",
      align === "right" ? "text-right" : "text-left",
    ),

  row: (showDivider: boolean) => cn(showDivider && "border-b border-border"),

  cell: (align: "left" | "right" = "left") =>
    cn(
      "px-4 py-5 text-preset-4 text-secondary align-middle",
      align === "right" ? "text-right" : "text-left",
    ),

  amount: (isIncome: boolean) =>
    cn(
      "text-preset-4 font-bold",
      isIncome ? "text-success" : "text-foreground",
    ),

  footer: "pt-6",
};
