import { z } from "zod";

export const CreateBranchBody = z.object({
    name: z.string().min(1, "Branch name is required"),
    phoneNumberOfBranch: z.string().min(1, "Phone number is required"),
    emailOfBranch: z.string().email("Invalid email format"),
    description: z.string().min(1, "Description is required"),
    numberHome: z.string().min(1, "Number home is required"),
    streetName: z.string().min(1, "Street name is required"),
    ward: z.string().min(1, "Ward is required"),
    district: z.string().min(1, "District is required"),
    province: z.string().min(1, "Province is required"),
    postalCode: z.string().min(1, "Postal code is required"),
});

export type CreateBranchBodyType = z.TypeOf<typeof CreateBranchBody>;
