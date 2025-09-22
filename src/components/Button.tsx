import type { ButtonHTMLAttributes, ReactNode } from "react";
import { memo } from "react";
import { Image } from "./Image";
import LoadingGif from "@/assets/gif/white-button-loader.gif";
import { cn } from "@/lib/utils";

export type ButtonVariantType = "default" | "outline" | "delete" | "cancel" | "rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    variant?: ButtonVariantType;
}

const ButtonComponent = ({
    type = "button",
    label,
    onClick,
    loading = false,
    leftIcon,
    rightIcon,
    disabled = false,
    variant = "default",
    className,
    ...props
}: ButtonProps) => {
    const isDisabled = disabled || loading;

    const baseClasses =
        "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1";

    const variantClasses: Record<ButtonVariantType, string> = {
        default: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        delete: "bg-red-600 text-white hover:bg-red-700",
        cancel: "bg-gray-400 text-white hover:bg-gray-500",
        rounded: "bg-gray-400 text-white hover:bg-gray-500 rounded-full",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={cn(
                baseClasses,
                variantClasses[variant],
                isDisabled && "opacity-50 cursor-not-allowed",
                "inline-flex items-center justify-center min-w-[100px] text-white-100",
                className
            )}
            {...props}
        >
            {loading ? (
                <span className="flex items-center justify-center w-full h-full">
                    <Image
                        src={LoadingGif}
                        alt="Loading..."
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                </span>
            ) : (
                <span className="flex items-center justify-center gap-2 w-full">
                    {leftIcon && <span className="flex items-center">{leftIcon}</span>}
                    {label}
                    {rightIcon && <span className="flex items-center">{rightIcon}</span>}
                </span>
            )}
        </button>
    );
};

export const Button = memo(ButtonComponent);
