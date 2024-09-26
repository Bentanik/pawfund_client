import LoginForm from "@/app/(auth)/login/login-form";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log In for PawFund",
};

export default function LogIn() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
