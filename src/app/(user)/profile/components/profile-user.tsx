"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import ActiveInquiry from "@/components/active-inquiry";
import InquiryHistory from "@/components/history-inquiry";
import FavoritePets from "@/components/favorite-pet";
import Profile from "@/components/profile";
import TabButton from "@/components/ui/tab-button";
import AdoptApplication from "@/components/adopt-application-user";

export default function ProfileUser() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("profile");
    const [isFirstLoad, setIsFirstLoad] = useState(true); // Trạng thái theo dõi lần đầu vào

    // Khi component mount, kiểm tra giá trị trong localStorage hoặc searchParams
    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        const tabFromUrl = searchParams.get("tab");

        if (savedTab) {
            setActiveTab(savedTab); // Nếu có tab trong localStorage thì ưu tiên
        } else if (tabFromUrl) {
            setActiveTab(tabFromUrl); // Nếu không, lấy từ URL
        } else {
            setActiveTab("profile"); // Nếu không có gì, tab mặc định là profile
        }

        // Đánh dấu là đã tải lần đầu tiên
        if (isFirstLoad) {
            setIsFirstLoad(false); // Cập nhật trạng thái lần đầu tải
        }
    }, [pathname]);

    // Hàm xử lý khi click vào tab
    const handleTabClick = (tabName: string) => {
        const newUrl = `${pathname}?tab=${tabName}`;
        window.history.pushState({}, "", newUrl);
        setActiveTab(tabName);
        localStorage.setItem("activeTab", tabName); // Lưu tab vào localStorage
    };

    // Hàm render nội dung dựa trên tab hiện tại
    const renderContent = () => {
        if (isFirstLoad && activeTab === "profile") {
            return <Profile />;
        }

        switch (activeTab) {
            case "inquiry-history":
                return <InquiryHistory />;
            case "favorite-pets":
                return <FavoritePets />;
            case "active-inquiries":
                return <ActiveInquiry />;
            case "adopt-applications":
                return <AdoptApplication />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="min-h-screen">
            {/* Thanh điều hướng */}
            <div className="tabs mt-[100px] border-y-[1px] flex justify-center ">
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
                <TabButton
                    tabName="adopt-applications"
                    activeTab={activeTab}
                    onClick={handleTabClick}
                    label="Adopt Application"
                />
            </div>

            {/* Nội dung thay đổi */}
            <div className="py-4 px-20">{renderContent()}</div>
        </div>
    );
}
