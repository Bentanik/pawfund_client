import { useMutation } from "@tanstack/react-query";
import { createBranch } from "@/services/branch/api-services";
import useToast from "@/hooks/use-toast";

export const useServiceCreateBranch = () => {
    const { addToast } = useToast();
    return useMutation<TResponse, TMeta, REQUEST.CreateBranchBody>({
        mutationFn: async (data: REQUEST.CreateBranchBody) => {
            const formData = new FormData();
            formData.append("Name", data.name);
            formData.append("PhoneNumberOfBranch", data.phoneNumberOfBranch);
            formData.append("EmailOfBranch", data.emailOfBranch);
            formData.append("Description", data.description);
            formData.append("NumberHome", data.numberHome);
            formData.append("StreetName", data.streetName);
            formData.append("Ward", data.ward);
            formData.append("District", data.district);
            formData.append("Province", data.province);
            formData.append("PostalCode", data.postalCode);
            formData.append("Image", data.image);

            return await createBranch(formData);
        },
        onSuccess: (data) => {
            addToast({
                type: "success",
                description: data.value.message,
                duration: 5000,
            });
        },
    });
};
