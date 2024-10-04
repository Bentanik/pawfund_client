'use client'
import ForgotPasswordChange from "@/app/(auth)/forgot-password/forgot-password-change";
import ForgotPasswordOtp from "@/app/(auth)/forgot-password/forgot-password-otp";
import ForgotPasswordSendMail from "@/app/(auth)/forgot-password/forgot-password-sendmail";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordForm() {

    const [step, setStep] = useState(2);

    const handleNextStep = () => {
        setStep(prev => prev + 1);
    }
    const handleBackStep = () => {
        setStep(1);
    }

    const handleSubmitFormEmail = (email: string) => {
        console.log(email);
        handleNextStep();
    }

    const handleSubmitVerifyOtp = (otp: string) => {
        console.log(otp);
        handleNextStep();
    }

    const handleSubmitChangePassword = (password: string) => {
        console.log(password);
    }

    return (
        <div className="w-[70%] px-5 py-4 m-auto">
            <div className="flex flex-col gap-y-4">
                {step != 1 && <div onClick={handleBackStep}>
                    <div className="inline-flex p-2 bg-slate-200 rounded-full hover:bg-slate-300 cursor-pointer">
                        <ChevronLeft />
                    </div>
                </div>}
                {step == 1 && <ForgotPasswordSendMail onSubmitForm={handleSubmitFormEmail} />}
                {step == 2 && <ForgotPasswordOtp onSubmit={handleSubmitVerifyOtp} />}
                {step == 3 && <ForgotPasswordChange onSubmit={handleSubmitChangePassword} />}
            </div>
        </div>
    )
}
