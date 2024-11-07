import API_ENDPOINTS from "@/services/admin/api-path";
import request from "@/services/interceptor";

export const getAllListUser = async ({
    pageIndex,
    pageSize,
    totalCount,
    totalPages,
    hasNextPage,
    hasPreviousPage,
}: API.UserListData): Promise<TResponseData<API.UserListData>> => {
    const response = await request<TResponseData<API.UserListData>>(
        API_ENDPOINTS.GET_LIST_USER,
        {
            method: "GET",
            params: {
                pageIndex,
                pageSize,
                totalCount,
                totalPages,
                hasNextPage,
                hasPreviousPage,
            },
        }
    );

    return response.data;
};

export const banUser = async (body: REQUEST.BanUser) => {
    const response = await request<TResponse>(API_ENDPOINTS.POST_BAN_USER, {
        method: "POST",
        data: body,
    });
    return response.data;
};

export const unbanUser = async (body: REQUEST.UnbanUser) => {
    const response = await request<TResponse>(API_ENDPOINTS.POST_UNBAN_USER, {
        method: "POST",
        data: body,
    });
    return response.data;
};
