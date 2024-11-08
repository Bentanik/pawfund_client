import useToast from "@/hooks/use-toast";
import { banUser, getAllListUser } from "@/services/admin/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { createEventActivity } from "@/services/event-activity/api-services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function usePostCreateEventActivity() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const postCreateEventActivityApi = async (
        data: REQUEST.EventActivity
    ) => {
        setPending(true);
        try {
            const res = await createEventActivity(data);
            if (isTResponseData(res)) {
                return res as TResponseData<REQUEST.EventActivity>;
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

    return { isPending, postCreateEventActivityApi };
}
