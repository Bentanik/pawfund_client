import useToast from "@/hooks/use-toast";
import { getBranches } from "@/services/branch/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataBranches() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const getBranchesApi = async (params: REQUEST.TGetBranches) => {
        setPending(true);
        try {
            const res = await getBranches(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.TGetBranches>;
            } else {
                addToast({
                    type: "error",
                    description: "Failed to fetch applications",
                });
                return null;
            }
        } catch (error) {
            addToast({
                type: "error",
                description: "An error occurred while fetching applications",
            });
            return null;
        } finally {
            setPending(false);
        }
    };
    return { getBranchesApi };
}
