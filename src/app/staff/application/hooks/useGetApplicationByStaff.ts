import useToast from "@/hooks/use-toast";
import {
  getAllApplicationByAdopter,
  getAllApplicationByStaff,
} from "@/services/adopt/api-services";
import { useServiceGetApplicationAdopt } from "@/services/adopt/services";
import { isTResponseData } from "@/utils/compare";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useGetApplicationByStaff() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getAllApplicationByStaffApi = async (
    params: REQUEST.GetApplications
  ) => {
    setPending(true);
    try {
      const res = await getAllApplicationByStaff(params);
      if (isTResponseData(res)) {
        return res as TResponseData<API.ResponseData>;
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

  return { isPending, getAllApplicationByStaffApi };
}
