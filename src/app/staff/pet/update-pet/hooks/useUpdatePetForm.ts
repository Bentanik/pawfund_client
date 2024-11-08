import { useServiceUpdateCat } from "@/services/cat/services";
import {
  CreatePetBody,
  CreatePetBodyType,
} from "@/utils/schemaValidations/create-pet.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useUpdatePetForm() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CreatePetBodyType>({
    resolver: zodResolver(CreatePetBody),
    defaultValues: {
      catName: "",
      weight: 0,
      description: "",
    },
  });

  const { mutate, isPending } = useServiceUpdateCat();

  const onSubmit = (data: REQUEST.TUpdateCat, onLoadData: () => void) => {
    try {
      mutate(data, {
        onSuccess: () => {
          reset();
          onLoadData();
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
