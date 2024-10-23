import API_ENDPOINTS from "@/services/event-activity/api-path";
import request from "@/services/interceptor";

export const getApprovedEventsActivity = async ({
    eventId,
}: REQUEST.TGetApprovedEventsActivity) => {
    const response = await request<TResponseData<API.ActivityEvent[]>>(
        API_ENDPOINTS.GET_APPROVED_EVENTS_ACTIVITY,
        {
            method: "GET",
            params: {
                id: eventId,
            },
        }
    );
    return response.data;
};
