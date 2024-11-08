import useToast from "@/hooks/use-toast";
import { approvedVolunteerApplication } from "@/services/volunteer/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useApplyVolunteerApplication() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const applyVolunteerApplicationApi = async (
        params: REQUEST.ApplyVolunteerApplication
    ) => {
        setPending(true);
        try {
            const res = await approvedVolunteerApplication(params);
            if (isTResponseData(res)) {
                return res as TResponseData<APIResponse.ApiResponse>;
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

    return { isPending, applyVolunteerApplicationApi };
}
