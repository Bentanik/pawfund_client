import InputAuth from "@/components/input-auth";
import { ForgotPasswordEmailBody, ForgotPasswordEmailBodyType } from "@/utils/schemaValidations/forgotPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface ForgotPasswordSendMailProps {
    onSubmitForm: (email: string) => void,
}

export default function ForgotPasswordSendMail({ onSubmitForm }: ForgotPasswordSendMailProps) {


    const { register, handleSubmit, setError, formState: { errors },
        reset } =
        useForm<ForgotPasswordEmailBodyType>({
            resolver: zodResolver(ForgotPasswordEmailBody),
            defaultValues: {
                email: "",
            },
        });

    const onSubmit = (data: ForgotPasswordEmailBodyType) => {
        try {
            onSubmitForm(data.email);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="w-[100%]">
            <h2 className="text-[1.5rem] leading-8 font-medium">Fogot password</h2>
            <span className="text-gray-500 inline-block mt-2">
                Enter your email to start the password recovery process!
            </span>
            <form className="pt-5 flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-2">
                    <InputAuth id="email" label="Email" type="text" autoComplete="off" register={register("email")} error={errors?.email?.message} />
                </div>
                <div className="flex flex-col gap-y-5">
                    <button className={`mt-2 block w-[100%] rounded-md py-2 ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}>
                        <span className="text-base text-gray-200">Submit</span>
                    </button>
                    <div className="flex items-center justify-between gap-3">
                        <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                        <span className="text-gray-400">OR</span>
                        <div className={`w-[50%] h-1 rounded-full ${Object.keys(errors).length === 0 ? "bg-[#7a3cdd]" : "bg-[#C3B1E1]"}`}></div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[1rem]">
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
