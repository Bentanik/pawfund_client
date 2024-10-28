import { Metadata } from "next";
import CreateCashDonateForm from "@/app/staff/create-cash-donate/components/create_cash_donate";

export const metadata: Metadata = {
    title: "Create cash donate",
    description: "Create cash donate by staff",
};

export default function CreateCashDonate() {
    return (
        <div>
            <CreateCashDonateForm />
        </div>
    );
}
