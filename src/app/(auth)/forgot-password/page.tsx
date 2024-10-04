import React from 'react'

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ForgotPasswordForm from '@/app/(auth)/forgot-password/forgot-password-form';

export const metadata: Metadata = {
    title: "Forgot password",
    description: "Forgot password for PawFund",
};


export default function ForgotPasswordPage() {
    return (
        <div className='w-full'>
            <ForgotPasswordForm />
        </div>
    )
}
