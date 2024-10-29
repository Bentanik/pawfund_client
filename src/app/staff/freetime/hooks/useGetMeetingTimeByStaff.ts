import { useState } from "react";
import useToast from "@/hooks/use-toast";
import { getMeetingTimeByStaff } from "@/services/adopt/api-services";

export default function useGetMeetingTimeByStaff() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);
  const [meetingTimes, setMeetingTimes] = useState<API.MeetingTime[]>([]); // Định nghĩa state

  const getMeetingTimeByStaffApi = async () => {
    setPending(true);
    try {
      const res: API.ApiResponse = await getMeetingTimeByStaff(); // Đảm bảo kiểu trả về đúng
      if (res?.isSuccess && res.value) {
        const meetingTimesData = res.value.data.listMeetingTime;
        console.log("Meeting times data:", meetingTimesData);
        setMeetingTimes(meetingTimesData); // Cập nhật state với meetingTimesData
        return meetingTimesData;
      } else {
        addToast({
          type: "error",
          description: res?.error?.message || "Failed to fetch meeting times",
        });
        return null;
      }
    } catch (error) {
      addToast({
        type: "error",
        description: "An error occurred while fetching meeting times",
      });
      return null;
    } finally {
      setPending(false);
    }
  };

  return { isPending, meetingTimes, getMeetingTimeByStaffApi };
}
