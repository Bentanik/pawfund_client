import useToast from "@/hooks/use-toast";
import { updateMeetingTime } from "@/services/adopt/api-services";
import { isTResponseData } from "@/utils/compare";
import { useState } from "react";
import { parseISO, addHours } from "date-fns";

export default function useUpdateMeetingTime() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);

  const updateMeetingTimeApi = async (
    data: REQUEST.GetMeetingResponse // Dữ liệu cần cập nhật
  ) => {
    // console.log("Data to update:", data);

    // Tạo payload bằng cách chuyển đổi tất cả các meetingTime trong mảng sang UTC
    const payload: REQUEST.GetMeetingResponse = data.map((meeting) => {
      const localDate = parseISO(meeting.meetingTime); // Chuyển đổi chuỗi meetingTime thành đối tượng Date
      const utcDate = addHours(localDate, +7); // Thay đổi 7 tiếng để chuyển thành UTC

      return {
        meetingTime: utcDate.toISOString(), // Chuyển đổi thành định dạng ISO 8601
        numberOfStaffsFree: meeting.numberOfStaffsFree, // Sử dụng giá trị từ phần tử
      };
    });

    // In dữ liệu ra console
    // console.log("Payload to send:", payload);
    setPending(true);
    try {
      const res = await updateMeetingTime(payload); // Gọi API PUT
      if (isTResponseData(res)) {
        addToast({
          type: "success",
          description: "Time updated successfully",
        });
        return res as TResponse; // Trả về dữ liệu đã cập nhật
      } else {
        addToast({
          type: "error",
          description: "Failed to update time",
        });
        return null;
      }
    } catch (error) {
      addToast({
        type: "error",
        description: "An error occurred while updating the application",
      });
      return null;
    } finally {
      setPending(false);
    }
  };

  return { isPending, updateMeetingTimeApi };
}
