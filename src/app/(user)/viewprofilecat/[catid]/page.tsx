import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ViewProfileCat from "@/app/(user)/viewprofilecat/components/profile-cat";

export const metadata: Metadata = {
    title: "View profile cat",
    description: "View profile cat for PawFund",
};

export default function ViewProfileCatPage({ params }: any) {
    return (
        <div className="w-full">
            <ViewProfileCat catId={params?.catid} />
        </div>
    );
}
