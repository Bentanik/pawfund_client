import RegisterForm from "@/app/(auth)/signup/register-form";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up for PawFund",
};

export default function SignUp() {
  return (
    <div>
      <RegisterForm />
    </div>
  )
}
