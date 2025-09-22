import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/Input";
import forgetImg from "@/assets/images/forget-password.png";
// import googleIcon from "@/assets/images/icon/google.svg";
import fIcon from "@/assets/images/lock.svg";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { Image } from "@/components/Image";

// import { Button } from "@/components/ui/button";

function ResetPassword() {
  return (
    <AuthLayout
      imageSrc={forgetImg}
      imageAlt="Login background"
      overlayTitle="Smart Call Automation for Modern Teams"
      overlaySubtitle="Teldrip Connect automates calling, logs business interactions, and delivers actionable insights—all seamlessly integrated with your favorite workflow tools for effortless communication and productivity."
    >
      <div className="text-center w-full">
        <Image
          src={fIcon}
          alt="Lock"
          width={70}
          height={80}
          className="mx-auto"
        />
      </div>
      <h3 className="text-center font-medium text-black text-xl mb-5">
        Reset Password
      </h3>

      <form className="space-y-5 w-full" noValidate>
        <div>
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            New Password
          </label>
          <Input
            type="password"
            className="w-full"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            Confirm Password
          </label>
          <Input
            type="password"
            className="w-full"
            placeholder="Confirm Password"
          />
        </div>

        <Button label={"Change password"} />
        <p className="-mt-2 text-center text-sm text-primary-400">
          <Link to="/sign-in" className="text-primary">
            Go back to Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
