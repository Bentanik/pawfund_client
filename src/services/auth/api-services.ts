import API_ENDPOINTS from "@/services/auth/api-path";
import request from "@/services/interceptor";
import {
  LoginBodyType,
  RegisterBodyType,
} from "@/utils/schemaValidations/auth.schema";

export const login = async (body: LoginBodyType) => {
  const response = await request<API.TAuthResponse>(API_ENDPOINTS.LOGIN, {
    method: "POST",
    data: body,
  });
  return response.data;
};

export const register = async (body: RegisterBodyType) => {
  const response = await request<TResponse>(API_ENDPOINTS.REGISTER, {
    method: "POST",
    data: body,
  });
  return response.data;
};

export const verifyEmail = async ({ email }: API.TAuthVerifyEmail) => {
  const response = await request<TResponse>(API_ENDPOINTS.VERIFY_EMAIL, {
    method: "GET",
    params: {
      email: email,
    },
  });
  return response.data;
};
