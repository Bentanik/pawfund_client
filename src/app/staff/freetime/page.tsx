import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import FreeTimeStaff from './freetime-staff';

export const metadata: Metadata = {
    title: "Free Time",
    description: "Free Time page for PawFund",
};

export default function FreeTimePage() {
    return (
        <div>
          <FreeTimeStaff />
        </div>
    )
}
