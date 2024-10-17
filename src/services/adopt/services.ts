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
      // Xử lý thành công nếu cần
      console.log("Yêu cầu nhận nuôi đã được gửi:", data);
    },
  });
};

export const useServiceGetApplicationAdopt = async (
  params: REQUEST.GetApplications
) => {
  const queryClient = getQueryClient();
  return await queryClient.fetchQuery<TResponseData<API.ResponseData>, TMeta>({
    queryKey: ["adopt_noti_success_09", params],
    queryFn: () => getAllApplicationByAdopter(params),
  });
};
