"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import ActiveInquiry from "@/components/active-inquiry";
import InquiryHistory from "@/components/history-inquiry";
import FavoritePets from "@/components/favorite-pet";
import Profile from "@/components/profile";
import TabButton from "@/components/ui/tab-button";

export default function UserProfilePage() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("profile"); // Đặt tab mặc định là "profile"

    // Khi component mount, đọc giá trị tab từ URL
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setActiveTab(tab);
        } else {
            // Nếu không có tab trong URL, chuyển hướng về tab "profile"
            window.history.replaceState({}, "", `${pathname}?tab=profile`);
        }
    }, [searchParams, pathname]);

    // Hàm render nội dung dựa trên tab hiện tại
    const renderContent = () => {
        switch (activeTab) {
            case "inquiry-history":
                return <InquiryHistory />;
            case "favorite-pets":
                return <FavoritePets />;
            case "profile":
                return <Profile />;
            default:
                return <ActiveInquiry />;
        }
    };

    // Hàm xử lý khi click vào tab
    const handleTabClick = (tabName: string) => {
        const newUrl = `${pathname}?tab=${tabName}`;
        window.history.pushState({}, "", newUrl);
        setActiveTab(tabName);
    };

    return (
        <div className="min-h-screen">
            {/* Thanh điều hướng */}
            <div className="tabs mt-[100px] border-y-[1px] flex justify-center">
                <TabButton
                    tabName="profile"
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    label="Profile"
                />
                <TabButton
                    tabName="active-inquiries"
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    label="Active Inquiries"
                />
                <TabButton
                    tabName="inquiry-history"
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    label="Inquiry History"
                />
                <TabButton
                    tabName="favorite-pets"
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    label="Favorite Pets"
                />
            </div>

            {/* Nội dung thay đổi */}
            <div className="p-4">{renderContent()}</div>
        </div>
    );
}
