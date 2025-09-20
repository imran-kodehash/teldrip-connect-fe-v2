import React, { forwardRef, useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, icon, type = "text", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        // Toggle password visibility
        const isPassword = type === "password";
        const isNumber = type === "number";
        const inputType = isPassword ? (showPassword ? "text" : "password") : type;

        return (
            <div className="relative w-full">
                {icon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                )}

                <input
                    ref={ref}
                    type={inputType}
                    className={`
                        w-full px-3 py-2 rounded-md border border-gray-300 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                        transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                        ${icon ? "pl-10" : ""} ${error ? "border-red-500 focus:ring-red-500" : ""} 
                        ${isPassword ? "pr-10" : ""} ${className ?? ""}
                        ${isNumber ? "appearance-none" : ""} 
                    `}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}

                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";
