import { useMutation } from "@tanstack/react-query";
import { donateBanking } from "@/services/donate/api-services";
import { donateCash } from "@/services/donate/api-services";
import useToast from "@/hooks/use-toast";

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

export const useServiceCreateCashDonate = () => {
    const { addToast } = useToast();
    return useMutation<TResponse, TMeta, REQUEST.TDonateCash>({
        mutationFn: async (data: REQUEST.TDonateCash) => {
            const formData = new FormData();
            formData.append("Email", data.email);
            formData.append("Amount", data.amount.toString());

            return await donateCash(formData);
        },
        onSuccess: (data) => {
            addToast({
                type: "success",
                description: data.value.message,
                duration: 5000,
            });
        },
    });
};
