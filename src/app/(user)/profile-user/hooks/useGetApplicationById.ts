import useToast from "@/hooks/use-toast";
import { getApplicationById } from "@/services/adopt/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useGetApplicationByAdopter() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);
  
    const getAllApplicationByIdApi = async () => {
      setPending(true);
      try {
        const res = await getApplicationById();
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
  
    return { isPending, getApplicationById };
  }