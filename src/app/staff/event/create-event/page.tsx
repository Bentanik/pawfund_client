import { Metadata } from "next";
import CreateEventForm from "@/app/staff/event/create-event/components/create-event-form";

export const metadata: Metadata = {
  title: "Create event",
  description: "Create event for staff",
};

export default function CreateEventPage() {
  return (
    <div>
      <CreateEventForm />
    </div>
  );
}