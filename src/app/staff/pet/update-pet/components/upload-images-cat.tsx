import CarouselStaffCat from "@/components/CarouselStaffCat";
import { Input } from "@/components/ui/input";
import useToast from "@/hooks/use-toast";
import { ImagePlus } from "lucide-react";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";

interface UploadImageCatProps {
  fileList: { file: File; previewUrl: string }[];
  setFileList: React.Dispatch<
    React.SetStateAction<{ file: File; previewUrl: string }[]>
  >;
}

export default function UploadImageCat({
  fileList,
  setFileList,
}: UploadImageCatProps) {
  const { addToast } = useToast();

  // Upload image
  useEffect(() => {
    return () => {
      fileList.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    };
  }, [fileList]);

  const onDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newFiles = event.target.files;
    if (!newFiles) return;

    const newFileList = Array.from(newFiles).map((file) => {
      const fileType = file.type;
      if (!fileType.startsWith("image/")) {
        addToast(
          {
            type: "error",
            description: "Please upload an image file",
            duration: 3000,
          },
          true
        );
        return null;
      }
      return {
        file,
        previewUrl: URL.createObjectURL(file),
      };
    });

    const validFiles = newFileList.filter((file) => file !== null);
    setFileList((prev) => [...prev, ...validFiles]);
  };

  const handleDeleteImage = (previewUrl: string) => {
    setFileList((prev) =>
      prev.filter((item) => item.previewUrl !== previewUrl)
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="relative border-2 border-dashed h-[320px] rounded-md border-gray-500 hover:border-gray-800 transition-all group">
        <Input
          onDragEnter={onDragEnter}
          onChange={onFileChange}
          type="file"
          className="absolute w-full h-full opacity-0 z-20 cursor-pointer"
          title=""
          multiple
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
      <div>
        <CarouselStaffCat
          otherImages={fileList.map((item) => item.previewUrl)}
          handleDeleteImage={handleDeleteImage}
        />
      </div>
    </div>
  );
}
