import Adopt from "@/app/(user)/adopt/components/adopt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adopt",
  description: "Adopt",
};

export default function AdoptPage() {
  return (
    <div>
      <Adopt />
    </div>
  );
}
