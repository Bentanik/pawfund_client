"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div>
            {/* State form 1 */}
            {step === 0 && (
                <Card>
                    <div className="relative p-[20px]">
                        <div className=" text-center font-semibold">
                            Choose your amount
                        </div>
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
                        <div className="!mt-[15px] relative">
                            <Label htmlFor="name">Custom your amount</Label>
                            <Input id="name" placeholder="$" />
                            <span className="absolute top-[29px] right-0 flex items-center pr-3">
                                $
                            </span>
                        </div>

                        <div className="!mt-[15px]">
                            <p className="text-[#2dd4aa] text-[0.7rem] mb-[10px]">
                                Where would you like your donation to go?
                            </p>
                            {/* Drop Down choose branch want to donate */}
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="justify-between w-[100%]"
                                    >
                                        {value
                                            ? frameworks.find(
                                                  (framework) =>
                                                      framework.value === value
                                              )?.label
                                            : "Select your branch..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[350px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search framework..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No framework found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {frameworks.map((framework) => (
                                                    <CommandItem
                                                        key={framework.value}
                                                        value={framework.value}
                                                        onSelect={(
                                                            currentValue
                                                        ) => {
                                                            setValue(
                                                                currentValue ===
                                                                    value
                                                                    ? ""
                                                                    : currentValue
                                                            );
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-2",
                                                                value ===
                                                                    framework.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {framework.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={handleNextForm}
                            className="hover:opacity-75"
                        >
                            Next Step
                            <img
                                src="/images/gravity-arrow-right.svg"
                                alt="Arrow Icon"
                                className="ml-2 h-4 w-4"
                            />
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {/* State form 2 */}
            {step === 1 && (
                <Card>
                    <div className="relative p-[20px]">
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] left-[5%] cursor-pointer"
                            src="/images/arrow-left.svg"
                            alt="Right arrow"
                            onClick={handlePreForm}
                        />
                        <div className=" text-center font-semibold">
                            Your Information
                        </div>
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] right-[5%] cursor-pointer"
                            src="/images/arrow-right.svg"
                            alt="Right arrow"
                            onClick={handleNextForm}
                        />
                    </div>
                    <CardContent className="space-y-2">
                        <div className="!mt-[15px] relative">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" />
                            <img
                                src="/images/ic-user.svg"
                                className="absolute top-[29px] right-0 flex items-center pr-3 opacity-60"
                            />
                        </div>
                        <div className="!mt-[15px] relative">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" />
                        </div>
                        <div className="!mt-[15px] relative">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" />
                            <img
                                src="/images/ic-email.svg"
                                className="absolute top-[29px] right-0 flex items-center pr-3 opacity-60"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={handleNextForm}
                            className="hover:opacity-75"
                        >
                            Next Step
                            <img
                                src="/images/gravity-arrow-right.svg"
                                alt="Arrow Icon"
                                className="ml-2 h-4 w-4"
                            />
                        </Button>
                    </CardFooter>
                </Card>
            )}

            {/* State form 3 */}
            {step === 2 && (
                <Card>
                    <div className="relative p-[20px]">
                        <img
                            className="w-[30px] h-[30px] hover:opacity-40 absolute top-[16px] left-[5%] cursor-pointer"
                            src="/images/arrow-left.svg"
                            alt="Right arrow"
                            onClick={handlePreForm}
                        />
                        <div className=" text-center font-semibold">
                            Payment
                        </div>
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
                        <Button>Finish Donation</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
