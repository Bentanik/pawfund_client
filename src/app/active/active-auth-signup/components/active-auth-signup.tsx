"use client";
import useVerifySignup from "@/app/active/active-auth-signup/hooks/useVerifySignup";
import { Backdrop } from "@/components/backdrop";
import { useEffect } from "react";

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
      <main>{children}</main>
      <Backdrop open={isPending} />
    </div>
  );
}
