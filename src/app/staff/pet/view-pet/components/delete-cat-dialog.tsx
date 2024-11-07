import { Backdrop } from "@/components/backdrop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface DeleteCatDialogProps {
  open: boolean;
  onClose: any;
  catItem: API.CatAdopt | null;
  isPending: boolean;
  onDelete: (id: string) => void;
}

export default function DeleteCatDialog({
  open,
  onClose,
  catItem,
  isPending,
  onDelete,
}: DeleteCatDialogProps) {
  const handleDelete = () => {
    onDelete(catItem?.id || "");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle></DialogTitle>
      <DialogContent className="bg-white select-none" hideClose>
        <div className="border-b-2 py-3 px-4 flex flex-col">
          <header className="flex items-center justify-between">
            <h2 className="font-semibold text-xl">
              Are you sure delete cat name: {catItem?.name}!
            </h2>
            <button type="button" onClick={onClose}>
              <div className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 cursor-pointer">
                <X className="w-4 h-4" />
              </div>
            </button>
          </header>
          <figure className="border border-gray-200 rounded-sm w-full">
            {catItem?.imageCats[0]?.imageUrl ? (
              <img
                src={catItem?.imageCats[0]?.imageUrl}
                alt="avatar"
                className="block rounded-sm w-full h-[200px] object-cover"
              />
            ) : (
              <div className="rounded-sm w-full h-[200px] object-cover flex items-center justify-center">
                <span className="text-xl">No Image</span>
              </div>
            )}
          </figure>
          <div className="mt-3 flex items-center gap-x-3">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="bg-black hover:bg-black hover:opacity-95"
            >
              <span className="text-white">Cancel</span>
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-600 hover:opacity-95"
            >
              <span className="text-white">Delete</span>
            </Button>
          </div>
        </div>
      </DialogContent>
      <Backdrop open={isPending} />
    </Dialog>
  );
}
