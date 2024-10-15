import { z } from "zod";

export const CreatePetBody = z
  .object({
    firstName: z.string().trim().min(2).max(256),
    lastName: z.string().trim().min(2).max(256),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100),
    phoneNumber: z.string().length(10),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type CreatePetBodyType = z.TypeOf<typeof CreatePetBody>;
