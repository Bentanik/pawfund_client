import useToast from "@/hooks/use-toast";
import { banUser, getAllListUser, unbanUser } from "@/services/admin/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function usePostUnBanUser() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const postUnBanUserApi = async (
        data: REQUEST.UnbanUser
    ) => {
        setPending(true);
        try {
            const res = await unbanUser(data);
            if (isTResponseData(res)) {
                return res as TResponseData<REQUEST.UnbanUser>;
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

    return { isPending, postUnBanUserApi };
}
