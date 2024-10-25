import { useServiceCreateBranch } from "@/services/branch/services";
import {
    CreateBranchBody,
    CreateBranchBodyType,
} from "@/utils/schemaValidations/create-branch.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useCreateBranchForm() {
    const {
        register,
        watch,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
        reset,
    } = useForm<CreateBranchBodyType>({
        resolver: zodResolver(CreateBranchBody),
        defaultValues: {
            name: "",
            phoneNumberOfBranch: "",
            emailOfBranch: "",
            description: "",
            numberHome: "",
            streetName: "",
            ward: "",
            district: "",
            province: "",
            postalCode: "",
        },
    });

    const { mutate, isPending } = useServiceCreateBranch();

    const onSubmit = (data: REQUEST.CreateBranchBody) => {
        try {
            mutate(data, {
                onSuccess: () => {
                    reset();
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
