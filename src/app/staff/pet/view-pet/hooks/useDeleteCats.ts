import { useServiceDeleteCat } from "@/services/cat/services";

export default function useDeleteCat() {
  const { mutate, isPending } = useServiceDeleteCat();

  const onSubmit = (data: REQUEST.TDeleteCat, onLoadData: () => void) => {
    try {
      mutate(data, {
        onSuccess: () => {
          onLoadData();
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    onSubmit,
    isPending,
  };
}
