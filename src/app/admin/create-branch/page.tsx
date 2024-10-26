import { Metadata } from "next";
import CreateBranchForm from "@/app/admin/create-branch/components/create-branch";

export const metadata: Metadata = {
    title: "Create branch",
    description: "Create branch by admin",
};

export default function CreateBranch() {
    return (
        <div>
            <CreateBranchForm />
        </div>
    );
}
