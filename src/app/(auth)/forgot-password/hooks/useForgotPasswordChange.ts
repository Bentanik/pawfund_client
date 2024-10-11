import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordChangeBody,
  ForgotPasswordChangeBodyType,
} from "@/utils/schemaValidations/forgotPassword.schema";
import { useServiceForgotPasswordChange } from "@/services/auth/services";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { resetForgotPassword } from "@/stores/auth-slice";
import useToast from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function useForgotPasswordChange() {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();
  const router = useRouter();

  const [typePassword, setTypePassword] = useState<boolean>(false);
  const [typeConfirmPassword, setTypeConfirmPassword] =
    useState<boolean>(false);

  const forgotPasswordState = useAppSelector(
    (state) => state.authSlice.forgotPassword
  );

  const { mutate, isPending } = useServiceForgotPasswordChange();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordChangeBodyType>({
    resolver: zodResolver(ForgotPasswordChangeBody),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const valuePassword = watch("password");
  const valueConfirmPassword = watch("confirmPassword");

  const handleToggleTypePassword = () => {
    setTypePassword((prev) => !prev);
  };

  const handleToggleTypeConfirmPassword = () => {
    setTypeConfirmPassword((prev) => !prev);
  };

  const handleReset = () => {
    dispatch(resetForgotPassword());
    reset();
  };

  const onSubmit = (data: ForgotPasswordChangeBodyType) => {
    try {
      const form = {
        password: data.password,
        email: forgotPasswordState.email,
        otp: forgotPasswordState.otp,
      };
      mutate(form, {
        onSuccess: async (data) => {
          if (data) {
            if (data.value.code.includes("auth_noti")) {
              addToast("Success", {
                description: data.value.message,
                type: "success",
                duration: 5000,
              });
              reset();
              router.push("/");
            }
            handleReset();
          }
        },
        onError: (error) => {},
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    isPending,
    typePassword,
    typeConfirmPassword,
    valuePassword,
    valueConfirmPassword,
    handleToggleTypePassword,
    handleToggleTypeConfirmPassword,
  };
}
