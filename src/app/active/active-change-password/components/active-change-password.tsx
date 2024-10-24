"use client";
import { Backdrop } from "@/components/backdrop";
import { useEffect } from "react";
import useVerifyChangePassword from "@/app/active/active-change-password/hooks/useVerifyChangePassword";

export default function ActiveChangePassword({
  children,
  userId,
}: Readonly<{
  children: React.ReactNode;
  userId: string;
}>) {
  const { isPending, verifyChangePassword } = useVerifyChangePassword();

  useEffect(() => {
    verifyChangePassword({
      userId: userId,
    });
  }, []);

  return (
    <div>
      <main>{children}</main>
      <Backdrop open={isPending} />
    </div>
  );
}