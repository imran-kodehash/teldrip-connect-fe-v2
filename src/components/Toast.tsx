// src/components/ui/CustomToast.tsx
import React from "react";
import { toast } from "sonner";
import {
    CircleCheck,
    X,
    Info,
    TriangleAlert,
} from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

interface CustomIconProps {
    size?: number | string;
    className?: string;
}

interface CustomToastProps {
    customIcon?: React.ComponentType<CustomIconProps>;
    title: string;
    message?: string;
    type: ToastType;
}

const statusData: Record<
    ToastType,
    { icon: React.ComponentType<CustomIconProps>; color: string }
> = {
    success: { icon: CircleCheck, color: "#00a5a2" },
    error: { icon: X, color: "#ff7070" },
    warning: { icon: TriangleAlert, color: "#fbd466" },
    info: { icon: Info, color: "#00a5a2" },
};

const Toast: React.FC<CustomToastProps> = ({
    customIcon,
    title,
    message,
    type,
}) => {
    const { icon: DefaultIcon, color } = statusData[type];
    const Icon = customIcon ?? DefaultIcon;

    return (
        <div
            className="flex items-start py-5 px-3 gap-2 w-full rounded-md border-l-4"
            style={{
                background: `linear-gradient(176deg,#ffffff 25.46%,${color} 286.85%)`,
                borderColor: color,
            }}
        >
            <div
                className="flex size-7 items-center justify-center rounded-full"
                style={{ backgroundColor: color }}
            >
                <Icon size={20} className="text-white" />
            </div>
            <div className="flex-1">
                <p className="text-base font-semibold" style={{ color }}>
                    {title}
                </p>
                {message && (
                    <p className="text-sm font-normal text-primary-500">{message}</p>
                )}
            </div>
        </div>
    );
};

interface ShowToastProps {
    customIcon?: React.ComponentType<CustomIconProps>;
    title: string;
    message?: string;
    type: ToastType;
}

// ----------------------------------------NORMAL TOASTER--------------------------------------------------------------
export const showToast = ({
    customIcon,
    title,
    message,
    type,
}: ShowToastProps) => {
    toast[type](
        <Toast
            customIcon={customIcon}
            title={title}
            message={message}
            type={type}
        />,
        { className: "p-0" }
    );
};

// ----------------------------------------PROMISE TOASTER--------------------------------------------------------------

export const showPromiseToast = async <T,>(
    promise: Promise<T>,
    {
        loading,
        loadingType = "info",
        success,
        error,
    }: {
        loading: string;
        loadingType?: ToastType;
        success: string;
        error: string | ((err: any) => string);
    }
): Promise<T> => {
    const toastId = toast(
        <Toast title={loading} type={loadingType} />,
        { className: "p-0" }
    );

    try {
        const result = await promise;

        toast.success(
            <Toast title={success} type="success" />,
            { id: toastId, className: "p-0" }
        );

        return result;
    } catch (err) {
        const errMsg = typeof error === "function" ? error(err) : error;

        toast.error(
            <Toast title="Error" message={errMsg} type="error" />,
            { id: toastId, className: "p-0" }
        );

        throw err;
    }
};

export default Toast;
