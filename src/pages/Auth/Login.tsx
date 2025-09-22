import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/Input";
import loginImage from "@/assets/images/signup.png";

import googleIcon from "@/assets/images/google-icon.png";
import Button from "@/components/Button";
import { Link, useNavigate } from "react-router-dom";
// import { Image } from "@/components/Image";
// import { GoalIcon } from "lucide-react";
import { Image } from "@/components/Image";

// import { Button } from "@/components/ui/button";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <AuthLayout
      imageSrc={loginImage}
      imageAlt="Login background"
      overlayTitle="Smart Call Automation 
for Modern Teams"
      overlaySubtitle="Teldrip Connect automates calling, logs business interactions, and delivers actionable insights—all seamlessly integrated with your favorite workflow tools for effortless communication and productivity."
    >
      <h3 className="text-center font-medium text-black text-xl mb-5">
        Sign In
      </h3>{" "}
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 w-full"
        noValidate
      >
        <div>
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            Email
          </label>
          <Input
            type="number"
            {...register("email")}
            className="w-full"
            placeholder="Enter your email"
          />
          {formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block  text-primary-500 mb-2 font-medium text-sm">
            Password
          </label>
          <Input
            type="password"
            {...register("password")}
            className="w-full"
            placeholder="Enter your password"
          />
          {formState.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formState.errors.password.message}
            </p>
          )}
          <div className="pt-1 text-right text-primary-900 text-sm">
            <Link to="/forget-password">Forgot Password?</Link>
          </div>
        </div>

        <Button label={"Login"} />
        <p className="-mt-2 text-center text-sm text-primary-400">
          <Link to="/otp" className="text-primary">
            Login{" "}
          </Link>
        </p>
        <p className="-mt-2 text-center text-sm text-primary-400">
          Don’t have an account?&nbsp;
          <Link to="/sign-up" className="text-primary">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
