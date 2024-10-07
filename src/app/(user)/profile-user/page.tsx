"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import ActiveInquiry from "@/components/active-inquiry";
import InquiryHistory from "@/components/history-inquiry";
import FavoritePets from "@/components/favorite-pet";
import Profile from "@/components/profile";
import TabButton from "@/components/ui/tab-button";

export default function UserProfilePage() {
    // const searchParams = useSearchParams();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("profile"); // Đặt tab mặc định là "profile"

    // Khi component mount, luôn đặt về tab "profile" và thay đổi URL
    // useEffect(() => {
    //     const tab = searchParams.get("tab");
    //     // Kiểm tra nếu có giá trị 'tab' trong URL thì giữ nguyên tab đó
    //     // Nếu không có giá trị thì bạn có thể đặt giá trị mặc định
    //     if (tab) {
    //         setActiveTab(tab);
    //     } else {
    //         // Đặt tab mặc định nếu không có giá trị nào trong URL, ví dụ "profile"
    //         setActiveTab("profile");
    //     }
    // }, [pathname]);

    // Hàm render nội dung dựa trên tab hiện tại
    const renderContent = () => {
        switch (activeTab) {
            case "inquiry-history":
                return <InquiryHistory />;
            case "favorite-pets":
                return <FavoritePets />;
            case "active-inquiries":
                return <ActiveInquiry />;
            default:
                return <Profile />;
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
