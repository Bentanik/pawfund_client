import CarouselStaffCat from "@/components/CarouselStaffCat";
import { Input } from "@/components/ui/input";
import useToast from "@/hooks/use-toast";
import { ImagePlus } from "lucide-react";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";

interface UploadImageEventProps {
  file: { file: File; previewUrl: string } | null;
  setFile: React.Dispatch<
    React.SetStateAction<{ file: File; previewUrl: string } | null>
  >;
}

export default function UploadImageEvent({
  file,
  setFile,
}: UploadImageEventProps) {
  const { addToast } = useToast();

  // Clean up the object URL for the preview when the component unmounts
  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file.previewUrl);
    };
  }, [file]);

  const onDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newFile = event.target.files?.[0];
    if (!newFile) return;

    const fileType = newFile.type;
    if (!fileType.startsWith("image/")) {
      addToast(
        {
          type: "error",
          description: "Please upload an image file",
          duration: 3000,
        },
        true
      );
      return;
    }

    const previewUrl = URL.createObjectURL(newFile);
    setFile({ file: newFile, previewUrl });
  };

  const handleDeleteImage = () => {
    if (file) {
      URL.revokeObjectURL(file.previewUrl);
      setFile(null);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative border-2 border-dashed h-[120px] rounded-md border-gray-500 hover:border-gray-800 transition-all group">
        <Input
          onDragEnter={onDragEnter}
          onChange={onFileChange}
          type="file"
          className="absolute w-full h-full opacity-0 z-20 cursor-pointer"
          title=""
        />
        <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full flex flex-col items-center justify-center gap-y-2">
            <figure className="px-16 py-4">
              <div className="flex items-center gap-x-3">
                <ImagePlus className="w-[30px] h-[30px] text-zinc-400" />
                <span className="text-xl font-semibold text-zinc-400">
                  Upload
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
      {file && (
        <div>
          <CarouselStaffCat
            otherImages={[file.previewUrl]}
            handleDeleteImage={handleDeleteImage}
          />
        </div>
      )}
    </div>
  );
}
