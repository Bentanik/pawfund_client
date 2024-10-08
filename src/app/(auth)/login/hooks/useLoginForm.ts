"use client";

import {
  LoginBody,
  LoginBodyType,
} from "@/utils/schemaValidations/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useServiceLogin } from "@/services/auth/services";

export function useLoginForm() {
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const { mutate, isPending } = useServiceLogin();

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginBodyType) => {
    try {
      mutate(data, {
        onSuccess: async (data) => {
          if (data) {
            reset();
          }
        },
        onError: (error) => {
          if (error.errorCode.includes("auth_email")) {
            setError("email", {
              type: "manual",
              message: error.detail,
            });
          }

          if (error.errorCode.includes("auth_password")) {
            setError("password", {
              type: "manual",
              message: error.detail,
            });
          }
        },
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const valuePassword = watch("password");

  const handleToggleTypePassword = () => {
    setTypePassword((prev) => !prev);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    isPending,
    valuePassword,
    typePassword,
    handleToggleTypePassword,
  };
}
