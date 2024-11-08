import API_ENDPOINTS from "@/services/volunteer/api-path";
import request from "@/services/interceptor";

export const createVolunteerApplication = async (
    body: REQUEST.createVolunteerApplication
) => {
    const response = await request<TResponse>(
        API_ENDPOINTS.CREATE_VOLUNTEER_APPLICATION,
        {
            method: "POST",
            data: body,
        }
    );
    return response.data;
};

export const useGetVolunteerApplication = async ({
    id = "",
    status,
    isAscCreatedDate = true,
    pageIndex = 1,
    pageSize = 10,
}: REQUEST.TGetVolunteerApplication) => {
    const params: Record<string, any> = {};
    if (id) params.id = id;
    if (pageIndex) params.pageIndex = pageIndex;
    if (pageSize) params.pageSize = pageSize;
    if (status) params.Status = status;
    if (isAscCreatedDate !== undefined)
        params.IsAscCreatedDate = isAscCreatedDate;

    const response = await request<TResponseData<API.TGetVolunteerApplication>>(
        API_ENDPOINTS.GET_VOLUNTEER_APPLICATION_BY_EVENT_ACTIVITY_ID,
        {
            method: "GET",
            params: Object.keys(params).length > 0 ? params : undefined,
        }
    );
    return response.data;
};

export const rejectVolunteerApplication = async (
    body: REQUEST.RejectVolunteerRequest
) => {
    const response = await request<TResponse>(
        API_ENDPOINTS.REJECT_VOLUNTEER_APPLICATION,
        {
            method: "PUT",
            data: body,
        }
    );
    return response.data;
};

export const approvedVolunteerApplication = async ({
    detailId,
}: REQUEST.ApplyVolunteerApplication): Promise<
    TResponseData<APIResponse.ApiResponse>
> => {
    const response = await request<TResponseData<APIResponse.ApiResponse>>(
        API_ENDPOINTS.APPROVED_VOLUNTEER_APPLICATION,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" }, // Ensure correct Content-Type
            data: { detailId }, // Send detailId in the request body
        }
    );

    return response.data;
};
