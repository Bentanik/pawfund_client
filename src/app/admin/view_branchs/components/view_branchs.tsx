"use client";

import { useState, useEffect } from "react";
import PaginatedComponent from "@/components/paginated";
import useGetDataBranches from "@/app/admin/view_branchs/hooks/getBranches";
import { Input } from "@/components/ui/input";

export default function PaymentTable() {
    const [id, setId] = useState<string | undefined>();
    const [name, setName] = useState<string>("");
    const [phoneNumberOfBranch, setPhoneNumberOfBranch] = useState<string>("");
    const [emailOfBranch, setEmailOfBranch] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [numberHome, setNumberHome] = useState<string>("");
    const [streetName, setStreetName] = useState<string>("");
    const [ward, setWard] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [province, setProvince] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [accountId, setAccountId] = useState<string | undefined>();
    const [data, setData] = useState<API.Branches[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleGetData(page);
    };

    const { getBranchesApi } = useGetDataBranches();

    const handleGetData = async (pageIndex: number) => {
        try {
            const res = await getBranchesApi({
                pageIndex: pageIndex,
                pageSize: 5,
                id: id,
                name: name,
                phoneNumberOfBranch: phoneNumberOfBranch,
                emailOfBranch: emailOfBranch,
                description: description,
                numberHome: numberHome,
                streetName: streetName,
                ward: ward,
                district: district,
                province: province,
                postalCode: postalCode,
                accountId: accountId,
            });
            setTotalPage(res?.value.data.totalPages || 1);
            setData(res?.value.data.items || []);
        } catch (err) {
            setData([]);
        }
    };

    useEffect(() => {
        if (currentPage !== 1) {
            handleGetData(1);
            setCurrentPage(1);
        } else {
            handleGetData(currentPage);
        }
    }, [
        id,
        name,
        phoneNumberOfBranch,
        emailOfBranch,
        description,
        numberHome,
        streetName,
        ward,
        district,
        province,
        postalCode,
        accountId,
    ]);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleChangeWard = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWard(e.target.value);
    };
    const handleChangeDistrict = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDistrict(e.target.value);
    };

    return (
        <div className="w-full p-4 ">
            <div className="flex mb-5 gap-10">
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Name</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">Ward</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={ward}
                        onChange={handleChangeWard}
                    />
                </div>
                <div className="flex gap-7 items-center w-[30%]">
                    <label className="text-base text-[#6f6f6f]">District</label>
                    <Input
                        type="text"
                        className="w-full border-2 border-gray-500 focus-visible:ring-0"
                        value={district}
                        onChange={handleChangeDistrict}
                    />
                </div>
            </div>
            {/* Header */}
            <div className="grid grid-cols-5 bg-[#4B5563] text-white font-semibold rounded-t-lg">
                <div className="p-4">Name</div>
                <div className="p-4">Email</div>
                <div className="p-4 ">Ward</div>
                <div className="p-4 ">District</div>
                <div className="p-4 ">Province</div>
            </div>

            {/* Body */}
            <div className="border border-gray-300 rounded-b-lg">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 hover:bg-gray-50 transition-colors"
                        >
                            <div className="p-4 capitalize">{item?.name}</div>
                            <div className="p-4 lowercase">
                                {item?.emailOfBranch}
                            </div>
                            <div className="p-4">{item?.ward}</div>
                            <div className="p-4 lowercase">
                                {item?.district}
                            </div>
                            <div className="p-4 lowercase">
                                {item?.province}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center">Không có kết quả nào.</div>
                )}
            </div>

            <div className="my-10">
                <div className="mt-5">
                    <PaginatedComponent
                        totalPages={totalPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
