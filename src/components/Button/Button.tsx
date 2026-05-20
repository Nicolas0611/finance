import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyles as cls } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "destroy" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  showIcon?: boolean;
  icon?: ReactNode;
  size?: ButtonSize;
}

const Button = ({
  variant = "primary",
  children,
  showIcon = false,
  disabled = false,
  icon,
  className,
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cls.root({ variant, disabled, className, size })}
      {...props}
    >
      {children}
      {showIcon && icon}
    </button>
  );
};

export default Button;
