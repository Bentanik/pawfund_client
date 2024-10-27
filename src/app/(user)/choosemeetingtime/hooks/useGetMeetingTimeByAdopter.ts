import { useState } from "react";
import useToast from "@/hooks/use-toast";
import { getMeetingTimeByAdopter } from "@/services/adopt/api-services";

export default function useGetMeetingTimeByAdopter() {
  const { addToast } = useToast();
  const [isPending, setPending] = useState(false);
  const [meetingTimes, setMeetingTimes] = useState<API.MeetingTimeAdopter[]>([]); // Định nghĩa state

  const getMeetingTimeByAdopterApi = async () => {
    setPending(true);
    try {
      const res: API.ApiResponseAdopter = await getMeetingTimeByAdopter(); // Đảm bảo kiểu trả về đúng
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

  return { isPending, meetingTimes, getMeetingTimeByAdopterApi };
}
