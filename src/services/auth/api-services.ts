import API_ENDPOINTS from "@/services/auth/api-path";
import request from "@/services/interceptor";
import { LoginBodyType } from "@/utils/schemaValidations/auth.schema";

export const login = async (body: LoginBodyType) => {
  const response = await request<API.TAuthResponse>(API_ENDPOINTS.LOGIN, {
    method: "POST",
    data: body,
  });
  return response.data;
};