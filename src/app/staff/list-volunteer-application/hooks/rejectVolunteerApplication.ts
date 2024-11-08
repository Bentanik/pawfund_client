import useToast from "@/hooks/use-toast";
import {} from "@/services/volunteer/api-services";
import { rejectVolunteerApplication } from "@/services/volunteer/api-services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useRejectAdoptApplication() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const rejectVolunteerApplicationApi = async (
        params: REQUEST.RejectVolunteerRequest
    ) => {
        setPending(true);
        try {
            const res = await rejectVolunteerApplication(params);
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

    return { isPending, rejectVolunteerApplicationApi };
}
