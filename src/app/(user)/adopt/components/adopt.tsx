/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    catAges,
    catColors,
    sexCats,
    sterilizations,
} from "@/const/propteryCat";
import { motion } from "framer-motion";
import { PawPrintIcon, TriangleAlert } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import useGetDataAdopt from "@/app/(user)/adopt/hooks/useGetDataAdopt";
import PaginatedComponent from "@/components/paginated";
import useDebounce from "@/hooks/use-debounce";
import Link from "next/link";

const ListProccess = [
    {
        title: "Find your favorite pet on our website.",
    },
    {
        title: "Contact our Adoption Counselor to find out more information about the pet.",
    },
    {
        title: "Take part in our adoption screening interview.",
    },
    {
        title: "Prepare a corner for your pet, sign the adoption paper and pay an adoption fee.",
    },
    {
        title: "Keep us posted on the pet’s new life, especially if an incident happens to receive proper support.",
    },
];

const ListNotice = [
    {
        title: "The adoption interview may include personal questions. Please be patient with us!",
    },
    {
        title: "The adoption fee is to cover paid medical fees on the pet and to support other animals in the shelter.",
    },
    {
        title: "If you want to meet the pet before adoption, you are welcome to visit our shelter.",
    },
    {
        title: "In case you are unable to take care of the animal, please inform us and return the animal. DO NOT give the animal to anyone without an agreement of HPA.",
    },
];

