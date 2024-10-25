"use client";

import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useGetProfile from "@/app/(user)/profile/hooks/useGetProfileAccount";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditPersonal from "@/app/(user)/profile/components/edit-personal";
import EditEmail from "@/app/(user)/profile/components/edit-email";
import ChangePassword from "@/app/(user)/profile/components/change-password";
import { Skeleton } from "@/components/ui/skeleton";

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
  {
    id: "4",
    FullName: "Nguyen Mai Viet Vy", 
    Amount: 2000,
  },
  {
    id: "5",
    FullName: "Nguyen Mai Viet Vy",
    Amount: 2000,
  },
  {
    id: "6",
    FullName: "Nguyen Mai Viet Vy",
    Amount: 2000,
  },
];

export default function ProfileComponent() {
  const [editInfoPopup, setEditInfoPopup] = useState<boolean>(false);
  const [editEmailPopup, setEditEmailPopup] = useState<boolean>(false);
  const [editPasswordPopup, setEditPasswordPopup] = useState<boolean>(false);

  const getProfile = useGetProfile();

  const handleCloseEditInfo = () => {
    setEditInfoPopup(false);
  };

  const handleOpenEditInfo = () => {
    setEditInfoPopup(true);
  };

  const handleCloseEditEmail = () => {
    setEditEmailPopup(false);
  };

  const handleOpenEditEmail = () => {
    setEditEmailPopup(true);
  };

  const handleCloseEditPassword = () => {
    setEditPasswordPopup(false);
  };

  const handleOpenEditPassword = () => {
    setEditPasswordPopup(true);
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
      const res = await getProfile.getInfoProfileApi();
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
        <div className="basis-[58%] py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-box-shadown">
          {getProfile.isPending ? (
            <div>
              <div className="flex flex-col gap-y-6 px-8">
                <header className="flex items-center justify-between gap-x-3">
                  <h2 className="text-xl font-semibold">
                    Personal information
                  </h2>
                  <div className="flex items-center gap-x-3"></div>
                </header>
                <form>
                  <div className="flex flex-col gap-y-5">
                    <div className="flex items-center justify-between gap-x-3">
                      <div className="basis-1/2 flex flex-col gap-y-2">
                        <label className="text-[15px] font-medium text-gray-400">
                          First Name
                        </label>
                        <Skeleton className="w-1/2 h-[20px] rounded-full" />
                      </div>

                      <div className="basis-1/2 flex flex-col gap-y-2">
                        <label className="text-[15px] font-medium text-gray-400">
                          Last Name
                        </label>
                        <Skeleton className="w-1/2 h-[20px] rounded-full" />
                      </div>
                    </div>

                    <div className="basis-1/2 flex flex-col gap-y-2">
                      <label className="text-[15px] font-medium text-gray-400">
                        Email address
                      </label>
                      <Skeleton className="w-1/2 h-[20px] rounded-full" />
                    </div>

                    <div className="basis-1/2 flex flex-col gap-y-2">
                      <label className="text-[15px] font-medium text-gray-400">
                        Phone number
                      </label>
                      <h5 className="text-base text-gray-650">
                        <Skeleton className="w-1/2 h-[20px] rounded-full" />
                      </h5>
                    </div>

                    <div className="basis-1/2 flex flex-col gap-y-2">
                      <label className="text-[15px] font-medium text-gray-400">
                        Gender
                      </label>
                      <Skeleton className="w-1/2 h-[20px] rounded-full" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-6 px-8">
              <header className="flex items-center justify-between gap-x-3">
                <h2 className="text-xl font-semibold">Personal information</h2>
                <div className="flex items-center gap-x-3">
                  {profileInfo?.loginType === 1 && (
                    <Fragment>
                      <Button
                        type="button"
                        onClick={handleOpenEditEmail}
                        className="px-5 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300"
                      >
                        <span className="text-gray-700">Change Email</span>
                      </Button>
                      <Button
                        type="button"
                        onClick={handleOpenEditPassword}
                        className="px-3 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300"
                      >
                        <span className="text-gray-700">Change password</span>
                      </Button>
                    </Fragment>
                  )}

                  <Button
                    type="button"
                    onClick={handleOpenEditInfo}
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
                        ? `+84 ${profileInfo.phoneNumber}`
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
          )}
        </div>
        <div className="flex-1 py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-box-shadown">
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
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">Full Name</TableHead>
                    <TableHead className="text-center">Amount</TableHead>
                    <TableHead className="text-center">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {DONATE?.map((donate, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium text-center">
                        {donate.id}
                      </TableCell>
                      <TableCell className="text-center">
                        {donate.FullName}
                      </TableCell>
                      <TableCell className="text-center">
                        {donate.Amount}
                      </TableCell>
                      <TableCell className="text-center">10-10-2003</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </form>
          </div>
        </div>
        {profileInfo?.email !== "" && editInfoPopup && (
          <EditPersonal
            open={editInfoPopup}
            onClose={handleCloseEditInfo}
            information={profileInfo}
            fetchProfileApi={handleFetchProfile}
          />
        )}
        {profileInfo?.email !== "" && editEmailPopup && (
          <EditEmail
            open={editEmailPopup}
            onClose={handleCloseEditEmail}
            information={profileInfo}
            fetchProfileApi={handleFetchProfile}
          />
        )}

        {profileInfo?.email !== "" && editPasswordPopup && (
          <ChangePassword
            open={editPasswordPopup}
            onClose={handleCloseEditPassword}
          />
        )}
      </div>
    </div>
  );
}