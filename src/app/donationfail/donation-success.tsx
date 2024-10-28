import ThankyouDonate from "@/app/thankyoudonate/[orderId]/components/thankyou-donate";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                    alt="Background"
                    className="w-full h-full object-fill"
                />
                <div className="absolute inset-0 bg-[#00000023] opacity-50"></div>
            </div>

            <div className="w-[80%] h-[85%] absolute top-[10%] left-[10%] border border-[#ffffffa4] rounded-xl">
                <div className="p-4 flex">
                    <img
                        src="/images/donationthumb.jpg"
                        alt="Thumbnail"
                        className="flex-1 h-[590px] object-cover rounded-l-xl"
                    />
                    <div className="absolute top-[55%] left-[0] right-[0]">
                        <div className="p-10">
                            <div className="text-[white] text-[3rem] w-[50%] leading-[50px] font-semibold">
                                Thanks for your donation
                            </div>
                            <p className="text-[white] w-[40%] mt-3">
                                Thank you for your heartfelt donation! Your
                                support will provide food, shelter, and care for
                                abandoned cats in need. Thanks to your kindness,
                                these cats are one step closer to finding their
                                forever homes.
                            </p>
                        </div>
                    </div>
                    <div className="flex-[1.4] bg-white rounded-r-xl relative z-10">
                        <div className="flex justify-center mt-[100px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-[15%]"
                            >
                                <path
                                    fill="#2ab75b"
                                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                                />
                            </svg>
                        </div>
                        <div className="mt-[10px] text-center text-[2rem]">
                            Donated Successfully
                        </div>

                        <div className="mt-5 text-center px-10">
                            "Thank you, Nguyễn Tomorrow Ziết Dỹ, for your
                            generous donation! Your support will help provide
                            care and love to abandoned cats in need."
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/">
                                <Button className="text-[white] bg-black hover:bg-[#2ab75b] z-20 rounded-full p-6">
                                    Back to home page
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
