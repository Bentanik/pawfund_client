"use client";

import { useServiceVerifyChangePassword } from "@/services/account/services";

export default function useVerifyChangePassword() {
  const { mutate, isPending } = useServiceVerifyChangePassword();

  const verifyChangePassword = (body: REQUEST.TVerifyChangePassword) => {
    try {
      mutate(body);
    } catch (err) {
      console.log(err);
    }
  };

  return { isPending, verifyChangePassword };
}
