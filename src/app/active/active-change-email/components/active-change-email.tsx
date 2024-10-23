"use client";
import useVerifyChangeEmail from "@/app/active/active-change-email/hooks/useVerifyChangeEmail";
import { Backdrop } from "@/components/backdrop";
import { useEffect } from "react";

export default function ActiveChangeEmail({
  children,
  userId,
}: Readonly<{
  children: React.ReactNode;
  userId: string;
}>) {
  const { isPending, verifyChangeEmail } = useVerifyChangeEmail();

    useEffect(() => {
      verifyChangeEmail({
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
