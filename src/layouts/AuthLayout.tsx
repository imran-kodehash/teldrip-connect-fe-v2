import React from "react";
import type { ReactNode } from "react";
import { Image } from "@/components/Image";
import Logo from "../assets/images/logo.svg";
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
    <div className="flex items-stretch justify-between bg-secondary-200">
      <div className="relative h-screen p-4 hidden lg:block w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          placeholder={placeholder}
          className="size-full rounded-lg object-cover object-top"
        />
        {(overlayTitle || overlaySubtitle) && (
          <div className="absolute inset-0 m-4 flex flex-col h-[30%] bottom-0 items-center justify-center text-center text-white px-6 bg-black/30">
            {overlayTitle && (
              <h1 className="text-4xl font-bold mb-2">{overlayTitle}</h1>
            )}
            {overlaySubtitle && <p className="text-lg">{overlaySubtitle} </p>}
          </div>
        )}
      </div>
      <div className="custom-scrollbar h-screen w-full  overflow-auto p-4">
        <div className="mt-8 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            width={140}
            height={35}
            className="!w-[150px]"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-md shadow-lg bg-white-100 p-7 rounded-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
