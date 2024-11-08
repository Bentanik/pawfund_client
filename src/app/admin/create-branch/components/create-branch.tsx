"use client";

import { Input } from "@/components/ui/input";
import useCreateBranchForm from "@/app/admin/create-branch/hooks/useCreateBranchForm";
import { useState } from "react";

import { CreateBranchBodyType } from "@/utils/schemaValidations/create-branch.schema";
import { Backdrop } from "@/components/backdrop";

export default function CreateBranchForm() {
  const {
    register,
    handleSubmit,
    watch,
    onSubmit,
    errors,
    setError,
    setValue,
    isPending,
  } = useCreateBranchForm();

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

  const handleFormSubmit = (data: CreateBranchBodyType) => {
    try {
      const form: REQUEST.CreateBranchBody = {
        name: data.name,
        phoneNumberOfBranch: data.phoneNumberOfBranch,
        emailOfBranch: data.emailOfBranch,
        description: data.description,
        numberHome: data.numberHome,
        streetName: data.streetName,
        ward: data.ward,
        district: data.district,
        province: data.province,
        postalCode: data.postalCode,
      };
      onSubmit(form);
      setName("");
      setPhoneNumberOfBranch("");
      setEmailOfBranch("");
      setDescription("");
      setNumberHome("");
      setStreetName("");
      setWard("");
      setDistrict("");
      setProvince("");
      setPostalCode("");
    } catch (err) {}
  };

  return (
    <div className="flex">
      <form
        className="w-full h-full mb-10"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="w-full flex gap-x-7">
          <div className="w-[60%] rounded-lg">
            <div>
              <h4 className="text-2xl font-semibold">Branch information</h4>
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Branch name</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("name")}
                />
                {errors?.name && (
                  <span className="text-red-500">{errors?.name?.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">
                  Phone number of branch
                </label>
                <Input
                  type="number"
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. 123456789"
                  {...register("phoneNumberOfBranch")}
                />
                {errors?.phoneNumberOfBranch && (
                  <span className="text-red-500">
                    {errors?.phoneNumberOfBranch?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">
                  Email of branch
                </label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("emailOfBranch")}
                />
                {errors?.emailOfBranch && (
                  <span className="text-red-500">
                    {errors?.emailOfBranch?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Description</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("description")}
                />
                {errors?.description && (
                  <span className="text-red-500">
                    {errors?.description?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Number home</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("numberHome")}
                />
                {errors?.numberHome && (
                  <span className="text-red-500">
                    {errors?.numberHome?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Street name</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("streetName")}
                />
                {errors?.streetName && (
                  <span className="text-red-500">
                    {errors?.streetName?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Ward</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("ward")}
                />
                {errors?.ward && (
                  <span className="text-red-500">{errors?.ward?.message}</span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">District</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("district")}
                />
                {errors?.district && (
                  <span className="text-red-500">
                    {errors?.district?.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Province</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("province")}
                />
                {errors?.province && (
                  <span className="text-red-500">
                    {errors?.province?.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <label className="text-base font-semibold">Postal code</label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  {...register("postalCode")}
                />
                {errors?.postalCode && (
                  <span className="text-red-500">
                    {errors?.postalCode?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-lg shadow-sm mt-6"
        >
          <span className="text-white">Submit</span>
        </button>
      </form>
      <Backdrop open={isPending} />
    </div>
  );
}
