import {
  CreatePetBody,
  CreatePetBodyType,
} from "@/utils/schemaValidations/create-pet.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useCreatePetForm() {
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
      age: 0,
      description: "",
    },
  });

  const onSubmit = (data: CreatePetBodyType) => {
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    setError,
    setValue,
  };
}
