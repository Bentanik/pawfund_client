import useToast from "@/hooks/use-toast";
import { getStaffCats } from "@/services/cat/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataStaffCats() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getCatsApi = async (params: REQUEST.TGetStaffCats) => {
    setPending(true);
    try {
      const res = await getStaffCats(params);
      if (isTResponseData(res)) {
        return res as TResponseData<API.TGetCats>;
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
  return { getCatsApi };
}
