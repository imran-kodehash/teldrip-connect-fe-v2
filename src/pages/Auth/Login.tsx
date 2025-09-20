import React from "react";
import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthLayout from "@/layouts/AuthLayout";
import { Input } from "@/components/Input";
import loginImage from '@/assets/images/sign-in.png';
import Button from "@/components/Button";
import type { loginSchema } from "@/schemas/authSchema";

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
            overlayTitle="Welcome to Teldrip"
            overlaySubtitle="Sign in to continue"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 w-full"
                noValidate
            >
                <div>
                    <label className="block mb-1 font-medium text-sm">Email</label>
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
                    <label className="block mb-1 font-medium text-sm">Password</label>
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
                </div>

                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </AuthLayout>
    );
}