export default function Adopt() {
    const [age, setAge] = useState<string>("all");
    const [color, setColor] = useState<string>("all");
    const [sexCat, setSexCat] = useState<string>("all");
    const [sterilization, setSterilization] = useState<string>("all");
    const [data, setData] = useState<API.CatAdopt[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);

    const [searchName, setSearchName] = useState("");
    const debouncedSearchTerm = useDebounce(searchName, 500);

    const { getCatsApi } = useGetDataAdopt();

    const renderListProccess = () => {
        return ListProccess.map((item, index) => {
            return (
                <div key={index} className="flex items-center gap-x-3">
                    <div className="inline-flex items-center justify-center w-4 h-6 bg-[#00a6ed] rounded-sm text-[14px] font-semibold text-gray-100">
                        {index + 1}
                    </div>
                    <p className="flex-1 text-base text-[#6f6f6f]">
                        {item.title}
                    </p>
                </div>
            );
        });
    };

    const renderListNotice = () => {
        return ListNotice.map((item, index) => {
            return (
                <div key={index} className="flex items-center gap-x-3">
                    <div className="inline-flex items-center justify-center w-4 h-6 bg-[#00a6ed] rounded-sm text-[14px] font-semibold text-gray-100">
                        {index + 1}
                    </div>
                    <p className="flex-1 text-base text-[#6f6f6f]">
                        {item.title}
                    </p>
                </div>
            );
        });
    };

    const cardPet = (index: number, card: API.CatAdopt) => {
        return (
            <div
                key={index}
                className="w-[250px] min-h-[300px] bg-[#f0efef] flex flex-col px-5 py-4 items-center rounded-sm"
            >
                <Link href={`/viewprofilecat/${card.id}`}>
                    <figure className="border border-gray-200 rounded-sm w-full">
                        {card?.imageCats[0]?.imageUrl ? (
                            <img
                                src={card.imageCats[0]?.imageUrl}
                                alt="avatar"
                                className="block rounded-sm w-full h-[200px] object-cover"
                            />
                        ) : (
                            <div className="rounded-sm w-full h-[200px] object-cover flex items-center justify-center">
                                <span className="text-xl">No Image</span>
                            </div>
                        )}
                    </figure>
                </Link>

                <div className="py-3 w-full">
                    <h4 className="text-xl font-semibold text-gray-900">
                        {card?.name}
                    </h4>
                    <div className="w-14 border border-[#cecece] my-1"></div>
                    <div className="my-3">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-1">
                                <h5 className="text-[15px] font-semibold">
                                    Gender:
                                </h5>
                                <span className="text-[15px]">
                                    {card.sex === 0 ? "Male" : "Female"}
                                </span>
                            </div>
                            <div className="my-2 border border-dashed border-zinc-600"></div>
                            <div className="flex items-center gap-x-1 ">
                                <h5 className="text-[15px] font-semibold">
                                    Age:
                                </h5>
                                <span className="text-[15px]">{card.age}</span>
                            </div>
                            <div className="my-2 border border-dashed border-zinc-600"></div>
                            <div className="flex items-center gap-x-1">
                                <h5 className="text-[15px] font-semibold">
                                    Color:
                                </h5>
                                <span className="text-[15px]">
                                    {card.color}
                                </span>
                            </div>
                            <div className="my-2 border border-dashed border-zinc-600"></div>
                            <div className="flex items-center gap-x-1">
                                <h5 className="text-[15px] font-semibold">
                                    Sterilization:
                                </h5>
                                <span className="text-[15px]">
                                    {card.sterilization ? "Neutered" : "Intact"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderListCardPet = () => {
        return data?.map((item, index) => {
            return cardPet(index, item);
        });
    };

    const handleGetData = async (pageIndex: number) => {
        try {
            const res = await getCatsApi({
                pageIndex: pageIndex,
                pageSize: 14,
                age: age,
                color: color,
                sex: sexCat,
                catName: searchName,
                sterilization: sterilization,
            });
            setTotalPage(res?.value.data.totalPages || 1);
            setData(res?.value.data.items || []);
        } catch (err) {
            setData([]);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleGetData(page);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value);
    };

    useEffect(() => {
        if (currentPage !== 1) {
            handleGetData(1);
            setCurrentPage(1);
        } else handleGetData(currentPage);
    }, [age, color, sexCat, sterilization, debouncedSearchTerm]);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 bg-[url('/images/adopt1.jpg')] bg-cover bg-center w-full h-[50vh] shadow-md flex flex-col items-start justify-center relative p-4">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative z-10 w-9/12 p-20 ml-0">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-white text-5xl font-bold">
                                Cats & Kittens for Adoption
                            </h1>
                            <p className="text-white text-lg">
                                Whether you want to adopt a playmate or a
                                snuggle buddy, the cats and kittens for adoption
                                from CAT are ready to join your family. Let the
                                matchmaking begin!
                            </p>
                            <div>
                                <a href="#findyourpet">
                                    <Button
                                        variant="default"
                                        className="text-gray-600 bg-teal-400 px-7 py-6 hover:bg-teal-400 hover:opacity-90"
                                    >
                                        <span className="text-base text-gray-800">
                                            Adopt
                                        </span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="col-span-12 px-24 py-12 border border-gray-300">
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.3 }}
                >
                    <div className="flex items-start justify-between gap-x-10">
                        <div className="flex-1">
                            <h1 className="text-4xl font-semibold text-gray-900">
                                Adoption process
                            </h1>
                            <div className="w-14 border border-[#cecece] my-3"></div>
                            <div className="flex flex-col gap-y-6">
                                <p className="text-base text-[#6f6f6f]">
                                    Before deciding to adopt, please ask
                                    yourself if you are ready for a lifetime
                                    commitment to a pet. There are many things
                                    to consider such as financial ability,
                                    accommodation as well as mentality (yes,
                                    being a parent is never easy). The adoption
                                    will also need the mutual agreement between
                                    your family and related sides.
                                </p>
                                <p className="text-base text-[#6f6f6f]">
                                    And you feel ready? Please follow these
                                    steps.
                                </p>
                                <div className="flex flex-col gap-y-1">
                                    {renderListProccess()}
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <div className="flex items-center gap-x-1">
                                        <div className="-translate-x-1">
                                            <TriangleAlert className="w-6 h-6 text-red-600" />
                                        </div>
                                        <h3 className="text-base text-[#6f6f6f]">
                                            Notice
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        {renderListNotice()}
                                    </div>
                                </div>
                                <p className="text-base text-[#6f6f6f]">
                                    If you can only foster, consider being one
                                    of our Volunteers. Find out more information
                                    in the Volunteer section.
                                </p>
                                <p className="text-base text-[#6f6f6f]">
                                    Details about our Virtual Adoption Program
                                    is available in the bottom banner of this
                                    page.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#e9e8e8] px-5 py-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                Conditions of adoption
                            </h2>
                            <div className="mt-4 flex flex-col gap-y-3">
                                <div className="flex items-center gap-x-1">
                                    <span>
                                        <PawPrintIcon className="text-blue-700" />
                                    </span>
                                    <span className="text-base text-gray-800 font-semibold">
                                        Stable income
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <span>
                                        <PawPrintIcon className="text-blue-700" />
                                    </span>
                                    <span className="text-base text-gray-800 font-semibold">
                                        Take the pet with you when moving
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <span>
                                        <PawPrintIcon className="text-blue-700" />
                                    </span>
                                    <span className="text-base text-gray-800 font-semibold">
                                        Provide required vaccination and
                                        sterilization
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="col-span-12 px-24 py-12"
                id="findyourpet"
            >
                <div>
                    <div>
                        <h1 className="text-4xl text-transform: uppercase font-semibold text-center text-gray-900">
                            Find your pet
                        </h1>
                        <div className="grid grid-cols-3 gap-x-10 gap-y-3">
                            <div className="flex flex-col gap-y-2 w-full">
                                <label className="text-base text-[#6f6f6f]">
                                    Gender
                                </label>
                                <Select
                                    value={sexCat}
                                    onValueChange={(value) => setSexCat(value)}
                                >
                                    <SelectTrigger className="w-full border-2 border-gray-500">
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={"all"}>
                                            All
                                        </SelectItem>
                                        {sexCats?.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={item.sex}
                                                >
                                                    {item.sex}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full">
                                <label className="text-base text-[#6f6f6f]">
                                    Age
                                </label>
                                <Select
                                    value={age}
                                    onValueChange={(value) => setAge(value)}
                                >
                                    <SelectTrigger className="w-full border-2 border-gray-500">
                                        <SelectValue placeholder="Age" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        {catAges?.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={item.value}
                                                >
                                                    {item.value}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full">
                                <label className="text-base text-[#6f6f6f]">
                                    Color
                                </label>
                                <Select
                                    value={color}
                                    onValueChange={(value) => setColor(value)}
                                >
                                    <SelectTrigger className="w-full border-2 border-gray-500">
                                        <SelectValue placeholder="Color" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        {catColors?.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={item.value}
                                                >
                                                    {item.value}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full">
                                <label className="text-base text-[#6f6f6f]">
                                    Sterilization
                                </label>
                                <Select
                                    value={sterilization}
                                    onValueChange={(value) =>
                                        setSterilization(value)
                                    }
                                >
                                    <SelectTrigger className="w-full border-2 border-gray-500">
                                        <SelectValue placeholder="Sterilization" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        {sterilizations?.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={
                                                        item.value
                                                            ? "true"
                                                            : "false"
                                                    }
                                                >
                                                    {item.value
                                                        ? "True"
                                                        : "False"}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-y-2 w-full">
                                <label className="text-base text-[#6f6f6f]">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    className="w-full border-2 border-gray-500 focus-visible:ring-0"
                                    value={searchName}
                                    onChange={handleChangeName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        {data?.length > 0 ? (
                            <Fragment>
                                <div className="grid grid-cols-4 gap-y-3">
                                    {renderListCardPet()}
                                </div>
                                <div className="mt-5">
                                    <PaginatedComponent
                                        totalPages={totalPage}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </Fragment>
                        ) : (
                            <h4 className="text-xl">
                                Not available for adoption
                            </h4>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
