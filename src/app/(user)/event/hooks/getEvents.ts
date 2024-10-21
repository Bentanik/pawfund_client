import useToast from "@/hooks/use-toast";
import { getAllEvents } from "@/services/event/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useCurrentEvent() {
    const { addToast } = useToast(); // Toast hook for notifications
    const [isPendingAllEvent, setPendingEventActivity] =
        useState<boolean>(false); // Track loading state

    const getAllEvent = async () => {
        setPendingEventActivity(true);
        try {
            const res = await getAllEvents();
            if (isTResponseData(res)) {
                return res as TResponseData<API.Event[]>;
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

    return { isPendingAllEvent, getAllEvent };
}
