"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import useDonateBanking from "@/app/(user)/donation/hooks/useDonateBanking";
import { Backdrop } from "@/components/backdrop";

const amounts = [50000, 100000, 500000];

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

interface StepFormProps {
    setLoading?: any;
}

export default function StepForm({ setLoading }: StepFormProps) {
    const [step, setStep] = useState(0);
    const [selectAmount, setSelectAmount] = useState<number>(0);
    const [customAmount, setCustomAmount] = useState<string>("0");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState<string>("");

    const { handleCreatePaymentLink, isPending } = useDonateBanking();

    const handleSelectAmount = (index: number) => {
        setSelectAmount(index);
    };

    const handleChangeDescription = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(e.target.value);
    };

    // const formatNumber = (value: string) => {
    //   return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // };

    const handleChangeCustomAmount = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (Number.parseInt(e.target.value) > 0) {
            setSelectAmount(0);
        }
        const inputValue = e.target.value.replace(/\./g, ""); // Xóa dấu phân cách
        setCustomAmount(inputValue);
    };

    const handleNextForm = () => {
        setStep((prevStep) => (prevStep >= 2 ? 2 : prevStep + 1));
    };

    const handlePreForm = () => {
        setStep((prevStep) => (prevStep <= 0 ? 0 : prevStep - 1));
    };

    const handleDonateBanking = () => {
        const formData: REQUEST.TDonateBanking = {
            orderId: 8,
            amount:
                selectAmount != 0
                    ? selectAmount
                    : Number.parseInt(customAmount),
            description: description,
        };
        handleCreatePaymentLink(formData);
    };

    useEffect(() => {
        setLoading(isPending);
    }, [isPending]);

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
                                {amounts?.map((amount, index) => (
                                    <div
                                        key={index}
                                        className={`min-w-[31.5%] py-[20px] cursor-pointer bg-[#2dd4aa20] text-[#2dd4aa8a] ${
                                            selectAmount === amount
                                                ? "border border-[#2dd4aa] text-[#2dd497]"
                                                : ""
                                        } text-center`}
                                        onClick={() =>
                                            handleSelectAmount(amount)
                                        }
                                    >
                                        {Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(amount)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="!mt-[15px] relative">
                            <div className="flex flex-col gap-y-2">
                                <Label htmlFor="name">Custom your amount</Label>
                                <Input
                                    id="name"
                                    type="number"
                                    min={1000}
                                    placeholder="Please enter the amount you desire"
                                    autoComplete="off"
                                    value={customAmount}
                                    onChange={handleChangeCustomAmount}
                                />
                                <span className="absolute top-[29px] right-0 flex items-center pr-3">
                                    đ
                                </span>
                            </div>
                        </div>

                        <div className="!mt-[15px]">
                            <p className="text-[#2dd4aa] text-[0.7rem] mb-[10px]">
                                Do you have any description ?
                            </p>
                            <Input
                                id="name"
                                placeholder="Your description"
                                value={description}
                                onChange={handleChangeDescription}
                            />
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button>Cash guide </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] bg-white">
                                            <DialogHeader>
                                                <DialogTitle className="text-[1.5rem] mt-5 text-center">
                                                    Cash Guide
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className="text-[0.9rem]">
                                                Your generous donation of
                                                abandoned cats will provide them
                                                with care and comfort, giving
                                                them a second chance at a loving
                                                home.
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mt-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512"
                                                        className="w-[5%]"
                                                    >
                                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                                    </svg>
                                                    <div className="font-semibold">
                                                        Direct donation location
                                                    </div>
                                                </div>

                                                <div className="text-[0.9rem]">
                                                    You can find out about the
                                                    nearest centers on the
                                                    website to make it more
                                                    convenient for you to travel
                                                    and donate to those centers.
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-3 mt-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="w-[5%]"
                                                    >
                                                        <path d="M96 128l0-57.8c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30l0 57.8-.3 0c.2 2.6 .3 5.3 .3 8l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40c0-2.7 .1-5.4 .3-8l-.3 0zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16-160 0 0 16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48l0 16-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0 0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16 16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-16 0 0-16c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8z" />
                                                    </svg>
                                                    <div className="font-semibold">
                                                        Working directly with
                                                        staff
                                                    </div>
                                                </div>

                                                <div className="text-[0.9rem]">
                                                    When you arrive at the
                                                    center, please go to the
                                                    direct donation counter.
                                                    Here, there will be staff to
                                                    guide you through the steps
                                                    you will take.
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-3 mt-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                        className="w-[5%]"
                                                    >
                                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                                    </svg>
                                                    <div className="font-semibold">
                                                        Complete the procedures
                                                    </div>
                                                </div>

                                                <div className="text-[0.9rem]">
                                                    After completing the
                                                    procedures, your data will
                                                    be saved to your account (if
                                                    any). If you don't have an
                                                    account, the history will be
                                                    saved in the center's
                                                    system.
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card className="!border-0">
                                <CardHeader>
                                    <CardTitle>Banking method</CardTitle>
                                    <CardDescription className="!mt-[10px]">
                                        If you donate in banking, please click
                                        the button below for more details.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button
                                        type="button"
                                        onClick={handleDonateBanking}
                                    >
                                        Donate
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </Card>
            )}
        </div>
    );
}
