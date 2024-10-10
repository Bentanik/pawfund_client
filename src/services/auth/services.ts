import { login, register, verifyEmail } from "@/services/auth/api-services";
import { useAppDispatch } from "@/stores/store";
import { loginUser } from "@/stores/user-slice";
import { setStorageItem } from "@/utils/local-storage";
import {
  LoginBodyType,
  RegisterBodyType,
} from "@/utils/schemaValidations/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query";

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

export const useServiceVerifyEmail = async (email: string) => {
  const queryClient = getQueryClient();
  return await queryClient.fetchQuery<TResponse, TMeta, API.TAuthVerifyEmail>({
    queryKey: ["authentication"],
    queryFn: async () =>
      await verifyEmail({
        email: email,
      }),
  });
};
