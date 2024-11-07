import { Metadata } from "next";
import UpdatePetForm from "@/app/staff/pet/update-pet/components/update-pet-form";

export const metadata: Metadata = {
  title: "Update pet",
  description: "Update pet for staff",
};

export default function UpdatePet({ params }: any) {
  return (
    <div>
      <UpdatePetForm petId={decodeURIComponent(params?.petId)} />
    </div>
  );
}
