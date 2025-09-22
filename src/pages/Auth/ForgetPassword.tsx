import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/Input";
import loginImage from "@/assets/images/sign-in.png";
// import googleIcon from "@/assets/images/icon/google.svg";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

// import { Button } from "@/components/ui/button";

function ForgetPassword() {
  return (
    <div>
      <AuthLayout
        imageSrc={loginImage}
        imageAlt="Login background"
        overlayTitle="Welcome to Teldrip"
        overlaySubtitle="Sign in to continue"
      >
        <h5 className="text-center font-medium text-black text-xl mb-5">
          Forgot Password?
        </h5>

        <h5 className="text-base text-primary-500 pb-4">
          No worries, we’ll send you reset link.
        </h5>
        <form className="space-y-5 w-full" noValidate>
          <div>
            <label className="block text-primary-500 mb-2 font-medium text-sm">
              Work mail
            </label>
            <Input
              type="number"
              className="w-full"
              placeholder="Enter your work mail"
            />
          </div>

          <Button label={"Reset Password"} />
          <p className="-mt-2 text-center text-sm text-primary-400">
            <Link to="/sign-in" className="text-primary">
              Go Back Sign In
            </Link>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
}

export default ForgetPassword;
