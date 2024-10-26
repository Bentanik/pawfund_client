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
