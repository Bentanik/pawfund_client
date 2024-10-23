import useToast from "@/hooks/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Backdrop } from "@/components/backdrop";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Gender } from "@/const/user";

interface EditPersonalProps {
  open: boolean;
  onClose: any;
}

export default function EditPersonal({ open, onClose }: EditPersonalProps) {
  const { addToast } = useToast();

  const handleCloseEditAvatar = () => {};

  return (
    <Dialog open={open} onOpenChange={handleCloseEditAvatar}>
      <DialogContent className="bg-white select-none" hideClose>
        <div className="py-3 font-sans select-none">
          <div className="border-b-2 pb-1 px-4">
            <h3 className="text-xl font-semibold">Edit information</h3>
          </div>
          <div className="py-3 px-4">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between gap-x-3">
                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    First Name
                  </label>
                  <Input
                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                    autoComplete="off"
                    placeholder="e.g. Hehe"
                    // {...register("catName")}
                  />
                </div>

                <div className="basis-1/2 flex flex-col gap-y-2">
                  <label className="text-[15px] font-medium text-gray-400">
                    Last Name
                  </label>
                  <Input
                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                    autoComplete="off"
                    placeholder="e.g. Hehe"
                    // {...register("catName")}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="basis-1/2 flex flex-col gap-y-2">
                <label className="text-[15px] font-medium text-gray-400">
                  Email address
                </label>
                <Input
                  className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                  autoComplete="off"
                  placeholder="e.g. Hehe"
                  // {...register("catName")}
                />
              </div>

              <div className="basis-1/2 flex flex-col gap-y-2 justify-end">
                <label className="text-[15px] font-medium text-gray-400">
                  Gender
                </label>
                <Select>
                  <SelectTrigger className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Gender?.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <Backdrop open={false} />
    </Dialog>
  );
}
