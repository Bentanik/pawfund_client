import { useServiceCreateEvent } from "@/services/event/services";
import {
  CreateEventBodyType,
  CreateEventBody,
} from "@/utils/schemaValidations/create-event.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useCreateEventForm() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CreateEventBodyType>({
    resolver: zodResolver(CreateEventBody),
    defaultValues: {
      description: "",
      maxAttendance: 0,
      startDate: new Date(),
      endDate: new Date(),
      name: "",
    },
  });

  const { mutate, isPending } = useServiceCreateEvent();

  const onSubmit = (data: REQUEST.TCreateEvent, clearImages: () => void) => {
    try {
        mutate(data, {
          onSuccess: () => {
            reset();
            clearImages();
          },
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    watch,
    errors,
    setError,
    setValue,
    isPending,
  };
}
