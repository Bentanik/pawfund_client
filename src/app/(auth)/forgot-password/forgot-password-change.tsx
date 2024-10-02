import InputAuth from "@/components/input-auth";
import { ForgotPasswordChangeBody, ForgotPasswordChangeBodyType } from "@/utils/schemaValidations/forgotPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ForgotPasswordChangeProps {
  onSubmit: (password: string) => void,
}

export default function ForgotPasswordChange({ onSubmit }: ForgotPasswordChangeProps) {
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const [typeConfirmPassword, setTypeConfirmPassword] = useState<boolean>(false);

  const { register, watch, handleSubmit, setError, formState: { errors },
    reset, } =
    useForm<ForgotPasswordChangeBodyType>({
      resolver: zodResolver(ForgotPasswordChangeBody),
      defaultValues: {
        password: "",
        confirmPassword: ""
      },
    });

  const valuePassword = watch("password");
  const valueConfirmPassword = watch("confirmPassword");


  const handleToggleTypePassword = () => {
    setTypePassword(prev => !prev);
  }

  const handleToggleTypeConfirmPassword = () => {
    setTypeConfirmPassword(prev => !prev);
  }

  const handleSubmitForm = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-[100%]">
      <h2 className="text-[1.5rem] leading-8 font-medium">Fogot password</h2>
      <span className="text-gray-500 inline-block mt-2">
        Enter your new password and confirm it to complete the recovery process!
      </span>
      <form className="pt-5 flex flex-col gap-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-y-2">
          <InputAuth id="password" label="New Password" type={typePassword === false ? "password" : "text"} autoComplete="off" register={register("password")} error={errors?.password?.message} value={valuePassword} onClickEyePassword={handleToggleTypePassword} />
          <InputAuth id="confirmpassword" label="New Confirm Password" type={typeConfirmPassword === false ? "password" : "text"} autoComplete="off" register={register("confirmPassword")} error={errors?.confirmPassword?.message} value={valueConfirmPassword} onClickEyePassword={handleToggleTypeConfirmPassword} />
        </div>
        <div className="flex flex-col gap-y-5">
          <button className={`mt-2 block w-[100%] rounded-md py-2 ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}>
            <span className="text-base text-gray-200"> Submit </span>
          </button>
          <div className="flex items-center justify-between gap-3">
            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
            <span className="text-gray-400">OR</span>
            <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
          </div>
          <div className="flex justify-between">
            <p className="text-[1rem] flex items-center gap-x-1">
              Have an account PawFund?{" "}
              <Link href="/login">
                <span className="font-bold cursor-pointer">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
