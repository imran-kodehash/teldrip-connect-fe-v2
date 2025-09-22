import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/Input";
import signUpImg from "@/assets/images/signup.png";
import googleIcon from "@/assets/images/google-icon.png";
import fIcon from "@/assets/images/lock.svg";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { Image } from "@/components/Image";

// import { Button } from "@/components/ui/button";

function SignUp() {
  return (
    <AuthLayout
      imageSrc={signUpImg}
      imageAlt="Login background"
      overlayTitle="Smart Call Automation 
for Modern Teams"
      overlaySubtitle="Teldrip Connect automates calling, logs business interactions, and delivers actionable insights—all seamlessly integrated with your favorite workflow tools for effortless communication and productivity."
    >
      <h5 className="text-center font-medium text-black text-xl mb-5">
        Sign Up
      </h5>
      <button className="mb-5 flex items-center gap-2 text-center text-base bg-secondary-300 rounded-lg w-full px-4 py-3 text-primary-500 justify-center">
        <Image
          src={googleIcon}
          alt="Logo"
          width={20}
          height={20}
          className=""
        />{" "}
        Continue with Google
      </button>
      <div className="flex items-center gap-2 pb-5">
        <div className="h-px w-full flex-1 rounded-md bg-red from-white via-primary-400/50 to-white border border-line-gradient" />
        <p className="text-xs font-normal text-primary-400">Or Use Email</p>
        <div className="h-px w-full flex-1 rounded-md line-gradient bg-red from-white  border border-line-gradient" />
      </div>
      <h5 className="text-base text-primary-500 pb-4">
        Enter your details to continue.
      </h5>
      <form className="space-y-5 w-full" noValidate>
        <div>
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            Work mail
          </label>
          <Input
            type="number"
            className="w-full"
            placeholder="Enter your Work mail"
          />
        </div>

        <Button label={"Sign Up"} />
        <p className="-mt-2 text-center text-sm text-primary-400">
          Don’t have an account?&nbsp;
          <Link to="/sign-in" className="text-primary">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
