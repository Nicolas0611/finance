import type { ReactNode } from 'react'
import { tableStyles as cls, type TableColumnWidth } from './Table.styles'

type TableColumnAlign = 'left' | 'right'

/**
 * Defines one column in the table: a header label and how each row renders its cell.
 *
 * @example
 * {
 *   key: 'amount',
 *   header: 'Amount',
 *   align: 'right',
 *   width: 'wide',
 *   render: (row) => <TableAmountCell amount={row.displayAmount} isIncome={!row.isExpense} />,
 * }
 */
export interface TableColumn<T> {
  /** Stable id for the column (used as React `key` on header and cells). */
  key: string
  /** Text shown in the table header row. */
  header: string
  /** Cell alignment. Defaults to `'left'`. Amount columns typically use `'right'`. */
  align?: TableColumnAlign
  /**
   * Column width preset from the Figma table layout.
   * - `fill` — grows to use remaining space (e.g. Recipient / Sender)
   * - `narrow` — 7.5rem / 120px (Category, Transaction Date)
   * - `wide` — 12.5rem / 200px (Amount)
   */
  width?: TableColumnWidth
  /** Renders the cell content for a given row. Can return any React node. */
  render: (row: T) => ReactNode
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  rows: T[]
  /**
   * Returns a unique string id for each row. React uses this as the `key` on each
   * `<tr>`, so lists update correctly when rows are added, removed, or reordered.
   *
   * Use a stable id from your data (e.g. `row.id`), not the array index.
   *
   * @example getRowKey={(row) => row.id}
   */
  getRowKey: (row: T) => string
  /** Optional slot below the table (e.g. `<TablePagination />`). */
  footer?: ReactNode
  /** Accessible name for the table (recommended). */
  'aria-label'?: string
  className?: string
}

/**
 * Semantic HTML data table (`table`, `thead`, `tbody`, `th`, `td`) styled to match
 * the personal-finance Figma layout. Column widths are set via `<colgroup>`.
 *
 * @example
 * <Table
 *   aria-label="Transactions"
 *   columns={columns}
 *   rows={transactions}
 *   getRowKey={(row) => row.id}
 * />
 */
const Table = <T,>({
  columns,
  rows,
  getRowKey,
  footer,
  'aria-label': ariaLabel,
  className,
}: TableProps<T>) => (
  <section className={cls.root(className)}>
    <div className={cls.scroll}>
      <table className={cls.table} aria-label={ariaLabel}>
        <colgroup>
          {columns.map((column) => (
            <col key={column.key} className={cls.col(column.width)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cls.headerCell(column.align)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1
            return (
              <tr key={getRowKey(row)} className={cls.row(!isLast)}>
                {columns.map((column) => (
                  <td key={column.key} className={cls.cell(column.align)}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    {footer ? <div className={cls.footer}>{footer}</div> : null}
  </section>
)

export default Table
