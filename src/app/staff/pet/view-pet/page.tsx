import { Metadata } from "next";
import ViewCatComponent from "@/app/staff/pet/view-pet/components/view-cat-component";

export const metadata: Metadata = {
  title: "View cats",
  description: "View cats for staff",
};

export default function ViewPet() {
  return (
    <div>
      <ViewCatComponent />
    </div>
  );
}
