import API_ENDPOINTS from "@/services/event/api-path";
import request from "@/services/interceptor";

export const getEvents = async ({ eventId }: REQUEST.TGetEventById) => {
  const response = await request<TResponseData<API.TGetEvent>>(
    API_ENDPOINTS.GET_EVENT_BY_ID,
    {
      method: "GET",
      params: {
        id: eventId,
      },
    }
  );
  return response.data;
};

export const getAllEvents = async ({
  name = "",
  status,
  isAscCreatedDate = true,
  pageIndex = 1,
  pageSize = 10,
}: REQUEST.TGetEvents) => {
  const params: Record<string, any> = {};

  if (pageIndex) params.pageIndex = pageIndex;
  if (pageSize) params.pageSize = pageSize;
  if (name.trim() !== "") params.Name = name;
  if (status) params.Status = status;
  if (isAscCreatedDate !== undefined)
    params.IsAscCreatedDate = isAscCreatedDate;

  const response = await request<TResponseData<API.TGetEvents>>(
    API_ENDPOINTS.GET_ALL_EVENT,
    {
      method: "GET",
      params: Object.keys(params).length > 0 ? params : undefined,
    }
  );
  return response.data;
};

export const createEvent = async (body: FormData) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE_EVENT, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getEventsByStaff = async ({
    name = "",
    status,
    isAscCreatedDate = true,
    pageIndex = 1,
    pageSize = 10,
}: REQUEST.TGetEvents) => {
    const params: Record<string, any> = {};

    if (pageIndex) params.pageIndex = pageIndex;
    if (pageSize) params.pageSize = pageSize;
    if (name !== "all") params.Name = name;
    if (status) params.Status = status;
    if (isAscCreatedDate !== undefined)
        params.IsAscCreatedDate = isAscCreatedDate;

    const response = await request<TResponseData<API.TStaffGetEvents>>(
        API_ENDPOINTS.GET_ALL_EVENT_BY_STAFF,
        {
            method: "GET",
            params: Object.keys(params).length > 0 ? params : undefined,
        }
    );
    return response.data;
};
