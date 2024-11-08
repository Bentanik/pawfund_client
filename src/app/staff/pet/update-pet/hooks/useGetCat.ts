import useToast from "@/hooks/use-toast";
import { getCatByid, getCats } from "@/services/cat/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetCat() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getCatApi = async (params: REQUEST.TGetCat) => {
    setPending(true);
    try {
      const res = await getCatByid(params);
      if (isTResponseData(res)) {
        return res as TResponseData<API.TGetCat>;
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
  return { getCatApi, isPending };
}
