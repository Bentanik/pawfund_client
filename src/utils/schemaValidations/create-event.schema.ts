import { z } from "zod";

export const CreateEventBody = z
  .object({
    name: z.string().min(1, "Event name is required"),
    startDate: z
      .date({
        required_error: "Start date is required",
        invalid_type_error: "Invalid date format",
      })
      .refine((date) => date > new Date(), {
        message: "Start date must be in the future",
      }),
    endDate: z
      .date({
        required_error: "End date is required",
        invalid_type_error: "Invalid date format",
      })
      .refine((date) => date > new Date(), {
        message: "End date must be in the future",
      }),
    description: z.string().min(1, "Description is required"),
    maxAttendance: z
      .number({
        required_error: "Max attendance is required",
        invalid_type_error: "Must be a number",
      })
      .int("Max attendance must be an integer")
      .positive("Max attendance must be positive"),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

// Type for CreateEventBody
export type CreateEventBodyType = z.TypeOf<typeof CreateEventBody>;
