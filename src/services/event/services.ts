import { useMutation } from "@tanstack/react-query";
import { createEvent } from "@/services/event/api-services";
import useToast from "@/hooks/use-toast";

export const useServiceCreateEvent = () => {
  const { addToast } = useToast();

  return useMutation<TResponse, TMeta, REQUEST.TCreateEvent>({
    mutationFn: async (data: REQUEST.TCreateEvent) => {
      const formData = new FormData();

      const startDateAdjusted = new Date(data.startDate);
      startDateAdjusted.setHours(startDateAdjusted.getHours() + 7);

      const endDateAdjusted = new Date(data.endDate);
      endDateAdjusted.setHours(endDateAdjusted.getHours() + 7);

      formData.append("Name", data.name);
      formData.append("StartDate", startDateAdjusted.toISOString());
      formData.append("EndDate", endDateAdjusted.toISOString());
      formData.append("MaxAttendees", data.maxAttendees.toString());
      formData.append("Description", data.description);

      if (data.thumbHeroUrl) formData.append("ThumbHeroUrl", data.thumbHeroUrl);
      if (data.imagesUrl) formData.append("ImagesUrl", data.imagesUrl);

      return await createEvent(formData);
    },
    onSuccess: (data) => {
      addToast({
        type: "success",
        description: data.value.message,
        duration: 5000,
      });
    },
    onError: (error) => {
      addToast({
        type: "error",
        description: "Error creating event",
        duration: 5000,
      });
    },
  });
};
