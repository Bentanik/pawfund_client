import useToast from "@/hooks/use-toast";
import { getAllListUser } from "@/services/admin/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useGetAllListUser() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);

    const getAllListUserApi = async (
        params: API.UserListData
    ) => {
        setPending(true);
        try {
            const res = await getAllListUser(params);
            if (isTResponseData(res)) {
                return res as TResponseData<API.UserListData>;
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

    return { isPending, getAllListUserApi };
}
