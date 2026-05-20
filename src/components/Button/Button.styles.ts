import { cn } from "@/utils/cn";
import type { ButtonSize, ButtonVariant } from "./Button";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-inverse font-bold rounded-md hover:bg-secondary",
  secondary:
    "bg-canvas text-foreground font-bold rounded-md border border-transparent hover:bg-surface hover:border-on-beige",
  destroy: "bg-error text-inverse font-bold rounded-md hover:opacity-90",
  tertiary: "text-secondary font-normal hover:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "min-h-8 px-3 py-3",
  medium: "min-h-11 px-4 py-3",
  large: "min-h-14 px-5 py-4",
};

export const buttonStyles = {
  root: ({
    variant = "primary",
    disabled = false,
    className,
    size = "medium",
  }: {
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
    size?: ButtonSize;
  }) =>
    cn(
      "inline-flex items-center justify-center gap-2 text-preset-6 transition-colors cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ),
};
