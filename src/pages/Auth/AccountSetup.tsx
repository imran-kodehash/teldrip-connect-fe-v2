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

function AccountSetup() {
  return (
    <AuthLayout
      imageSrc={loginImage}
      imageAlt="Login background"
      overlayTitle="Smart Call Automation 
for Modern Teams"
      overlaySubtitle="Teldrip Connect automates calling, logs business interactions, and delivers actionable insights—all seamlessly integrated with your favorite workflow tools for effortless communication and productivity."
    >
      <h3 className="text-center font-medium text-black text-xl mb-5">
        Account Setup
      </h3>

      <h5 className="text-base text-primary-500 pb-4">
        Enter your details to continue.
      </h5>
      <form className="space-y-5 w-full" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-primary-500 mb-2 font-medium text-sm">
              First Name
            </label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-primary-500 mb-2 font-medium text-sm">
              Last Name
            </label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div>
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            Create Password
          </label>
          <Input
            type="password"
            className="w-full"
            placeholder="Create Password"
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
        <p className="text-[14px] text-primary-400 text-center">
          By clicking the button below, you agree to our
          <Link to="/privacy-policy" className="text-primary-900">
            {" "}
            Privacy Policy
          </Link>{" "}
          and
          <Link to="/terms" className="text-primary-900">
            {" "}
            Terms & Conditions
          </Link>
        </p>

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

export default AccountSetup;
