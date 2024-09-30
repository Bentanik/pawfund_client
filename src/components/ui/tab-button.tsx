type TabButtonProps = {
    tabName: string;
    activeTab: string;
    onClick: (tabName: string) => void;
    label: string;
};

export default function TabButton({
    tabName,
    activeTab,
    onClick,
    label,
}: TabButtonProps) {
    return (
        <button
            onClick={() => onClick(tabName)}
            className={`pb-6 pt-6 px-4 ${
                activeTab === tabName
                    ? "border-b-2 text-[#2dd4bf] border-[#2dd4bf]" // Thay màu thành #2dd4bf
                    : "text-gray-500 hover:text-[#2dd4bf]"
            }`}
        >
            {label}
        </button>
    );
}
