import API_ENDPOINTS from "@/services/adopt/api-path";
import request from "@/services/interceptor";

export const createAdoptApplication = async (
  body: REQUEST.CreateAdoptApplicationBody
) => {
  const response = await request<TResponse>(
    API_ENDPOINTS.CREATE_ADOPT_APPLICATION,
    {
      method: "POST",
      data: body,
    }
  );
  return response.data;
};

export const getAllApplicationByAdopter = async ({
  status = "",
  pageIndex,
  pageSize,
  isAscCreatedDate,
}: REQUEST.GetApplications): Promise<TResponseData<API.ResponseData>> => {
  const params: Record<string, any> = {};

  if (status) params.status = status !== "all" ? status : "";
  if (pageIndex) params.pageIndex = pageIndex;
  if (pageSize) params.pageSize = pageSize;
  if (isAscCreatedDate) params.isAscCreatedDate = isAscCreatedDate;
  const response = await request<TResponseData<API.ResponseData>>(
    API_ENDPOINTS.GET_ALL_APPLICATION_BY_ADOPTER,
    {
      method: "GET",
      params: params,
    }
  );

  return response.data;
};

export const getAllApplicationByStaff = async ({
  pageIndex,
  pageSize,
  isAscCreatedDate,
  status,
}: REQUEST.GetApplications): Promise<TResponseData<API.ResponseData>> => {
  const response = await request<TResponseData<API.ResponseData>>(
    API_ENDPOINTS.GET_ALL_APPLICATION_BY_STAFF,
    {
      method: "GET",
      params: {
        pageSize,
        pageIndex,
        isAscCreatedDate,
        status,
      },
    }
  );

  return response.data;
};

export const updateMeetingTime = async (body: REQUEST.GetMeetingResponse) => {
  const response = await request<TResponse>(
    API_ENDPOINTS.PUT_UPDATE_MEETING_TIME,
    {
      method: "PUT",
      data: body,
    }
  );
  return response.data;
};

export const getMeetingTimeByStaff = async () => {
  const response = await request<API.ApiResponse>(
    API_ENDPOINTS.GET_MEETING_TIME_BY_STAFF,
    {
      method: "GET",
    }
  );
  return response.data;
};


export const applyAdoptApplication = async ({
  Id
}: REQUEST.ApplyAdoptApplication): Promise<TResponseData<APIResponse.ApiResponse>> => {
  const response = await request<TResponseData<APIResponse.ApiResponse>>(
    API_ENDPOINTS.PUT_APPLY_ADOPT_APPLICATION,
    {
      method: "PUT",
      params: {
        Id
      },
    }
  );

  return response.data;
};

export const rejectAdoptApplication = async (body: REQUEST.RejectAdoptionRequest) => {
  const response = await request<TResponse>(
    API_ENDPOINTS.PUT_REJECT_ADOPT_APPLICATION,
    {
      method: "PUT",
      data: body,
    }
  );
  return response.data;
};

export const updateAdoptApplication = async (body: REQUEST.AdoptApplicationRequest) => {
  const response = await request<TResponse>(
    API_ENDPOINTS.UPDATE_ADOPT_APPLICATION,
    {
      method: "PUT",
      data: body,
    }
  );
  return response.data;
};


export const getMeetingTimeByAdopter = async () => {
  const response = await request<API.ApiResponseAdopter>(
    API_ENDPOINTS.GET_MEETING_TIME_BY_ADOPTER,
    {
      method: "GET",
    }
  );
  return response.data;
};