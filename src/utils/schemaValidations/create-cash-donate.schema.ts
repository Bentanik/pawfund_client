import { z } from "zod";

export const CreateCashDonate = z.object({
    email: z.string().email("Invalid email format"),
    amount: z.number().positive("Amount must be a positive number"),
});

export type CreateCashDonateBodyType = z.TypeOf<typeof CreateCashDonate>;
