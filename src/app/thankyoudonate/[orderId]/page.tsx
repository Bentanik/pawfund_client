import ThankyouDonate from "@/app/thankyoudonate/[orderId]/components/thankyou-donate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you donation",
  description: "Thank you donation",
};

export default function ThankyouPage({ params }: any) {
  return (
    <div>
      <ThankyouDonate orderId={decodeURIComponent(params?.orderId)} />
    </div>
  );
}
