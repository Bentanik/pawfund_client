import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ViewProfileCat from "@/app/(user)/viewprofilecat/components/profile-cat";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "View profile cat",
    description: "View profile cat for PawFund",
};

export default function ViewProfileCatPage({ params }: any) {
    return (
        <div className="w-full">
            <Toaster
                position="top-right"
                richColors
                expand={true}
                style={{ marginRight: 28 }}
            />
            <ViewProfileCat catId={params?.catid} />
        </div>
    )
}