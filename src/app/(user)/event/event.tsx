"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlockEvent from "@/components/block-event";
import { Button } from "@/components/ui/button";
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
import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

export default function UserProfilePage() {
    return (
        <div className="min-h-screen">
            <div className="mt-[30px]">
                <div className="flex flex-col gap-y-2 w-[30%]">
                    <Select>
                        <SelectTrigger className="w-full border-2 border-[#00000065]">
                            <SelectValue placeholder="Newest & Upcoming" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Newest & Upcoming">
                                Newest & Upcoming
                            </SelectItem>
                            <SelectItem value="In progress">
                                In progress
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-[30px] flex gap-[10px]">
                    <BlockEvent />
                </div>
            </div>
            <div className="mt-5">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                className="bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
                            >
                                1
                            </PaginationLink>
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
    );
}
