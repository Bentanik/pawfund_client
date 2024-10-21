import API_ENDPOINTS from "@/services/cat/api-path";
import request from "@/services/interceptor";

export const createCat = async (body: FormData) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE_CAT, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
