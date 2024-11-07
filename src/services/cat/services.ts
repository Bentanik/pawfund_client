import { useMutation } from "@tanstack/react-query";
import { createCat, deleteCat, updateCat } from "@/services/cat/api-services";
import useToast from "@/hooks/use-toast";

export const useServiceCreateCat = () => {
  const { addToast } = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TCreateCat>({
    mutationFn: async (data: REQUEST.TCreateCat) => {
      const formData = new FormData();
      formData.append("Sex", data.sex.toString());
      formData.append("Name", data.catName);
      formData.append("Age", data.age);
      formData.append("Breed", data.breed);
      formData.append("Weight", data.weight.toString());
      formData.append("Color", data.color);
      formData.append("Description", data.description);
      formData.append("sterilization", data.sterilization ? "true" : "false");

      data.images.forEach((image) => {
        formData.append("Images", image);
      });

      return await createCat(formData);
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

export const useServiceUpdateCat = () => {
  const { addToast } = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TUpdateCat>({
    mutationFn: async (data: REQUEST.TUpdateCat) => {
      const formData = new FormData();
      formData.append("CatId", data.catId);
      formData.append("Sex", data.sex.toString());
      formData.append("Name", data.catName);
      formData.append("Age", data.age);
      formData.append("Breed", data.breed);
      formData.append("Weight", data.weight.toString());
      formData.append("Color", data.color);
      formData.append("Description", data.description);
      formData.append("sterilization", data.sterilization ? "true" : "false");

      data?.newImages?.forEach((image) => {
        formData.append("NewImages", image);
      });

      data?.oldImages?.forEach((image) => {
        formData.append("OldImages", image.id || "");
      });

      return await updateCat(formData);
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

export const useServiceDeleteCat = () => {
  const { addToast } = useToast();
  return useMutation<TResponse, TMeta, REQUEST.TDeleteCat>({
    mutationFn: deleteCat,
    onSuccess: (data) => {
      addToast(
        {
          type: "success",
          description: data.value.message,
          duration: 5000,
        },
        false
      );
    },
    onError: () => {
      addToast({
        type: "error",
        description: "Please try again!",
        duration: 5000,
      });
    },
  });
};
