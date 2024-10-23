"use client";
import { Button } from "@/components/ui/button";
import useGetProfile from "@/app/(user)/profile/hooks/useGetProfileAccount";
import { Backdrop } from "@/components/backdrop";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditPersonal from "@/app/(user)/profile/components/edit-personal";
import { useEffect, useState } from "react";

const DONATE = [
  {
    id: "1",
    FullName: "Nguyen Mai Viet Vy",
    Amount: 2000,
  },
  {
    id: "2",
    FullName: "Nguyen Mai Viet Vy",
    Amount: 2000,
  },
  {
    id: "3",
    FullName: "Nguyen Mai Viet Vy",
    Amount: 2000,
  },
];

export default function Profile() {
  const [editPopup, setEditPopup] = useState<boolean>(false);
  const { getInfoProfileApi, isPending } = useGetProfile();

  const handleCloseEdit = () => {
    setEditPopup(false);
  };

  const handleOpenEdit = () => {
    setEditPopup(true);
  };

  const [profileInfo, setProfileInfo] = useState<API.TProfileAccount>({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: 1,
    phoneNumber: "",
    status: false,
  });

  const handleFetchProfile = async () => {
    const initialData = {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      gender: 1,
      phoneNumber: "",
      status: false,
    };
    try {
      const res = await getInfoProfileApi();
      setProfileInfo(res?.value.data || initialData);
    } catch (err) {
      setProfileInfo(initialData);
    }
  };

  useEffect(() => {
    handleFetchProfile();
  }, []);

  return (
    <div>
      <div className="flex gap-x-3">
        {/* Profile Form */}
        <div className="basis-[60%] py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-profile-box">
          <div className="flex flex-col gap-y-6 px-8">
            <header className="flex items-center justify-between gap-x-3">
              <h2 className="text-xl font-semibold">Personal information</h2>
              <div className="flex items-center gap-x-3">
                <Button
                  type="button"
                  onClick={handleOpenEdit}
                  className="px-5 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300"
                >
                  <span className="text-gray-700">Change Email</span>
                </Button>
                {profileInfo?.loginType === 1 && (
                  <Button
                    type="button"
                    onClick={handleOpenEdit}
                    className="px-3 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300"
                  >
                    <span className="text-gray-700">Change password</span>
                  </Button>
                )}

                <Button
                  type="button"
                  onClick={handleOpenEdit}
                  className="px-5 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300"
                >
                  <span className="text-gray-700">Edit information</span>
                </Button>
              </div>
            </header>
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between gap-x-3">
                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <label className="text-[15px] font-medium text-gray-400">
                      First Name
                    </label>
                    <h5 className="text-base text-gray-650">
                      {profileInfo?.firstName}
                    </h5>
                  </div>

                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <label className="text-[15px] font-medium text-gray-400">
                      Last Name
                    </label>
                    <h5 className="text-base text-gray-650">
                      {profileInfo?.lastName}
                    </h5>
                  </div>
                </div>

                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Email address
                  </label>
                  <h5 className="text-base text-gray-650">
                    {profileInfo.email}
                  </h5>
                </div>

                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Phone number
                  </label>
                  <h5 className="text-base text-gray-650">
                    {profileInfo.phoneNumber?.length > 0
                      ? profileInfo.phoneNumber
                      : "Unknown"}
                  </h5>
                </div>

                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Gender
                  </label>
                  <h5 className="text-base text-gray-650">
                    {profileInfo.gender === 1 ? "Male" : "Female"}
                  </h5>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-profile-box">
          <div className="flex flex-col gap-y-6 px-8">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Donate</h2>
              <Button className="px-5 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300">
                <span className="text-gray-700">View all</span>
              </Button>
            </header>
            <form>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {DONATE?.map((donate, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{donate.id}</TableCell>
                      <TableCell>{donate.FullName}</TableCell>
                      <TableCell>{donate.Amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </form>
          </div>
        </div>
        {profileInfo?.email !== "" && (
          <EditPersonal
            open={editPopup}
            onClose={handleCloseEdit}
            information={profileInfo}
            fetchProfileApi={handleFetchProfile}
          />
        )}
      </div>
      <Backdrop open={isPending} />
    </div>
  );
}
