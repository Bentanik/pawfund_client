'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterBody, RegisterBodyType } from "@/utils/schemaValidations/auth.schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import InputAuth from "@/components/input-auth";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
    const { register, handleSubmit, setError, formState: { errors },
        reset, } =
        useForm<RegisterBodyType>({
            resolver: zodResolver(RegisterBody),
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            },
        });

    const onSubmit = (data: RegisterBodyType) => {
        try {
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="w-[70%] px-5 py-4 m-auto">
                <h2 className="text-[1.5rem] leading-8 font-medium">Sign up</h2>
                <span className="text-gray-500 inline-block mt-2">
                    Help us build a better world for animals in need – sign up and become part of our rescue family!
                </span>
                <form className="pt-5 flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-x-2">
                        <div className="w-1/2 flex flex-col gap-y-2">
                            <InputAuth id="firstname" label="First Name" type="text" autoComplete="off" register={register("firstName")} error={errors?.firstName?.message} />
                        </div>
                        <div className="w-1/2 flex flex-col gap-y-2">
                            <InputAuth id="lastname" label="Last Name" type="text" autoComplete="off" register={register("lastName")} error={errors?.lastName?.message} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <InputAuth id="email" label="Email" type="text" autoComplete="off" register={register("email")} error={errors?.email?.message} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <InputAuth id="password" label="Password" type="password" autoComplete="off" register={register("password")} error={errors?.password?.message} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <InputAuth id="password" label="Confirm Password" type="password" autoComplete="off" register={register("confirmPassword")} error={errors?.confirmPassword?.message} />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <button className={`mt-2 block w-[100%] rounded-md py-2 ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}>
                            <span className="text-base text-gray-200">Sign Up</span>
                        </button>
                        <div className="flex items-center justify-between gap-3">
                            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                            <span className="text-gray-400">OR</span>
                            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[1rem]">
                                Have an account PawFund?{" "}
                                <span className="font-bold cursor-pointer">
                                    Log In
                                </span>
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
