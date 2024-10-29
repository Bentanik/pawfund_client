import useToast from "@/hooks/use-toast";
import { getDonate } from "@/services/donate/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function getThankiuOrder() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getThankyouOrderApi = async (params: REQUEST.TGetDonate) => {
    setPending(true);
    try {
      const res = await getDonate(params);
      if (isTResponseData(res)) {
        return res as TResponseData<API.TGetDonate>;
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
  return { getThankyouOrderApi, isPending };
}
