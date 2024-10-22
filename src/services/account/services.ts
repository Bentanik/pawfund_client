import useToast from "@/hooks/use-toast";
import { getQueryClient } from "@/lib/query";
import {
  getAccountProfile,
  updateAvatarProfile,
} from "@/services/account/api-services";
import { useAppDispatch } from "@/stores/store";
import { updateImage } from "@/stores/user-slice";
import { useMutation } from "@tanstack/react-query";

export const useServiceGetProfileAccount = async () => {
  const queryClient = getQueryClient();
  return await queryClient.fetchQuery<
    TResponseData<API.TProfileAccount>,
    TMeta
  >({
    queryKey: ["authentication"],
    queryFn: async () => await getAccountProfile(),
  });
};

export const useServiceUpdateAvatarProfile = () => {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();
  return useMutation<
    TResponseData<API.TUpdateAvatar>,
    TMeta,
    REQUEST.TUpdateAvatar
  >({
    mutationFn: async (data: REQUEST.TUpdateAvatar) => {
      const formData = new FormData();
      formData.append("CropAvatar", data.cropAvatar);
      formData.append("FullAvatar", data.fullAvatar);

      return await updateAvatarProfile(formData);
    },
    onSuccess: (data) => {
      dispatch(
        updateImage({
          cropAvatarLink: data.value.data.cropAvatarLink,
          fullAvatarLink: data.value.data.fullAvatarLink,
        })
      );
      addToast({
        type: "success",
        description: data.value.message,
        duration: 5000,
      });
    },
  });
};
