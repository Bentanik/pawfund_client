import API_ENDPOINTS from "@/services/event/api-path";
import request from "@/services/interceptor";

export const getEvents = async ({ eventId }: REQUEST.TGetEventById) => {
    const response = await request<TResponseData<API.Event>>(
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
    if (name !== "all") params.Name = name;
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
