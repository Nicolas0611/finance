import { cn } from '@/utils/cn'

export const tablePaginationStyles = {
  root: 'flex items-center justify-between gap-4',

  navButton: cn(
    'flex items-center gap-4 min-h-11 min-w-11 px-4 py-4',
    'bg-surface text-preset-4 text-foreground rounded-md',
    'transition-colors hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed',
  ),

  navIcon: 'text-secondary shrink-0',

  pages: 'flex items-center gap-2',

  pageButton: (isActive: boolean) =>
    cn(
      'flex items-center justify-center min-h-10 min-w-10 px-4 py-4',
      'text-preset-4 rounded-md transition-colors',
      isActive
        ? 'bg-foreground text-inverse font-normal'
        : 'bg-surface text-foreground hover:bg-canvas',
    ),

  ellipsis: cn(
    'flex items-center justify-center min-h-10 min-w-10 px-4 py-4',
    'bg-surface text-preset-4 text-foreground',
  ),
}
