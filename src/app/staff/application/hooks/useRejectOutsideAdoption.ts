import useToast from "@/hooks/use-toast";
import {
    applyAdoptApplication,
    getAllApplicationByAdopter,
    getAllApplicationByStaff,
    rejectAdoptApplication,
    rejectOutsideAdoption,
} from "@/services/adopt/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useRejectOutsideAdoption() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const rejectOutsideAdoptionApi = async (
        params: REQUEST.RejectAdoptionRequest
    ) => {
        setPending(true);
        try {
            const res = await rejectOutsideAdoption(params);
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

    return { isPending, rejectOutsideAdoptionApi };
}
