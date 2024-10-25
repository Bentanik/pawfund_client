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

export const getUserDonates = async ({
  pageIndex = 1,
  pageSize = 10,
}: REQUEST.TGetDonates) => {
  const params: Record<string, any> = {};

  if (pageIndex) params.pageIndex = pageIndex;
  if (pageSize) params.pageSize = pageSize;

  const response = await request<TResponseData<API.TGetDonates>>(
    API_ENDPOINTS.GET_USER_DONATES,
    {
      method: "GET",
      params: Object.keys(params).length > 0 ? params : undefined,
    }
  );

  return response.data;
};
