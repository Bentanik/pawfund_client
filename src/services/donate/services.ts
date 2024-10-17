import { useMutation } from "@tanstack/react-query";
import { donateBanking } from "@/services/donate/api-services";

export const useServiceDonateBanking = () => {
  return useMutation<
    TResponseData<API.TDonateBanking>,
    TMeta,
    REQUEST.TDonateBanking
  >({
    mutationFn: donateBanking,
    onSuccess: (data) => {
      window.open(data.value.data.paymentUrl, "_blank");
    },
  });
};
