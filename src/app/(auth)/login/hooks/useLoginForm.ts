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
  const { mutate } = useServiceLogin();

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
            console.log("Success: ", data);
          }
        },
        onError: (error) => {
          
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
    valuePassword,
    typePassword,
    handleToggleTypePassword,
  };
}
