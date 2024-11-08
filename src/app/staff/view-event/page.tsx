import { Metadata } from "next";
import ViewEventOfBranch from "@/app/staff/view-event/components/view-event";

export const metadata: Metadata = {
    title: "Event of branch",
    description: "Staff view event of branch",
};

export default function ViewEventOfBranchPage() {
    return (
        <div>
            <ViewEventOfBranch />
        </div>
    );
}
