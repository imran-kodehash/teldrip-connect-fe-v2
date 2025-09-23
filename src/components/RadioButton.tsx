import React, { memo, forwardRef } from "react";

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioButton = memo(
  forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ id, label, name, value, checked, onChange, disabled = false }, ref) => {
      return (
        <div className="flex items-center mb-4 cursor-pointer">
          <input
            id={id}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            className="w-4 h-4 text-primary-900 bg-white border-gray-300 rounded-full focus:ring-0 accent-primary-900"
          />
          <label
            htmlFor={id}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      );
    }
  )
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
