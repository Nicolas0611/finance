import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'destroy' | 'tertiary'

const variantStyles: Record<Variant, string> = {
  primary:   'bg-foreground text-inverse font-bold rounded-md p-4 hover:bg-secondary',
  secondary: 'bg-canvas text-foreground font-bold rounded-md p-4 border border-transparent hover:bg-surface hover:border-on-beige',
  destroy:   'bg-error text-inverse font-bold rounded-md p-4 hover:opacity-90',
  tertiary:  'flex items-center gap-3 text-secondary font-normal hover:text-foreground',
}

export const buttonStyles = {
  root: ({
    variant = 'primary',
    disabled = false,
    className,
  }: {
    variant?: Variant
    disabled?: boolean
    className?: string
  }) =>
    cn(
      'text-preset-6 transition-colors cursor-pointer min-h-11',
      variantStyles[variant],
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    ),
}
