import useToast from "@/hooks/use-toast";
import { useGetVolunteerApplication } from "@/services/volunteer/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataStaffVolunteerApplication() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const getVolunteerApplicationApi = async (
        params: REQUEST.TGetVolunteerApplication
    ) => {
        setPending(true);
        try {
            const res = await useGetVolunteerApplication(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.TGetVolunteerApplication>;
            } else {
                addToast({
                    type: "error",
                    description: "Failed to fetch applications",
                });
                return null;
            }
        } catch (error) {
            return null;
        } finally {
            setPending(false);
        }
    };
    return { getVolunteerApplicationApi };
}
