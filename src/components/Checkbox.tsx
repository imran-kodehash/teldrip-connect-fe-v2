import React, { memo, forwardRef } from "react";
import { Check } from "lucide-react";
import checkIcon from "@/assets/images/icon/check.svg";
import { Image } from "./Image";
import { cn } from "@/lib/utils";
interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className: string;
}

const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>(
    ({ id, label, checked, onChange, disabled, className }, ref) => {
      return (
        <div className="flex items-center mb-4">
          <label
            htmlFor={id}
            className="relative flex items-center cursor-pointer"
          >
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              ref={ref}
              className={cn(
                `peer w-4 h-4 appearance-none border-2 border-gray-400 rounded-[3px]
                checked:bg-secondary-200 checked:border-primary-900
                focus:ring-2 focus:ring-primary-900 focus:outline-none
                transition-all`,
                className
              )}
            />
            {/* Tick Icon */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {checked && <img src={checkIcon} alt="" />}
            </span>
          </label>

          <label
            htmlFor={id}
            className="ms-2 text-sm font-medium text-primary-500 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      );
    }
  )
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
