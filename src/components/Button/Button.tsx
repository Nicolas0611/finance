import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyles as cls } from "./Button.styles";
import { CaretDownIcon } from "@phosphor-icons/react";

type ButtonVariant = "primary" | "secondary" | "destroy" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  showIcon?: boolean;
}

const Button = ({
  variant = "primary",
  children,
  showIcon = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cls.root({ variant, disabled, className })}
      {...props}
    >
      {children}
      {variant === "tertiary" && showIcon && (
        <CaretDownIcon size={12} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
