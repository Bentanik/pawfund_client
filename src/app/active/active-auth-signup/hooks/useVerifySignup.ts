"use client";
import useToast from "@/hooks/use-toast";
import { useServiceVerifyEmail } from "@/services/auth/services";
import { isTMeta, isTResponse } from "@/utils/compare";
import { useState } from "react";

export default function useVerifySignup() {
    const { addToast } = useToast();
    const [isPending, setPending] = useState(false);
    const verifyEmail = async (email: string) => {
        setPending(true);
        try {
            const res = await useServiceVerifyEmail(email);
            if (isTResponse(res)) {
                if (res.value.code.includes("auth_noti"))
                    addToast("Success", {
                        description: res.value.message,
                        type: "success",
                        duration: 5000,
                    });
            }
        } catch (error) {
            if (isTMeta(error)) {
                if (error.errorCode.includes("auth_noti"))
                    addToast("error", {
                        description: error.detail,
                        type: "error",
                        duration: 5000,
                    });
            }
        } finally {
            setPending(false);
        }
    };

    return { isPending, verifyEmail };
}
