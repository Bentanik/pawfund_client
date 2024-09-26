'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/utils/schemaValidations/auth.schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import InputAuth from "@/components/input-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
    const { register, watch, handleSubmit, setError, formState: { errors },
        reset, } =
        useForm<LoginBodyType>({
            resolver: zodResolver(LoginBody),
            defaultValues: {
                email: "",
                password: "",
            },
        });

    const onSubmit = (data: LoginBodyType) => {
        try {
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="w-[70%] px-5 py-4 m-auto">
                <h2 className="text-[1.5rem] leading-8 font-medium">Log in</h2>
                <span className="text-gray-500 inline-block mt-2">
                    Become a hero for animals in need, starting your journey here by logging in and making a difference today.
                </span>
                <form className="pt-5 flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-y-2">
                        <InputAuth id="email" label="Email" type="text" autoComplete="off" register={register("email")} error={errors?.email?.message} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <InputAuth id="password" label="Password" type="password" autoComplete="off" register={register("password")} error={errors?.password?.message} />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <button className={`mt-2 block w-[100%] rounded-md py-2 ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}>
                            <span className="text-base text-gray-200">Log In</span>
                        </button>
                        <div className="flex items-center justify-between gap-3">
                            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                            <span className="text-gray-400">OR</span>
                            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[1rem]">
                                First time using PawFund?{" "}
                                <Link href="/signup">
                                    <span className="font-bold cursor-pointer">
                                        Sign up
                                    </span>
                                </Link>
                            </p>
                            <p className="text-[1rem]">
                                <span className="font-bold cursor-pointer">
                                    Forgot password?
                                </span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}