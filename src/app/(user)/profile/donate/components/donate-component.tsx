"use client";

import PaginatedComponent from "@/components/paginated";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dates, PaymentMethods } from "@/const/donate";
import useGetUserDonates from "@/hooks/use-get-user-donates";
import { parseDateTimeString } from "@/utils/date";
import { formatCurrencyVND } from "@/utils/format-currency";
import { useEffect, useState } from "react";

export default function DonateComponent() {
  const [paymentMethod, setPaymentMethod] = useState<string>("all");
  const [date, setDate] = useState<string>(Dates[0].value);

  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const [donates, setDonates] = useState<API.Donate[]>([]);

  const handleChangeMinAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinAmount(e.target.value);
  };

  const handleChangeMaxAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAmount(e.target.value);
  };

  const getDonates = useGetUserDonates();

  const handleGetData = async (pageIndex: number) => {
    try {
      const form: REQUEST.TGetDonates = {
        pageIndex: pageIndex,
        pageSize: 10,
        paymentMethodType: paymentMethod,
        minAmount: minAmount,
        maxAmount: maxAmount,
        isDateDesc: date,
      };
      const res = await getDonates.getUserDonatesApi(form);
      setDonates(res?.value.data?.items || []);
      setTotalPage(res?.value?.data?.totalPages || 1);
    } catch (err) {
      setDonates([]);
      setTotalPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleGetData(page);
  };

  useEffect(() => {
    if (currentPage !== 1) {
      handleGetData(1);
      setCurrentPage(1);
    } else handleGetData(currentPage);
  }, [paymentMethod, minAmount, maxAmount, date]);

  return (
    <div>
      <div className="basis-[58%] py-5 border-1 border-gray-300 rounded-2xl bg-white shadow-box-shadown">
        <div className="flex flex-col gap-y-6 px-8">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Donate</h2>
          </header>
          <div>
            <div>
              <div className="grid grid-cols-4 gap-x-10 gap-y-3">
                <div className="flex flex-col gap-y-2 w-full">
                  <label className="text-base text-[#6f6f6f]">
                    Payment method
                  </label>
                  <Select
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value)}
                  >
                    <SelectTrigger className="w-full border-2 border-gray-500">
                      <SelectValue placeholder="PaymentMethod" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"all"}>All</SelectItem>
                      {PaymentMethods?.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item.value}>
                            {item.value}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <label className="text-base text-[#6f6f6f]">Min amount</label>
                  <Input
                    type="number"
                    className="w-full border-2 border-gray-500 focus-visible:ring-0"
                    value={minAmount}
                    onChange={handleChangeMinAmount}
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <label className="text-base text-[#6f6f6f]">Max amount</label>
                  <Input
                    type="number"
                    className="w-full border-2 border-gray-500 focus-visible:ring-0"
                    value={maxAmount}
                    onChange={handleChangeMaxAmount}
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <label className="text-base text-[#6f6f6f]">Sort date</label>
                  <Select
                    value={date}
                    onValueChange={(value) => setDate(value)}
                  >
                    <SelectTrigger className="w-full border-2 border-gray-500">
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      {Dates?.map((item, index) => {
                        return (
                          <SelectItem key={index} value={item.value}>
                            {item.value}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-10">
                <div>
                  {donates?.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">NO</TableHead>
                          <TableHead className="text-center">
                            First Name
                          </TableHead>
                          <TableHead className="text-center">
                            Last Name
                          </TableHead>
                          <TableHead className="text-center">Amount</TableHead>
                          <TableHead className="text-center">
                            Payment method
                          </TableHead>
                          <TableHead className="text-center">Date</TableHead>
                          <TableHead className="text-center">Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {donates?.map((donate, index) => {
                          const { day, month, year, hours, minutes } =
                            parseDateTimeString(donate.createdDate);

                          return (
                            <TableRow key={index}>
                              <TableCell className="font-medium text-center">
                                {index + 1}
                              </TableCell>
                              <TableCell className="text-center">
                                {donate.account.firstName}
                              </TableCell>
                              <TableCell className="text-center">
                                {donate.account.lastName}
                              </TableCell>
                              <TableCell className="text-center">
                                {formatCurrencyVND(donate.amount)}
                              </TableCell>
                              <TableCell className="text-center">
                                {donate.paymentMethodId === 1
                                  ? PaymentMethods[0].value
                                  : PaymentMethods[1].value}
                              </TableCell>
                              <TableCell className="text-center">
                                {`${day}/${month}/${year}`}
                              </TableCell>
                              <TableCell className="text-center">
                                {`${String(hours).padStart(2, "0")}:${String(
                                  minutes
                                ).padStart(2, "0")}`}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  ) : (
                    <h3>There are no results available for your search.</h3>
                  )}
                </div>
                <div className="mt-5">
                  {donates?.length > 0 && (
                    <PaginatedComponent
                      totalPages={totalPage}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
