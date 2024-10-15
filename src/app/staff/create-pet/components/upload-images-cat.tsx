"use client";

import CarouselStaffCat from "@/components/CarouselStaffCat";
import { Input } from "@/components/ui/input";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";

export default function UploadImageCat() {
  // Upload image
  const [fileList, setFileList] = useState<
    { file: File; previewUrl: string }[]
  >([]);

  useEffect(() => {
    return () => {
      fileList.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    };
  }, [fileList]);

  const onDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragLeave = () => {};

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newFiles = event.target.files;
    if (!newFiles) return;
    setFileList((prev) => [
      ...prev,
      {
        file: newFiles[0],
        previewUrl: URL.createObjectURL(newFiles[0]),
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="relative border-2 border-dashed h-[200px] rounded-md border-gray-300 hover:border-gray-700 transition-all group">
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
            <figure className="bg-orange-200 px-16 py-4">
              <img
                src="/images/cat.png"
                alt="Upload"
                width={100}
                height={100}
              />
            </figure>
            <div className="flex flex-col">
              <span className="font-mono text-base text-center text-gray-400 group-hover:text-gray-800">
                Click here
              </span>
              <span className="font-mono text-base text-center text-gray-400 group-hover:text-gray-800">
                Drag and drop image
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CarouselStaffCat
          otherImages={fileList?.map((item) => item.previewUrl)}
        />
      </div>
    </div>
  );
}
