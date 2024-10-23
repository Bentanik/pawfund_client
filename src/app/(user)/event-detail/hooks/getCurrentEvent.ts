import useToast from "@/hooks/use-toast";
import { getApprovedEventsActivity } from "@/services/event-activity/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useCurrentEvent() {
    const { addToast } = useToast(); // Toast hook for notifications
    const [isPendingEventActivity, setPendingEventActivity] =
        useState<boolean>(false); // Track loading state

    const getApprovedEventsActivityApi = async (
        params: REQUEST.TGetApprovedEventsActivity
    ) => {
        setPendingEventActivity(true);
        try {
            const res = await getApprovedEventsActivity(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.ActivityEvent[]>;
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
            setPendingEventActivity(false);
        }
    };

    return { isPendingEventActivity, getApprovedEventsActivityApi };
}
