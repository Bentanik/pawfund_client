import ThankyouDonate from "@/app/thankyoudonate/[orderId]/components/thankyou-donate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank you donation",
    description: "Thank you donation",
};

export default function DonationSuccess({ params }: any) {
    return (
        <div className="w-full h-screen object-cover overflow-hidden relative">
            <div className="relative w-full h-full">
                <img
                    src="/images/bgDonation.jpg"
                    alt="bg"
                    className="w-full h-full object-fill"
                />
                <div className="absolute inset-0 bg-[#00000023] opacity-50"></div>
            </div>

            <div className="w-[80%] h-[85%] absolute top-[10%] left-[10%] border border-blue-600 rounded-xl">
                <div className="p-4 flex">
                    <div className="flex-1 bg-white py-[23.5%]">xin chào</div>
                    <div className="flex-[1.4] bg-slate-400">xin chào 2</div>
                </div>
            </div>
        </div>
    );
}
