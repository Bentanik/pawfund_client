import API_ENDPOINTS from "@/services/adopt/api-path";

import request from "@/services/interceptor";

export const createAdoptApplication = async (body:  REQUEST.CreateAdoptApplicationBody) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE_ADOPT_APPLICATION, {
    method: "POST",
    data: body,
  });
  return response.data;
};
