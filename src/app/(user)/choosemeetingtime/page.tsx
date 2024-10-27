import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ChooseMeetingTime } from './components/choose-meeting-time';


export const metadata: Metadata = {
    title: "Choose Meeting Time",
    description: "Choose Meeting Time page for PawFund",
};
export default function AboutUsPage() {
    return (
        <div>
            <ChooseMeetingTime />
        </div>
    )
}
