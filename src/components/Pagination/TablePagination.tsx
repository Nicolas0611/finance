import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { tablePaginationStyles as cls } from "./TablePagination.styles";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const buildPageRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): (number | "ellipsis")[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([
    1,
    totalPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);

  for (let offset = 1; offset <= siblingCount; offset += 1) {
    pages.add(currentPage - offset);
    pages.add(currentPage + offset);
  }

  const sorted = [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const range: (number | "ellipsis")[] = [];
  sorted.forEach((page, index) => {
    const previous = sorted[index - 1];
    if (previous !== undefined && page - previous > 1) {
      range.push("ellipsis");
    }
    range.push(page);
  });

  return range;
};

const TablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: TablePaginationProps) => {
  const pages = buildPageRange(currentPage, totalPages, siblingCount);
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav className={cls.root} aria-label="Table pagination">
      <button
        type="button"
        className={cls.navButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        aria-label="Previous page"
      >
        <CaretLeftIcon className={cls.navIcon} size={16} aria-hidden="true" />
        Prev
      </button>

      <div className={cls.pages} role="list">
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className={cls.ellipsis}
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              role="listitem"
              className={cls.pageButton(page === currentPage)}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        className={cls.navButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
      >
        Next
        <CaretRightIcon className={cls.navIcon} size={16} aria-hidden="true" />
      </button>
    </nav>
  );
};

export default TablePagination;
