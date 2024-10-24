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
    pageIndex,
    pageSize,
    isAscCreatedDate,
}: REQUEST.GetApplications): Promise<TResponseData<API.ResponseData>> => {
    const response = await request<TResponseData<API.ResponseData>>(
        API_ENDPOINTS.GET_ALL_APPLICATION_BY_ADOPTER,
        {
            method: "GET",
            params: {
                pageSize,
                pageIndex,
                isAscCreatedDate,
            },
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
