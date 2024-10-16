import { useMutation } from "@tanstack/react-query";
import { createAdoptApplication } from "@/services/adopt/api-services";

export const useServiceCreateAdoptApplication = () => {
  return useMutation<TResponse, TMeta, REQUEST.CreateAdoptApplicationBody>({
    mutationFn: createAdoptApplication,
    onSuccess: (data) => {
      // Xử lý thành công nếu cần
      console.log("Yêu cầu nhận nuôi đã được gửi:", data);
    },
  });
};
