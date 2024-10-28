"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import useGetMeetingTimeByAdopter from "@/app/(user)/choosemeetingtime/hooks/useGetMeetingTimeByAdopter";
import { useEffect, useRef, useState } from "react";
import useUpdateChooseMeetingTime from "@/app/(user)/choosemeetingtime/hooks/usePutChooseMeetingTime";
import { useRouter } from "next/navigation";

interface ChooseMeetingTimeProps {
    AdoptId: string;
}

const FormSchema = z.object({
    mobile: z.boolean().default(false).optional(),
    meetingTimes: z.boolean().default(false).optional(),
});

export const ChooseMeetingTime: React.FC<ChooseMeetingTimeProps> = ({ AdoptId }) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            mobile: true,
            meetingTimes: true,
        },
    });

    const { isPending: isLoadingMeetingTimes, getMeetingTimeByAdopterApi } = useGetMeetingTimeByAdopter();
    const { isPending: isUpdating, updateChooseMeetingTimeApi } = useUpdateChooseMeetingTime();
    const router = useRouter();
    const [meetingTimes, setMeetingTimes] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const hasFetchedRef = useRef(false);

    useEffect(() => {
        const fetchMeetingTimes = async () => {
            if (AdoptId && !hasFetchedRef.current) {
                hasFetchedRef.current = true; // Đảm bảo chỉ gọi một lần

                try {
                    const result = await getMeetingTimeByAdopterApi({ Id: AdoptId });

                    if (result && result.isSuccess) {
                        if (Array.isArray(meetingTimes)) {
                            const meetingTimes = result.value.data.listMeetingTime;
                            console.log("listMeetingTime is not an array:", meetingTimes);
                            setMeetingTimes(meetingTimes);
                        } else {
                            console.error("listMeetingTime is not an array:", meetingTimes);
                        }
                    } else {
                        console.error("Failed to fetch meeting times:", result?.error);
                    }
                } catch (error) {
                    console.error("Error fetching meeting times:", error);
                }
            }
        };

        fetchMeetingTimes();
    }, [AdoptId, getMeetingTimeByAdopterApi]);



    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        if (selectedIndex !== null) {
            const selectedMeetingTime = meetingTimes[selectedIndex];
            const payload = {
                adoptId: AdoptId,
                meetingTime: selectedMeetingTime,
            };

            const result = await updateChooseMeetingTimeApi(payload);
            if (result) {
                router.push("/profile/adopt"); 
            }
        } else {
            console.log("No meeting time selected");
        }
    };


    return (
        <div className="flex flex-col px-10">
            <h2 className="text-2xl flex justify-center p-10 font-open_sans font-semibold">Meeting Time</h2>
            {isLoadingMeetingTimes && <p>Loading meeting times...</p>}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="meetingTimes"
                        render={() => (
                            <FormItem>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 p-2">Select</th>
                                                <th className="border border-gray-300 p-2">Date</th>
                                                <th className="border border-gray-300 p-2">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {meetingTimes.length > 0 ? (
                                                meetingTimes.map((time, index) => {
                                                    const date = new Date(time);
                                                    return (
                                                        <tr key={index}>
                                                            <td className="border border-gray-300 p-2 text-center">
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={selectedIndex === index}
                                                                        onCheckedChange={(checked) => {
                                                                            if (checked) {
                                                                                setSelectedIndex(index);
                                                                            } else {
                                                                                setSelectedIndex(null);
                                                                            }
                                                                        }}
                                                                        className="w-5 h-5 rounded-full border-gray-300 checked:bg-blue-500 focus:ring-0"
                                                                    />
                                                                </FormControl>
                                                            </td>
                                                            <td className="border border-gray-300 p-2 text-center">
                                                                {date.toLocaleString('vi-VN', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                    timeZone: 'UTC',
                                                                })}
                                                            </td>
                                                            <td className="border border-gray-300 p-2 text-center">
                                                                {date.toLocaleString('vi-VN', {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit',
                                                                    hour12: false,
                                                                    timeZone: 'UTC',
                                                                })}
                                                            </td>

                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={3} className="border border-gray-300 p-2 text-center">
                                                        No meeting times available
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </FormItem>
                        )}
                    />
                    <div className="pb-6 flex justify-end">
                        <Button type="submit" disabled={isUpdating}>Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    );

};
