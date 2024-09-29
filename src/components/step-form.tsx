"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function StepForm() {
    const [step, setStep] = useState(0);
    const [selectAmount, setSelectAmount] = useState(0);

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
        <div>
            {/* Nội dung form được điều khiển theo state */}
            {step === 0 && (
                <Card>
                    <div className="relative p-[20px]">
                        <div className=" text-center">Choose your amount</div>
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] right-[5%] cursor-pointer"
                            src="/images/arrow-right.svg"
                            alt="Right arrow"
                            onClick={handleNextForm}
                        />
                    </div>
                    <CardContent className="space-y-2">
                        <div>
                            <Label htmlFor="name">Default amount</Label>
                            <div className="flex gap-[3%] mt-2 ">
                                {amounts.map((index) => (
                                    <div
                                        key={index}
                                        className={`min-w-[31.5%] py-[20px] cursor-pointer bg-[#2dd4aa20] ${
                                            selectAmount === index
                                                ? "border border-[#2dd4aa]"
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
                        <div className="space-y-1">
                            <Label htmlFor="name">Custom your amount</Label>
                            <Input id="name" placeholder="$" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleNextForm}>Save changes</Button>
                    </CardFooter>
                </Card>
            )}

            {step === 1 && (
                <Card>
                    <div className="relative p-[20px]">
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] left-[5%] cursor-pointer"
                            src="/images/arrow-left.svg"
                            alt="Right arrow"
                            onClick={handlePreForm}
                        />
                        <div className=" text-center">Choose your amount</div>
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] right-[5%] cursor-pointer"
                            src="/images/arrow-right.svg"
                            alt="Right arrow"
                            onClick={handleNextForm}
                        />
                    </div>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleNextForm}>Save password</Button>
                    </CardFooter>
                </Card>
            )}

            {step === 2 && (
                <Card>
                    <div className="relative p-[20px]">
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] left-[5%] cursor-pointer"
                            src="/images/arrow-left.svg"
                            alt="Right arrow"
                            onClick={handlePreForm}
                        />
                        <div className=" text-center">Ccc</div>
                    </div>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
