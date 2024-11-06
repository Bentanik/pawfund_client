import { useMutation } from "@tanstack/react-query";
import { createVolunteerApplication } from "@/services/volunteer/api-services";
import { getQueryClient } from "@/lib/query";

export const useServiceCreateVolunteerApplication = () => {
    return useMutation<TResponse, TMeta, REQUEST.createVolunteerApplication>({
        mutationFn: createVolunteerApplication,
        onSuccess: (data) => {
            console.log("Yêu cầu đăng kí tình nguyện viên đã được gửi:", data);
        },
    });
};
