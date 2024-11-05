import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query";
import { banUser, unbanUser } from "./api-services";

export const useServiceBanUser = () => {
  return useMutation<TResponse, TMeta, REQUEST.BanUser>({
    mutationFn: banUser,
    onSuccess: (data) => {
      
    },
  });
};

export const useServiceUnBanUser = () => {
    return useMutation<TResponse, TMeta, REQUEST.UnbanUser>({
      mutationFn: unbanUser,
      onSuccess: (data) => {
        
      },
    });
  };
