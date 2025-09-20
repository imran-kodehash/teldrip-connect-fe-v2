import React from "react";
import type { ReactNode } from "react";
import { Image } from "@/components/Image";

interface AuthLayoutProps {
    children: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    placeholder?: string;
    overlayTitle?: string;
    overlaySubtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    imageSrc = "/auth-image.jpg",
    imageAlt = "Auth Image",
    imageWidth = 800,
    imageHeight = 600,
    placeholder,
    overlayTitle,
    overlaySubtitle,
}) => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:flex relative w-full h-full items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    placeholder={placeholder}
                    className="w-full h-full object-cover"
                />
                {(overlayTitle || overlaySubtitle) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black/30">
                        {overlayTitle && <h1 className="text-4xl font-bold mb-2">{overlayTitle}</h1>}
                        {overlaySubtitle && <p className="text-lg">{overlaySubtitle}</p>}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
