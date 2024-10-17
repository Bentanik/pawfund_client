import { Metadata } from "next";
import CancelDonate from "@/app/canceldonate/[orderId]/components/cancel-donate";

export const metadata: Metadata = {
  title: "Cancel donation",
  description: "Cancel donation",
};

export default function CancelDonatePage({ params }: any) {
  return (
    <div>
      <CancelDonate orderId={decodeURIComponent(params?.orderId)} />
    </div>
  );
}
