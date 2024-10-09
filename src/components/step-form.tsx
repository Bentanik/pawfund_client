"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const frameworks = [
    {
        value: "quan10",
        label: "Quan 10",
    },
    {
        value: "thuduc",
        label: "Thu Duc",
    },
    {
        value: "binhduong",
        label: "Binh Duong",
    },
    {
        value: "quan1",
        label: "Quan 1",
    },
    {
        value: "quan7",
        label: "Quan 7",
    },
];
export default function StepForm() {
    const [step, setStep] = useState(0);
    const [selectAmount, setSelectAmount] = useState(0);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const amounts = [10, 50, 100];

    const handleSelectAmount = (index: number) => {
        setSelectAmount(index);
    };

    const handleNextForm = () => {
        setStep((prevStep) => (prevStep >= 2 ? 2 : prevStep + 1));
    };

    const handlePreForm = () => {
        setStep((prevStep) => (prevStep <= 0 ? 0 : prevStep - 1));
    };
    return (
        <div className="">
            {/* State form 1 */}
            {step === 0 && (
                <Card>
                    <div className="relative p-[20px]">
                        <div className=" text-center font-semibold">
                            Choose your amount
                        </div>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-[23px] h-[23px] hover:opacity-40 absolute top-[21px] right-[5%] cursor-pointer"
                            onClick={handleNextForm}
                        >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </div>
                    <CardContent className="space-y-2">
                        <div>
                            <Label htmlFor="name">Default amount</Label>
                            <div className="flex gap-[3%] mt-2 ">
                                {amounts.map((index) => (
                                    <div
                                        key={index}
                                        className={`min-w-[31.5%] py-[20px] cursor-pointer bg-[#2dd4aa20] text-[#2dd4aa8a] ${
                                            selectAmount === index
                                                ? "border border-[#2dd4aa] text-[#2dd497]"
                                                : ""
                                        } text-center`}
                                        onClick={() =>
                                            handleSelectAmount(index)
                                        }
                                    >
                                        {index}$
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="!mt-[15px] relative">
                            <Label htmlFor="name">Custom your amount</Label>
                            <Input id="name" placeholder="$" />
                            <span className="absolute top-[29px] right-0 flex items-center pr-3">
                                $
                            </span>
                        </div>

                        <div className="!mt-[15px]">
                            <p className="text-[#2dd4aa] text-[0.7rem] mb-[10px]">
                                Do you have any description ?
                            </p>
                            <Input id="name" placeholder="Your description" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={handleNextForm}
                            className="hover:opacity-75"
                        >
                            Next Step
                        </Button>
                    </CardFooter>
                </Card>
            )}
            State form 2
            {step === 1 && (
                <Card>
                    <div className="relative p-[20px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-[23px] h-[23px] hover:opacity-40 absolute top-[21px] left-[5%] cursor-pointer"
                            onClick={handlePreForm}
                        >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                        <div className=" text-center font-semibold">
                            Choose your payment method
                        </div>
                    </div>
                    <Tabs defaultValue="account" className="w-full mt-10">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className="w-[23px] h-[23px]"
                                >
                                    <path d="M96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64l-64 0 0-64zM224 96c0 35.3-28.7 64-64 64l0-64 64 0zM576 256l0 64-64 0c0-35.3 28.7-64 64-64zM512 96l64 0 0 64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z" />
                                </svg>
                            </TabsTrigger>
                            <TabsTrigger value="password">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-[23px] h-[23px]"
                                >
                                    <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm48 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM376 160l80 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z" />
                                </svg>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card className="!border-0">
                                <CardHeader>
                                    <CardTitle>Cash method</CardTitle>
                                    <CardDescription className="!mt-[10px]">
                                        If you donate in cash, please click the
                                        button below for more details.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button>Cash guide </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="!border-0">
                                <CardHeader>
                                    <CardTitle>Withdraw method</CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">
                                            Enter your cardId
                                        </Label>
                                        <Input
                                            id="current"
                                            type="password"
                                            placeholder="cardId"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Finish Payment</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </Card>
            )}
        </div>
    );
}
