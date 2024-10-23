import {
    forgotPasswordChange,
    forgotPasswordEmail,
    forgotPasswordOtp,
    login,
    logout,
    register,
    verifyEmail,
} from "@/services/auth/api-services";
import { useAppDispatch } from "@/stores/store";
import { loginUser, resetUser } from "@/stores/user-slice";
import { removeStorageItem, setStorageItem } from "@/utils/local-storage";
import {
    LoginBodyType,
    RegisterBodyType,
} from "@/utils/schemaValidations/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query";
import { ForgotPasswordEmailBodyType } from "@/utils/schemaValidations/forgotPassword.schema";
import { store } from "@/stores/store";
