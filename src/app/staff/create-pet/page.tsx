import { Metadata } from "next";
import CreatePetForm from "@/app/staff/create-pet/components/create-pet-form";

export const metadata: Metadata = {
  title: "Create pet",
  description: "Create pet for staff",
};

export default function CreatPet() {
  return (
    <div>
      <CreatePetForm />
    </div>
  );
}
