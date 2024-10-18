import {
  forgotPasswordChange,
  forgotPasswordEmail,
  forgotPasswordOtp,
  login,
  logout,
  register,
  verifyEmail,
} from "@/services/auth/api-services";
import { useAppDispatch } from "@/stores/store";
import { loginUser, resetUser } from "@/stores/user-slice";
import { removeStorageItem, setStorageItem } from "@/utils/local-storage";
import {
  LoginBodyType,
  RegisterBodyType,
} from "@/utils/schemaValidations/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query";
import { ForgotPasswordEmailBodyType } from "@/utils/schemaValidations/forgotPassword.schema";
import { store } from "@/stores/store";
import useToast from "@/hooks/use-toast";

export const useServiceLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation<API.TAuthResponse, TMeta, LoginBodyType>({
    mutationFn: login,
    onSuccess: (data) => {
      const { authProfile, token } = data;
      // Save access token in local storage
      setStorageItem("accessToken", `${token.tokenType} ${token.accessToken}`);
      // Save auth profile in redux storage
      dispatch(loginUser(authProfile));
    },
  });
};

export const useServiceRegister = () => {
  return useMutation<TResponse, TMeta, RegisterBodyType>({
    mutationFn: register,
  });
};

export const useServiceVerifyEmail = () => {
  const { addToast } = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TAuthVerifyEmail>({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      addToast({
        type: "success",
        description: data.value.message,
        duration: 5000,
      });
    },
  });
};

export const useServiceForgotPasswordEmail = () => {
  return useMutation<TResponseData, TMeta, ForgotPasswordEmailBodyType>({
    mutationFn: forgotPasswordEmail,
    onSuccess: () => {},
  });
};

export const useServiceForgotPasswordOtp = () => {
  return useMutation<TResponseData, TMeta, API.TAuthForgotPasswordOtp>({
    mutationFn: forgotPasswordOtp,
  });
};

export const useServiceForgotPasswordChange = () => {
  return useMutation<TResponseData, TMeta, API.TAuthForgotPasswordChange>({
    mutationFn: forgotPasswordChange,
  });
};

export const useServiceLogout = () => {
  return useMutation<TResponseData, TMeta>({
    mutationFn: logout,
    onSuccess: (data) => {
      removeStorageItem("accessToken");
      store.dispatch(resetUser());
    },
    onError: (error) => {
      removeStorageItem("accessToken");
      store.dispatch(resetUser());
    },
  });
};
