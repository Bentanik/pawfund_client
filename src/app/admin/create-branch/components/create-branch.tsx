"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import UploadImageCat from "@/app/staff/create-pet/components/upload-images-cat";
import useCreatePetForm from "@/app/staff/create-pet/hooks/useCreatePetForm";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CreatePetBodyType } from "@/utils/schemaValidations/create-pet.schema";
import { Backdrop } from "@/components/backdrop";

const ListInfo = [
    {
        label: "Branch name",
    },
    {
        label: "Phone number of branch",
    },
    {
        label: "Email of branch",
    },
    {
        label: "Description",
    },
    {
        label: "Number home",
    },
    {
        label: "Street name",
    },
    {
        label: "Ward",
    },
    {
        label: "District",
    },
    {
        label: "Province",
    },
    {
        label: "Postal code",
    },
];

const renderInput = () => {
    return ListInfo?.map((item) => {
        return (
            <div className="flex flex-col gap-y-2 mt-3">
                <label className="text-base font-semibold">{item?.label}</label>
                <Input
                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                    autoComplete="off"
                    placeholder="e.g hehe"
                />
            </div>
        );
    });
};

export default function CreateBranchForm() {
    const handleFormSubmit = () => {};

    return (
        <div className="flex">
            <form className="w-full h-full mb-10">
                <div className="w-full flex gap-x-7">
                    <div className="w-[60%] rounded-lg">
                        <div>
                            <h4 className="text-2xl font-semibold">
                                Branch information
                            </h4>
                            {renderInput()}
                        </div>
                    </div>
                </div>
                <Button className="mt-10">Submit</Button>
            </form>
            {/* <Backdrop open={isPending} /> */}
        </div>
    );
}
