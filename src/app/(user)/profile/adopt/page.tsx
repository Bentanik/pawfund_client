import { Metadata } from "next";
import AdoptProfileComponent from "@/app/(user)/profile/adopt/components/adopt-profile-component";

export const metadata: Metadata = {
  title: "Adopt User Page",
  description: "Adopt User Pages for PawFund",
};

export default function UserAdoptPage() {
  return (
    <div>
      <AdoptProfileComponent />
    </div>
  );
}
