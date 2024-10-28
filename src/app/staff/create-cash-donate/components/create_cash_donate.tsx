"use client";

import { Input } from "@/components/ui/input";
import useCreateCashDonateForm from "@/app/staff/create-cash-donate/hooks/useCreateCashDonateForm";
import { useState } from "react";

import { CreateCashDonateBodyType } from "@/utils/schemaValidations/create-cash-donate.schema";
import { Backdrop } from "@/components/backdrop";

export default function CreateCashDonateForm() {
    const {
        register,
        handleSubmit,
        watch,
        onSubmit,
        errors,
        setError,
        setValue,
        isPending,
    } = useCreateCashDonateForm();

    const [email, setEmail] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    const handleFormSubmit = (data: CreateCashDonateBodyType) => {
        try {
            const form: REQUEST.TDonateCash = {
                email: data.email,
                amount: data.amount,
            };
            onSubmit(form);
        } catch (err) {}
    };

    return (
        <div className="flex">
            <form
                className="w-full h-full mb-10"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <div className="w-full flex gap-x-7">
                    <div className="w-[60%] rounded-lg">
                        <div>
                            <h4 className="text-2xl font-semibold">
                                User donates in cash.
                            </h4>
                            <div className="flex flex-col gap-y-2 mt-4">
                                <label className="text-base font-semibold">
                                    User email
                                </label>
                                <Input
                                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                                    autoComplete="off"
                                    {...register("email")}
                                />
                                {errors?.email && (
                                    <span className="text-red-500">
                                        {errors?.email?.message}
                                    </span>
                                )}
                            </div>
                            {/* Trường amount */}
                            <div className="flex flex-col gap-y-2 mt-4">
                                <label className="text-base font-semibold">
                                    Amount
                                </label>
                                <Input
                                    type="number"
                                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                                    autoComplete="off"
                                    {...register("amount", {
                                        valueAsNumber: true,
                                    })}
                                />
                                {errors?.amount && (
                                    <span className="text-red-500">
                                        {errors?.amount?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-400 px-4 py-2 rounded-lg shadow-sm mt-6"
                >
                    <span className="text-white">Submit</span>
                </button>
            </form>
            <Backdrop open={isPending} />
        </div>
    );
}
