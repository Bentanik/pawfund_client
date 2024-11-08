import useToast from "@/hooks/use-toast";
import { getEventActivitiesByStaff } from "@/services/event-activity/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataStaffEventActivity() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const getEventActivitiesApi = async (
        params: REQUEST.TGetEventActivities
    ) => {
        setPending(true);
        try {
            const res = await getEventActivitiesByStaff(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.TStaffGetActivity>;
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
    return { getEventActivitiesApi };
}
