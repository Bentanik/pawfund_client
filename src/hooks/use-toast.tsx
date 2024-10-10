// src/hooks/useCustomToast.ts
import { toast } from "sonner";
import ToastAlert from "@/components/toast/toast-alert";

type ToastType = "success" | "error" | "warning";

const useToast = () => {
    const addToast = (
        title: string,
        options?: { description?: string; type?: ToastType; duration?: number }
    ) => {
        toast.custom(
            (t) => (
                <div
                >
                    <ToastAlert
                        title={title}
                        description={options?.description || ""}
                        type={options?.type || "success"}
                    />
                </div>
            ),
            {
                duration: options?.duration || 3000,
            }
        );
    };

    return { addToast };
};

export default useToast;
