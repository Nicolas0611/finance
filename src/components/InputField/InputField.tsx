import { forwardRef } from "react";
import { inputFieldStyles as cls } from "./InputField.styles";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showColorTag?: boolean;
  colorTagClass?: string;
  showPrefix?: boolean;
  prefix?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      showColorTag = false,
      colorTagClass,
      showPrefix = false,
      prefix = "$",
      showIcon = false,
      icon,
      className,
      ...props
    },
    ref,
  ) => (
    <div className={cls.root(className)}>
      <div className={cls.content}>
        {showColorTag && <span className={cls.colorTag(colorTagClass)} />}
        {showPrefix && <span className={cls.prefix}>{prefix}</span>}
        <input ref={ref} className={cls.input} {...props} />
      </div>
      {showIcon && <span className={cls.icon}>{icon}</span>}
    </div>
  ),
);

InputField.displayName = "InputField";

export default InputField;
