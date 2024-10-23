import React from 'react'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import StaffApplication from '@/app/staff/application/application';


export const metadata: Metadata = {
    title: "Application",
    description: "Application page for PawFund",
};
export default function StaffApplicationPage() {
  return (
    <div>
      <StaffApplication />
    </div>
  )
}
