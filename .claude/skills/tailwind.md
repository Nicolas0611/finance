# Skill: Tailwind Patterns

## The cn() utility — always use for conditional classes
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

## Styles file pattern
Every component with 3+ classes gets a .styles.ts sibling.
// TransactionCard.styles.ts
import { cn } from '@/utils/cn'

export const transactionCardStyles = {
  // Static styles — plain string
  root: cn(
    'bg-surface border border-border rounded-xl',
    'flex items-center gap-4 p-4',
    'hover:border-border-strong transition-colors'
  ),
  // Dynamic styles — function that returns string
  amount: (isExpense: boolean) => cn(
    'text-preset-5 font-bold ml-auto',
    isExpense ? 'text-error' : 'text-success'
  ),
  // Multi-variant — object lookup, never nested ternaries
  status: (s: 'safe' | 'warning' | 'danger') => cn(
    'text-preset-6 font-medium px-2 py-1 rounded-full',
    {
      safe:    'bg-success/10 text-success',
      warning: 'bg-warning/10 text-warning',
      danger:  'bg-error/10 text-error',
    }[s]
  ),
}

## Responsive — always mobile first
'w-full sm:w-1/2 lg:w-1/3'         ✅
'lg:w-1/3 sm:w-1/2 w-full'         ❌ wrong order

## Common layout patterns
// Card grid
'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'

// Sidebar layout
'flex flex-col lg:flex-row'

// Centered form
'w-full max-w-lg mx-auto'

// Full page with padding
'min-h-screen bg-canvas px-4 py-6 lg:px-8 lg:py-10'