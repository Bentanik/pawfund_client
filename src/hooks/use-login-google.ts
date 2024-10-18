import { loginGoogle } from "@/services/auth/api-services";
import { loginUser } from "@/stores/user-slice";
import { setStorageItem } from "@/utils/local-storage";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { store } from "@/stores/store";
import useToast from "@/hooks/use-toast";
import { isTMeta } from "@/utils/compare";
import { useRouter } from "next/navigation";

export default function useLoginGoogle() {
  const [isPendingGoogle, setIsPendingGoogle] = useState<boolean>(false);
  const { addToast } = useToast();
  const router = useRouter();

  const handleLoginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsPendingGoogle(true);
      try {
        const res = await loginGoogle({
          accessTokenGoogle: tokenResponse?.access_token,
        });
        const { authProfile, token } = res;
        // Save access token in local storage
        setStorageItem(
          "accessToken",
          `${token.tokenType} ${token.accessToken}`
        );
        // Save auth profile in redux storage
        store.dispatch(loginUser(authProfile));
        router.push("/");
      } catch (error: unknown) {
        if (isTMeta(error)) {
          if (error?.errorCode?.includes("auth_noti")) {
            addToast({
              description: error?.detail,
              type: "error",
              duration: 5000,
            });
          }
        }
      } finally {
        setIsPendingGoogle(false);
      }
    },
    onError: () => {
      setIsPendingGoogle(false);
      console.error("Google login failed");
    },
  });

  return { handleLoginGoogle, isPendingGoogle };
}
