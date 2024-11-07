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

export const getEventActivitiesByStaff = async ({
    eventId = "",
    name = "",
    status,
    isAscCreatedDate = true,
    pageIndex = 1,
    pageSize = 10,
}: REQUEST.TGetEventActivities) => {
    const params: Record<string, any> = {};
    if (eventId) params.eventId = eventId;
    if (pageIndex) params.pageIndex = pageIndex;
    if (pageSize) params.pageSize = pageSize;
    if (name !== "all") params.Name = name;
    if (status) params.Status = status;
    if (isAscCreatedDate !== undefined)
        params.IsAscCreatedDate = isAscCreatedDate;

    const response = await request<TResponseData<API.TStaffGetActivity>>(
        API_ENDPOINTS.GET_EVENT_ACTIVITIES_BY_EVENT_ID,
        {
            method: "GET",
            params: Object.keys(params).length > 0 ? params : undefined,
        }
    );
    return response.data;
};
