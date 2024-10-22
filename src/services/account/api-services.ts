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

export const updateAvatarProfile = async (body: FormData) => {
  const response = await request<TResponseData<API.TUpdateAvatar>>(
    API_ENDPOINTS.UPDATE_AVATAR_PROFILE,
    {
      method: "PUT",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
