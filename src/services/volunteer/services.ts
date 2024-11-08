import { useMutation } from "@tanstack/react-query";
import {
    createAdoptApplication,
    getAllApplicationByAdopter,
} from "@/services/adopt/api-services";
import { getQueryClient } from "@/lib/query";

export const useServiceCreateAdoptApplication = () => {
    return useMutation<TResponse, TMeta, REQUEST.CreateAdoptApplicationBody>({
        mutationFn: createAdoptApplication,
        onSuccess: (data) => {
            console.log("Yêu cầu nhận nuôi đã được gửi:", data);
        },
    });
};

export const useServiceGetApplicationAdopt = async (
    params: REQUEST.GetApplications
) => {
    const queryClient = getQueryClient();
    return await queryClient.fetchQuery<TResponseData<API.ResponseData>, TMeta>(
        {
            queryKey: ["adopt_noti_success_09", params],
            queryFn: () => getAllApplicationByAdopter(params),
        }
    );
};

// export const getVolunteerApplication = async ({
//     eventId = "",
//     name = "",
//     status,
//     isAscCreatedDate = true,
//     pageIndex = 1,
//     pageSize = 10,
// }: REQUEST.TGetEventActivities) => {
//     const params: Record<string, any> = {};
//     if (eventId) params.eventId = eventId;
//     if (pageIndex) params.pageIndex = pageIndex;
//     if (pageSize) params.pageSize = pageSize;
//     if (name !== "all") params.Name = name;
//     if (status) params.Status = status;
//     if (isAscCreatedDate !== undefined)
//         params.IsAscCreatedDate = isAscCreatedDate;

//     const response = await request<TResponseData<API.TStaffGetActivity>>(
//         API_ENDPOINTS.GET_EVENT_ACTIVITIES_BY_EVENT_ID,
//         {
//             method: "GET",
//             params: Object.keys(params).length > 0 ? params : undefined,
//         }
//     );
//     return response.data;
// };
