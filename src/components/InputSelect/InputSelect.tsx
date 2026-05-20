import { useState } from "react";
import { cn } from "@/utils/cn";
import { inputSelectStyles as cls } from "./InputSelect.styles";

interface SelectOption {
  value: string;
  label: string;
  color?: string;
}

interface InputSelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  prefix?: string;
  showIcon?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
}

const CaretDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.5 6L8 10.5L12.5 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InputSelect = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  prefix,
  showIcon = true,
  id,
  name,
  disabled,
  className,
}: InputSelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = currentValue !== "";
  const selectedOption = options.find((o) => o.value === currentValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div
      className={cn(cls.root({ isFocused, isHovered }), className)}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <select
        id={id}
        name={name}
        value={currentValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        aria-label={placeholder}
        className={cls.nativeSelect}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <div className={cls.content}>
        {selectedOption?.color && (
          <span
            className={cn(cls.colorTag, selectedOption.color)}
            aria-hidden="true"
          />
        )}
        {prefix && <span className={cls.prefix}>{prefix}</span>}
        <span
          className={cn(
            cls.displayText,
            hasValue ? "text-foreground" : "text-on-beige",
          )}
        >
          {hasValue ? selectedOption?.label : placeholder}
        </span>
      </div>

      {showIcon && (
        <span className={cls.icon} aria-hidden="true">
          <CaretDownIcon />
        </span>
      )}
    </div>
  );
};

export default InputSelect;
