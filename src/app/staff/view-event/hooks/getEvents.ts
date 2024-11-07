import useToast from "@/hooks/use-toast";
import { getEventsByStaff } from "@/services/event/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataStaffEvent() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const getEventsApi = async (params: REQUEST.TGetEvents) => {
        setPending(true);
        try {
            const res = await getEventsByStaff(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.TStaffGetEvents>;
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
    return { getEventsApi };
}
