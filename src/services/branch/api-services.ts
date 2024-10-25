import API_ENDPOINTS from "@/services/branch/api-path";
import request from "@/services/interceptor";

export const createBranch = async (body: FormData) => {
    const response = await request<TResponse>(API_ENDPOINTS.CREATE_BRANCH, {
        method: "POST",
        data: body,
    });
    return response.data;
};
