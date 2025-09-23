import type { ButtonHTMLAttributes, ReactNode } from "react";
import { memo } from "react";
import { Image } from "./Image";
import LoadingGif from "@/assets/gif/white-button-loader.gif";
import { cn } from "@/lib/utils";

export type ButtonVariantType =
  | "default"
  | "outline"
  | "outlinebg"
  | "delete"
  | "cancel"
  | "rounded";

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
    "flex items-center justify-center gap-2 px-4 py-3 w-full rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variantClasses: Record<ButtonVariantType, string> = {
    default: "bg-primary-900 text-white-100 hover:bg-[#4D3EAA]",
    outline:
      "border border-primary-900 hover:bg-primary-900 hover:text-white-100 text-primary-900",
    outlinebg:
      "border border-primary-900 bg-primary-200 hover:bg-primary-900 hover:text-white-100 text-primary-900",
    delete: "bg-red-100 text-white-100 hover:bg-red-200",
    cancel:
      "border border-primary-400 bg-secondary-300  text-primary-400 hover:bg-primary-400 hover:text-white-100",
    rounded: "bg-primary-900 text-white-100 hover:bg3-[#4D3EAA] !rounded-full",
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
        "inline-flex items-center justify-center min-w-[100px] ",
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
