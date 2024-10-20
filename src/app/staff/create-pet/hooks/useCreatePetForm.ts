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
      age: "",
      weight: 0,
      description: "",
      color: "",
    },
  });

  const onSubmit = (data: REQUEST.TCreateCat) => {
    try {
      console.log("Data: ", data);
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
  };
}
