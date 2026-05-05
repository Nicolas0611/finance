import { forwardRef } from 'react'
import { inputFieldStyles as cls } from './InputField.styles'

const CaretDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showColorTag?: boolean
  colorTagClass?: string
  showPrefix?: boolean
  prefix?: string
  showIcon?: boolean
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      showColorTag = false,
      colorTagClass,
      showPrefix = false,
      prefix = '$',
      showIcon = false,
      className,
      ...props
    },
    ref,
  ) => (
    <label className={cls.root(className)}>
      <div className={cls.content}>
        {showColorTag && <span className={cls.colorTag(colorTagClass)} />}
        {showPrefix && <span className={cls.prefix}>{prefix}</span>}
        <input ref={ref} className={cls.input} {...props} />
      </div>
      {showIcon && <span className={cls.icon}><CaretDownIcon /></span>}
    </label>
  ),
)

InputField.displayName = 'InputField'

export default InputField
