"use client";
import { Button } from "@/components/ui/button";
import useGetProfile from "@/app/(user)/profile/hooks/useGetProfileAccount";
import { Backdrop } from "@/components/backdrop";
import { useAppSelector } from "@/stores/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditPersonal from "@/components/edit-personal";

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
  const { getProfileAccount, isPending } = useGetProfile();
  const accountState = useAppSelector((state) => state.accountSlice);

  return (
    <div>
      {/* Nội dung cho Settings */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {/* Profile Form */}
        <div className="py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-profile-box">
          <div className="flex flex-col gap-y-6 px-8">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Personal information</h2>
              <Button className="px-5 rounded-2xl bg-transparent border-2 border-gray-300 hover:bg-gray-300">
                <span className="text-gray-700">Edit</span>
              </Button>
            </header>
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between gap-x-3">
                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <label className="text-[15px] font-medium text-gray-400">
                      First Name
                    </label>
                    <h5 className="text-base text-gray-650">Nguyen Mai</h5>
                  </div>

                  <div className="basis-1/2 flex flex-col gap-y-2">
                    <label className="text-[15px] font-medium text-gray-400">
                      Last Name
                    </label>
                    <h5 className="text-base text-gray-650">Nguyen Mai</h5>
                  </div>
                </div>
                {/* Email */}
                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Email address
                  </label>
                  <h5 className="text-base text-gray-650">
                    vietvyqw@gmail.com
                  </h5>
                </div>

                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Gender
                  </label>
                  <h5 className="text-base text-gray-650">Male</h5>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-profile-box">
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
        <EditPersonal open={true} onClose={() => {}} />
      </div>
      <Backdrop open={isPending} />
    </div>
  );
}
