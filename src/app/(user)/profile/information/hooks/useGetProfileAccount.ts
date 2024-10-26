import useToast from "@/hooks/use-toast";
import { getAccountProfile } from "@/services/account/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetProfileAccount() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getInfoProfileApi = async () => {
    setPending(true);
    try {
      const res = await getAccountProfile();
      if (isTResponseData(res)) {
        return res as TResponseData<API.TProfileAccount>;
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
  return { getInfoProfileApi, isPending };
}
