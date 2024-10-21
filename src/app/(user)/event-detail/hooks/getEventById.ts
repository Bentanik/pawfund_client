import useToast from "@/hooks/use-toast";
import { getEvents } from "@/services/event/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useCurrentEvent() {
    const { addToast } = useToast(); // Toast hook for notifications
    const [isPendingEvent, setPendingEvent] = useState<boolean>(false); // Track loading state

    const getEventApi = async (params: REQUEST.TGetEventById) => {
        setPendingEvent(true);
        try {
            const res = await getEvents(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.Event>;
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
            setPendingEvent(false);
        }
    };

    return { isPendingEvent, getEventApi };
}
