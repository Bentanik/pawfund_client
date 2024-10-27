import useLogout from "@/hooks/use-logout";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { FaMoon, FaQuestionCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { TbMessageReportFilled } from "react-icons/tb";
import { Backdrop } from "@/components/backdrop";
import Link from "next/link";
import { openMessageUser } from "@/stores/difference-slice";
import { useRouter } from "next/navigation";

interface AvatarMenuProps {
  onCloseTooltip: () => void;
}

export default function AvatarMenu({ onCloseTooltip }: AvatarMenuProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userState = useAppSelector((state) => state.userSlice);
  const { handleLogout, isPending } = useLogout();

  const handleOpenTabMessage = () => {
    dispatch(openMessageUser());
  };

  const handleNavigate = (index: number) => {
    switch (index) {
      case 1: {
        router.push("/profile/information");
        onCloseTooltip();
        break;
      }
      case 3: {
        onCloseTooltip();
        handleOpenTabMessage();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-box w-72 overflow-hidden">
      <div
        className="px-4 py-3 text-lg text-gray-900 hover:bg-gray-200"
        onClick={() => handleNavigate(1)}
      >
        <div className="font-bold">Hello</div>
        <div className="text-xs text-gray-500 truncate">
          {userState.user?.firstName} {userState.user?.lastName}
        </div>
      </div>
      <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <div className="flex items-center">
              <IoSettingsSharp
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Cài đặt & quyền riêng tư</span>
            </div>
            <FiChevronRight className="text-gray-500" size={24} />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <div
              className="flex items-center"
              onClick={() => handleNavigate(3)}
            >
              <FaQuestionCircle
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Trợ giúp & hỗ trợ</span>
            </div>
            <FiChevronRight className="text-gray-500" size={24} />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <div className="flex items-center">
              <FaMoon
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Màn hình & trợ năng</span>
            </div>
            <FiChevronRight className="text-gray-500" size={24} />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <div className="flex items-center">
              <TbMessageReportFilled
                className="p-1 bg-gray-300 text-black rounded-full mr-2"
                size={30}
              />
              <span className="text-black">Đóng góp ý kiến</span>
            </div>
          </a>
        </li>
      </ul>
      <div className="py-1">
        <div
          onClick={handleLogout}
          className="cursor-pointer flex items-center justify-between px-4 py-2 bg-white rounded-lg hover:bg-gray-200"
        >
          <div className="flex items-center">
            <LuLogOut
              className="p-1 bg-gray-300 text-black rounded-full mr-2"
              size={30}
            />
            <span className="text-black">Đăng xuất</span>
          </div>
        </div>
      </div>
      <Backdrop open={isPending} />
    </div>
  );
}
