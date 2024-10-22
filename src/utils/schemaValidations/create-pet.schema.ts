import { z } from "zod";

export const CreatePetBody = z.object({
  catName: z.string().min(1, "Cat name is required"),
  weight: z.number().int().min(0, "Age must be a positive number"),
  description: z.string().min(1, "Description is required"),
});

export type CreatePetBodyType = z.TypeOf<typeof CreatePetBody>;
