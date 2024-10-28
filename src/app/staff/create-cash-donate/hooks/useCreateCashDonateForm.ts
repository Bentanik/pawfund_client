import { useServiceCreateCashDonate } from "@/services/donate/services";
import {
    CreateCashDonate,
    CreateCashDonateBodyType,
} from "@/utils/schemaValidations/create-cash-donate.schema";
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
    } = useForm<CreateCashDonateBodyType>({
        resolver: zodResolver(CreateCashDonate),
        defaultValues: {
            email: "",
            // amount: 0,
        },
    });

    const { mutate, isPending } = useServiceCreateCashDonate();

    const onSubmit = (data: REQUEST.TDonateCash) => {
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
