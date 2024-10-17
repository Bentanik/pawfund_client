"use client";
import useToast from "@/hooks/use-toast";
import { useServiceGetProfileAccount } from "@/services/account/services";
import { updateProfile } from "@/stores/account-slice";
import { isTMeta, isTResponse, isTResponseData } from "@/utils/compare";
import { useState } from "react";
import { useStore } from "react-redux";

export default function useGetProfileAccount() {
    const { addToast } = useToast();
    const store = useStore();
    const [isPending, setPending] = useState(false);
    const getProfileAccount = async () => {
        setPending(true);
        try {
            const res = await useServiceGetProfileAccount();
            if (isTResponseData(res)) {
                const profileData: API.TProfileAccount = res.value.data;
                store.dispatch(updateProfile(profileData));
            }
        } catch (error) {
        } finally {
            setPending(false);
        }
    };

    return { isPending, getProfileAccount };
}

