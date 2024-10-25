import useToast from "@/hooks/use-toast";
import { getUserDonates } from "@/services/donate/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetUserDonates() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const getUserDonatesApi = async (params: REQUEST.TGetDonates) => {
    setPending(true);
    try {
      const res = await getUserDonates(params);
      if (isTResponseData(res)) {
        return res as TResponseData<API.TGetDonates>;
      } else {
        addToast({
          type: "error",
          description: "Failed to fetch applications",
        });
        return null;
      }
    } catch (error) {
      return null;
    } finally {
      setPending(false);
    }
  };

  return { isPending, getUserDonatesApi };
}
