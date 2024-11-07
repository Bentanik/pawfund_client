import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
}

export default function VolunteerForm({
    eventId,
    open,
    onClose,
    eventActivities,
}: VolunteerFormProps) {
    const renderListOption = () =>
        eventActivities?.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 mt-[10px]">
                <Checkbox />
                {item?.activityDTO.numberOfVolunteer !==
                    item?.activityDTO.quantity && (
                    <Label className="text-[#0000008b]">
                        {item?.activityDTO.name}
                    </Label>
                )}
            </div>
        ));

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Volunteer Application Form</DialogTitle>
                    <DialogDescription />
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input id="username" className="col-span-3" />
                    </div>
                </div>
                <div>
                    <div className="text-[1rem] text-[#2DD4BF] font-medium mb-[20px]">
                        Choose your activity you want to join
                    </div>
                    {renderListOption()}
                </div>
                <DialogFooter className="!justify-center mt-[30px]">
                    <Button
                        type="submit"
                        className="hover:bg-[#2DD4BF] !justify-center"
                    >
                        Apply Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
