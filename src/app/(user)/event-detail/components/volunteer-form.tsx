"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VolunteerFormProps {
    eventId: string;
    open: boolean;
    onClose?: (open: boolean) => void;
    eventActivities: API.ActivityEvent[] | null;
    onSubmit: any;
}

export default function VolunteerForm({
    eventId,
    open,
    onClose,
    eventActivities,
    onSubmit,
}: VolunteerFormProps) {
    const [description, setDescription] = useState("");
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const handleCheckboxChange = (activityId: string) => {
        setSelectedActivities((prev) =>
            prev.includes(activityId)
                ? prev.filter((id) => id !== activityId)
                : [...prev, activityId]
        );
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Submit button clicked");
        onSubmit({
            description,
            activities: selectedActivities,
        });

        setDescription("");
        setSelectedActivities([]);
    };

    const renderListOption = () =>
        eventActivities?.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 mt-[10px]">
                <Checkbox
                    // checked={selectedActivities.includes(item.activityDTO.id)}
                    onChange={() => handleCheckboxChange(item.activityDTO.id)}
                />
                <Label className="text-[#0000008b]">
                    {item?.activityDTO.name}
                </Label>
            </div>
        ));

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Volunteer Application Form</DialogTitle>
                        <DialogDescription />
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="text-[1rem] text-[#2DD4BF] font-medium mb-[20px]">
                            Choose your activity you want to join
                        </div>
                        {renderListOption()}
                    </div>
                    <Button
                        type="submit"
                        onClick={handleSubmit} // Gọi trực tiếp handleSubmit
                        className="bg-blue-700 hover:bg-blue-800"
                    >
                        Create
                    </Button>
                </DialogContent>
            </form>
        </Dialog>
    );
}
