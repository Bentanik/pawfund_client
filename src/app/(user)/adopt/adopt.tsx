/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { TriangleAlert } from 'lucide-react';

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
        title: "Keep us posted on the pet’s new life, especially if an incident happens to receive proper support."
    }
]

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
]

export default function Adopt() {

    const renderListProccess = () => {
        return ListProccess.map((item, index) => {
            return <div key={index} className='flex items-center gap-x-3'>
                <div className='inline-flex items-center justify-center w-4 h-6 bg-[#00a6ed] rounded-sm text-[14px] font-semibold text-gray-100'>
                    {index + 1}
                </div>
                <p className='flex-1 text-base text-[#6f6f6f]'>
                    {item.title}
                </p>
            </div>
        })
    }

    const renderListNotice = () => {
        return ListNotice.map((item, index) => {
            return <div key={index} className='flex items-center gap-x-3'>
                <div className='inline-flex items-center justify-center w-4 h-6 bg-[#00a6ed] rounded-sm text-[14px] font-semibold text-gray-100'>
                    {index + 1}
                </div>
                <p className='flex-1 text-base text-[#6f6f6f]'>
                    {item.title}
                </p>
            </div>
        })
    }

    const cardPet = () => {
        return <div className='w-[250px] min-h-[300px] bg-[#ecebeb] flex flex-col px-5 py-4 items-center rounded-sm'>
            <figure
            >
                <img
                    src="https://www.hanoipetadoption.com/admin/user-content/Animal/f99e0e2f-5f6e-4850-98f5-ccefe81e0d5e.jpeg"
                    alt="avatar"
                    className='block rounded-sm'
                />
            </figure>
            <div className='py-3 w-full'>
                <h4 className='text-xl font-semibold text-gray-900'>
                    Mic
                </h4>
                <div className='w-14 border border-[#cecece] my-1'>
                </div>
                <div className='my-3'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-x-1'>
                            <h5 className='text-[15px] font-semibold'>Gender:</h5>
                            <span className='text-[15px]'>Male</span>
                        </div>
                        <div className='my-2 border border-dashed border-zinc-600'></div>
                        <div className='flex items-center gap-x-1 '>
                            <h5 className='text-[15px] font-semibold'>Age:</h5>
                            <span className='text-[15px]'>Full grown</span>
                        </div>
                        <div className='my-2 border border-dashed border-zinc-600'></div>
                        <div className='flex items-center gap-x-1'>
                            <h5 className='text-[15px] font-semibold'>Vaccination:</h5>
                            <span className='text-[15px]'>Unknown</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 bg-[url('/images/adopt1.jpg')] bg-cover bg-center w-full h-[50vh] shadow-md flex flex-col items-start justify-center relative p-4">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='relative z-10 w-9/12 p-20 ml-0'>
                        <div className='flex flex-col gap-y-4'>
                            <h1 className="text-white text-5xl font-bold">
                                Cats & Kittens for Adoption
                            </h1>
                            <p className="text-white text-lg">
                                Whether you want to adopt a playmate or a snuggle buddy, the cats and kittens for adoption from CAT are ready to join your family. Let the matchmaking begin!
                            </p>
                            <div>
                                <Button variant="default" className="text-gray-600 bg-teal-400 px-7 py-6 hover:bg-teal-400 hover:opacity-90">
                                    <span className='text-base text-gray-800'>Adopt</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='col-span-12 px-24 py-12 border border-gray-300'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.3 }}
                >
                    <div className='flex items-start justify-between gap-x-10'>
                        <div className='flex-1'>
                            <h1 className='text-4xl font-semibold text-gray-900'>
                                Adoption process
                            </h1>
                            <div className='w-14 border border-[#cecece] my-3'>
                            </div>
                            <div className='flex flex-col gap-y-6'>
                                <p className='text-base text-[#6f6f6f]'>
                                    Before deciding to adopt, please ask yourself if you are ready for a lifetime commitment to a pet. There are many things to consider such as financial ability, accommodation as well as mentality (yes, being a parent is never easy). The adoption will also need the mutual agreement between your family and related sides.
                                </p>
                                <p className='text-base text-[#6f6f6f]'>
                                    And you feel ready? Please follow these steps.
                                </p>
                                <div className='flex flex-col gap-y-1'>
                                    {renderListProccess()}
                                </div>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='flex items-center gap-x-1'>
                                        <div className='-translate-x-1'>
                                            <TriangleAlert className='w-6 h-6 text-red-600' />
                                        </div>
                                        <h3 className='text-base text-[#6f6f6f]'>
                                            Notice
                                        </h3>
                                    </div>
                                    <div className='flex flex-col gap-y-1'>
                                        {renderListNotice()}
                                    </div>
                                </div>
                                <p className="text-base text-[#6f6f6f]">
                                    If you can only foster, consider being one of our Volunteers. Find out more information in the Volunteer section.
                                </p>
                                <p className="text-base text-[#6f6f6f]">
                                    Details about our Virtual Adoption Program is available in the bottom banner of this page.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#e9e8e8] px-5 py-6 rounded-lg'>
                            <h2 className='text-2xl font-semibold text-gray-900'>Conditions of adoption</h2>
                            <div className='mt-4 flex flex-col gap-y-3'>
                                <div className='flex items-center gap-x-1'>
                                    <span>
                                        <img src="/images/catpaw-icon.svg" alt="CatPaw" width={30} />
                                    </span>
                                    <span className='text-base text-gray-800 font-semibold'>Stable income</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <span>
                                        <img src="/images/catpaw-icon.svg" alt="CatPaw" width={30} />
                                    </span>
                                    <span className='text-base text-gray-800 font-semibold'>Take the pet with you when moving</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <span>
                                        <img src="/images/catpaw-icon.svg" alt="CatPaw" width={30} />
                                    </span>
                                    <span className='text-base text-gray-800 font-semibold'>
                                        Provide required vaccination and sterilization
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
                className='col-span-12 px-24 py-12'
            >
                <div>
                    <div>
                        <h1 className='text-4xl text-transform: uppercase font-semibold text-center text-gray-900'>
                            Find your pet
                        </h1>
                        <div className='mt-5 flex items-end gap-x-10'>
                            <div className='flex flex-col gap-y-2 w-full'>
                                <label className='text-base text-[#6f6f6f]'>
                                    Gender
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full border-2 border-red-500">
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Male">Male
                                        </SelectItem>
                                        <SelectItem value="Female">Female
                                        </SelectItem>
                                        <SelectItem value="Unknown">Unknown</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='flex flex-col gap-y-2 w-full'>
                                <label className='text-base text-[#6f6f6f]'>
                                    Age
                                </label>
                                <Select>
                                    <SelectTrigger className="w-full border-2 border-red-500">
                                        <SelectValue placeholder="Age" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Young">Young</SelectItem>
                                        <SelectItem value="Full grown">
                                            Full grown
                                        </SelectItem>
                                        <SelectItem value="Old">Old</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button variant="default" className="text-gray-600 bg-teal-400 px-7 py-6 hover:bg-teal-400 hover:opacity-90">
                                <span className='text-lg text-gray-800 font-semibold'>Find</span>
                            </Button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-4 gap-y-3'>
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                            {cardPet()}
                        </div>
                        <div className='mt-5'>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" className='bg-blue-500 text-white hover:bg-blue-500 hover:text-white'>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}
