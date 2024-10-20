import API_ENDPOINTS from "@/services/account/api-path";
import request from "@/services/interceptor";

export const getAccountProfile = async () => {
    const response = await request<TResponseData<API.TProfileAccount>>(
        API_ENDPOINTS.GET_ACCOUNT_PROFILE,
        {
            method: "GET",
        }
    );
    return response.data;
};
