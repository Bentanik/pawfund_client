import useToast from "@/hooks/use-toast";
import { updateAdoptApplication } from "@/services/adopt/api-services"; // Giả sử bạn có một hàm để cập nhật đơn xin nuôi
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";

export default function useUpdateAdoptApplication() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const updateAdoptApplicationApi = async (
    data: REQUEST.AdoptApplicationRequest // Dữ liệu cần cập nhật
  ) => {
    // In dữ liệu ra console
    console.log("Data to update:", data);
    
    setPending(true);
    try {
      const res = await updateAdoptApplication(data); // Gọi API để cập nhật đơn xin nuôi
      if (isTResponseData(res)) {
        addToast({
          type: "success",
          description: "Adopt application updated successfully",
        });
        return res; // Trả về dữ liệu đã cập nhật
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

  return { isPending, updateAdoptApplicationApi };
}
