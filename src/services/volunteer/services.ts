import { useMutation } from "@tanstack/react-query";
import {
    createAdoptApplication,
    getAllApplicationByAdopter,
} from "@/services/adopt/api-services";
import API_ENDPOINTS from "@/services/volunteer/api-path";

import { getQueryClient } from "@/lib/query";
import { createVolunteerApplication } from "./api-services";

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

export const useServiceCreateVolunteerApplication = () => {
    return useMutation<TResponse, TMeta, REQUEST.createVolunteerApplication>({
        mutationFn: createVolunteerApplication,
        onSuccess: (data) => {
            console.log("Yêu cầu đăng kí tình nguyện viên đã được gửi:", data);
        },
    });
};
