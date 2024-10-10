"use client";
import useVerifySignup from "@/app/active/active-auth-signup/hooks/useVerifySignup";
import { Backdrop } from "@/components/backdrop";
import { useEffect } from "react";
import { Toaster } from "sonner";

export default function ActiveAuthSignup({
  children,
  email,
}: Readonly<{
  children: React.ReactNode;
  email: string;
}>) {
  const { isPending, verifyEmail } = useVerifySignup();

  useEffect(() => {
    verifyEmail(email);
  }, []);

  return (
    <div>
      <Toaster
        position="top-right"
        richColors
        expand={true}
        style={{ marginRight: 28 }}
      />
      <main>{children}</main>
      <Backdrop open={isPending} />
    </div>
  );
}
