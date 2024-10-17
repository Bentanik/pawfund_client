import API_ENDPOINTS from "@/services/donate/api-path";
import request from "@/services/interceptor";

export const donateBanking = async (body: REQUEST.TDonateBanking) => {
  const response = await request<TResponseData<API.TDonateBanking>>(
    API_ENDPOINTS.DONATE_BANKING,
    {
      method: "POST",
      data: body,
    }
  );
  return response.data;
};
