import { cn } from '@/utils/cn'

export const inputFieldStyles = {
  root: (className?: string) =>
    cn(
      'flex w-full cursor-text items-center gap-4 rounded-md border bg-surface px-5 py-3 transition-colors',
      'border-on-beige hover:border-secondary focus-within:border-foreground',
      className,
    ),
  content: 'flex flex-1 items-center gap-3',
  colorTag: (extraClass?: string) => cn('size-4 shrink-0 rounded-full bg-accent', extraClass),
  prefix: 'shrink-0 text-preset-6 text-on-beige',
  input: 'flex-1 bg-transparent text-preset-6 text-foreground outline-none placeholder:text-on-beige',
  icon: 'size-4 shrink-0 text-foreground',
}
