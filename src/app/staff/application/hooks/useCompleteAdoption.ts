import useToast from "@/hooks/use-toast";
import {
    applyAdoptApplication,
    completeAdoption,
    getAllApplicationByAdopter,
    getAllApplicationByStaff,
} from "@/services/adopt/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useCompleteAdoption() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const completeAdoptionApi = async (
        params: REQUEST.ApplyAdoptApplication
    ) => {
        setPending(true);
        try {
            const res = await completeAdoption(params);
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

    return { isPending, completeAdoptionApi };
}
