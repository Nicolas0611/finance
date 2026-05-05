import { cn } from '@/utils/cn'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
}

const SIZE: Record<NonNullable<LoadingSpinnerProps['size']>, string> = {
  sm: 'size-4',
  md: 'size-8',
  lg: 'size-12',
}

const LoadingSpinner = ({ size = 'md' }: LoadingSpinnerProps) => (
  <div className="flex items-center justify-center">
    <div className={cn(SIZE[size], 'animate-spin rounded-full border-2 border-border border-t-accent')} />
  </div>
)

export default LoadingSpinner
