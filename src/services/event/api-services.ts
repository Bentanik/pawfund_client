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
