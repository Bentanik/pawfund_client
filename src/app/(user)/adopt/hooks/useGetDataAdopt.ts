import useToast from "@/hooks/use-toast";
import { getCats } from "@/services/cat/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetDataAdopt() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getCatsApi = async (params: REQUEST.TGetCats) => {
    setPending(true);
    try {
      const res = await getCats(params);
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
