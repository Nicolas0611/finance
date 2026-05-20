import React from "react";
import { LoadingSpinner } from "..";

interface LoaderWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  isFetching: boolean;
}
const LoaderWrapper = ({
  children,
  isLoading,
  isFetching,
}: LoaderWrapperProps) => {
  return (
    <div>
      {isLoading || isFetching ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default LoaderWrapper;
