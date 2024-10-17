import { getQueryClient } from "@/lib/query";
import { getAccountProfile } from "@/services/account/api-services";

export const useServiceGetProfileAccount = async () => {
    const queryClient = getQueryClient();
    return await queryClient.fetchQuery<
        TResponseData<API.TProfileAccount>,
        TMeta
    >({
        queryKey: ["authentication"],
        queryFn: async () => await getAccountProfile(),
    });
};
