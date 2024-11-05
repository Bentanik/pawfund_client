import { Metadata } from "next";
import ViewBranchs from "@/app/admin/view_branchs/components/view_branchs";

export const metadata: Metadata = {
    title: "View branchs",
    description: "View branchs by admin",
};

export default function ViewBranchsPage() {
    return (
        <div>
            <ViewBranchs />
        </div>
    );
}
