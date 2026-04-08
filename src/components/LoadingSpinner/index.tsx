interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASSES = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };

export const LoadingSpinner = ({ size = 'md' }: LoadingSpinnerProps) => (
  <div className="flex items-center justify-center">
    <div
      className={`${SIZE_CLASSES[size]} border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin`}
    />
  </div>
);
