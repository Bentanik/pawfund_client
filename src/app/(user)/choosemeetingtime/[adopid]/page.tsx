import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ChooseMeetingTime } from '../components/choose-meeting-time';

export const metadata: Metadata = {
    title: "Choose Meeting Time",
    description: "Choose Meeting Time page for PawFund",
};

export default function MeetingTime({ params }: any) {
    // console.log("Params:", params);  // Xem giá trị của params
    const { adopid } = params || {};  // Lấy adopid từ params
    // console.log("Adopt ID:", adopid); // Đổi tên biến để lấy giá trị

    return (
        <div>
            {adopid ? <ChooseMeetingTime AdoptId={adopid} /> : <p>No ID provided</p>}
        </div>
    )
}
