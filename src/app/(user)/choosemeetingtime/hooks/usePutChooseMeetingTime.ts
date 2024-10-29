import useToast from "@/hooks/use-toast";
import { updateAdoptApplication, updateChooseMeetingTime } from "@/services/adopt/api-services"; // Giả sử bạn có một hàm để cập nhật đơn xin nuôi
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useUpdateChooseMeetingTime() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const updateChooseMeetingTimeApi = async (
    data: REQUEST.ChooseMeetingTime 
  ) => {
    
    console.log("Data to update:", data);
    
    setPending(true);
    try {
      const res = await updateChooseMeetingTime(data); 
      if (isTResponseData(res)) {
        addToast({
          type: "success",
          description: "Adopt application updated successfully",
        });
        return res; 
      } else {
        addToast({
          type: "error",
          description: "Failed to update adopt application",
        });
        return null;
      }
    } catch (error) {
      addToast({
        type: "error",
        description: "An error occurred while updating the adopt application",
      });
      return null;
    } finally {
      setPending(false);
    }
  };

  return { isPending, updateChooseMeetingTimeApi };
}
