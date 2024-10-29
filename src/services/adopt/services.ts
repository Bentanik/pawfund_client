import { useMutation } from "@tanstack/react-query";
import {
  applyAdoptApplication,
  completeAdoption,
  createAdoptApplication,
  getAllApplicationByAdopter,
  rejectAdoptApplication,
  rejectOutsideAdoption,
  updateAdoptApplication,
  updateChooseMeetingTime,
  updateMeetingTime,
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
  return await queryClient.fetchQuery<TResponseData<API.ResponseData>, TMeta>({
    queryKey: ["adopt_noti_success_09", params],
    queryFn: () => getAllApplicationByAdopter(params),
  });
};


export const useServiceUpdateMeetingTime = () => {
  return useMutation<TResponse, TMeta, REQUEST.GetMeetingResponse>({
    mutationFn: updateMeetingTime,
    onSuccess: (data) => {
      console.log("Đã update", data);
    },
  });
};

export const useServiceApplyAdoptApplication = async (
  params: REQUEST.ApplyAdoptApplication
) => {
  const queryClient = getQueryClient();
  return await queryClient.fetchQuery<TResponseData<APIResponse.ApiResponse>, TMeta>({
    queryKey: ["adopt_noti_success_09", params],
    queryFn: () => applyAdoptApplication(params),
  });
};

export const useServiceRejectAdoptApplication = () => {
  return useMutation<TResponse, TMeta, REQUEST.RejectAdoptionRequest>({
    mutationFn: rejectAdoptApplication,
    onSuccess: (data) => {
      console.log("Đã update", data);
    },
  });
};

export const useServiceUpdateAdoptApplication = () => {
  return useMutation<TResponse, TMeta, REQUEST.AdoptApplicationRequest>({
    mutationFn: updateAdoptApplication,
    onSuccess: (data) => {
      console.log("Đã update1", data);
    },
  });
};

export const useServiceUpdateChooseMeetingTime = () => {
  return useMutation<TResponse, TMeta, REQUEST.ChooseMeetingTime>({
    mutationFn: updateChooseMeetingTime,
    onSuccess: (data) => {
      console.log("Đã update1", data);
    },
  });
};

export const useServiceCompleteAdoption = async (
  params: REQUEST.ApplyAdoptApplication
) => {
  const queryClient = getQueryClient();
  return await queryClient.fetchQuery<TResponseData<APIResponse.ApiResponse>, TMeta>({
    queryKey: ["adopt_noti_success_09", params],
    queryFn: () => completeAdoption(params),
  });
};

export const useServiceRejectOutsideAdoption = () => {
  return useMutation<TResponse, TMeta, REQUEST.RejectAdoptionRequest>({
    mutationFn: rejectOutsideAdoption,
    onSuccess: (data) => {
      console.log("Đã update", data);
    },
  });
};