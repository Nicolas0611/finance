import { cn } from '@/utils/cn'

interface RootStateProps {
  isFocused: boolean
  isHovered: boolean
}

export const inputSelectStyles = {
  root: ({ isFocused, isHovered }: RootStateProps) =>
    cn(
      'relative flex items-center gap-4 w-full min-h-11',
      'bg-surface border rounded-md',
      'py-3 px-5 transition-colors',
      isFocused
        ? 'border-foreground'
        : isHovered
          ? 'border-secondary'
          : 'border-on-beige',
    ),
  nativeSelect:
    'absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed',
  content: 'flex flex-1 items-center gap-3 pointer-events-none min-w-0',
  colorTag: 'w-4 h-4 rounded-full shrink-0',
  prefix: 'shrink-0 text-preset-6 text-on-beige',
  displayText: 'flex-1 text-preset-6 truncate',
  icon: 'shrink-0 pointer-events-none text-foreground',
}
