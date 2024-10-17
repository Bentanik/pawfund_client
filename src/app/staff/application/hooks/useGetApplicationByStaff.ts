import useToast from "@/hooks/use-toast";
import { getAllApplicationByAdopter, getAllApplicationByStaff } from "@/services/adopt/api-services";
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
        addToast("Failed to fetch applications", { type: "error" });
        return null;
      }
    } catch (error) {
      addToast("An error occurred while fetching applications", {
        type: "error",
      });
      return null;
    } finally {
      setPending(false);
    }
  };

  return { isPending, getAllApplicationByStaffApi };
}
