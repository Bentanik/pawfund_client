import { login } from "@/services/auth/api-services";
import { LoginBodyType } from "@/utils/schemaValidations/auth.schema";
import { useMutation } from "@tanstack/react-query";

export const useServiceLogin = () => {
  return useMutation<API.TAuthResponse, TMeta, LoginBodyType>({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("I'm first! Data:", data.token.accessToken); // Log dữ liệu trả về từ API
    },
    onError: (error) => {
        // if(error)
    }
  });
};