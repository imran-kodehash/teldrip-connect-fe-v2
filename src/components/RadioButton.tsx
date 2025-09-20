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
                <div className="flex items-center mb-4">
                    <input
                        id={id}
                        type="radio"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        ref={ref}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
