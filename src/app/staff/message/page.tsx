import { Metadata } from "next";
import MessageComponent from "@/app/staff/message/components/message-component";

export const metadata: Metadata = {
  title: "Message",
  description: "Message page for PawFund",
};

export default function MessagePage() {
  return (
    <div>
      <MessageComponent />
    </div>
  );
}
