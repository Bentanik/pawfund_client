"use client";

import { Input } from "@/components/ui/input";
import useCreateEventForm from "@/app/staff/event/create-event/hooks/useCreateEventForm";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Backdrop } from "@/components/backdrop";
import { CreateEventBodyType } from "@/utils/schemaValidations/create-event.schema";
import UploadImageEvent from "@/app/staff/event/create-event/components/upload-images-event";
import useToast from "@/hooks/use-toast";

export default function CreateEventForm() {
  const { addToast } = useToast();

  const { register, handleSubmit, watch, onSubmit, errors, isPending } =
    useCreateEventForm();

  const [thumbImageFile, setThumbImageFile] = useState<{
    file: File;
    previewUrl: string;
  } | null>(null);
  const [imageFile, setImageFile] = useState<{
    file: File;
    previewUrl: string;
  } | null>(null);

  const handleFormSubmit = (data: CreateEventBodyType) => {
    try {
      if (thumbImageFile === null || imageFile === null) {
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

      const form: REQUEST.TCreateEvent = {
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        maxAttendees: data.maxAttendance,
        thumbHeroUrl: thumbImageFile.file,
        imagesUrl: imageFile.file,
      };
      onSubmit(form, () => {
        setThumbImageFile(null);
        setImageFile(null);
      });
    } catch (err) {}
  };

  return (
    <div className="flex pb-7">
      <form className="w-full h-full" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="w-full flex flex-col gap-x-7">
          <h4 className="text-2xl font-semibold">Create event</h4>
          <div className="flex items-start gap-x-9">
            <div className="w-[60%] rounded-lg">
              <div>
                <div className="my-5 flex flex-col gap-y-5">
                  <div className="flex flex-col gap-y-2">
                    <label className="text-base font-semibold">
                      Name event
                    </label>
                    <Input
                      className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                      autoComplete="off"
                      placeholder="e.g. Hehe"
                      {...register("name")}
                    />
                    {errors?.name && (
                      <span className="text-red-500">
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="text-base font-semibold">
                      Max attendance
                    </label>
                    <Input
                      className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                      autoComplete="off"
                      placeholder="e.g. 100"
                      {...register("maxAttendance", { valueAsNumber: true })}
                    />
                    {errors?.maxAttendance && (
                      <span className="text-red-500">
                        {errors?.maxAttendance?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between gap-x-4">
                    <div className="w-full flex flex-col gap-y-2">
                      <label className="text-base font-semibold">
                        Start date
                      </label>
                      <Input
                        type="datetime-local"
                        className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                        autoComplete="off"
                        placeholder="e.g. Start date must is date future"
                        {...register("startDate", { valueAsDate: true })}
                      />
                      {errors?.startDate && (
                        <span className="text-red-500">
                          {errors?.startDate?.message}
                        </span>
                      )}
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                      <label className="text-base font-semibold">
                        End date
                      </label>
                      <Input
                        type="datetime-local"
                        className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                        autoComplete="off"
                        placeholder="e.g. End date must is date future"
                        {...register("endDate", { valueAsDate: true })}
                      />
                      {errors?.endDate && (
                        <span className="text-red-500">
                          {errors?.endDate?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <label className="text-base font-semibold">
                      Description
                    </label>
                    <div className="flex flex-col gap-y-1">
                      <Textarea
                        className="border h-[250px] bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none resize-none"
                        {...register("description")}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-red-500">
                          {errors?.description?.message}
                        </span>
                        <span className="text-[14px] text-gray-600">
                          {watch("description")?.length} character
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg">
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-3">
                  <label className="text-base font-semibold">
                    Main event image
                  </label>
                  <div className="flex flex-col gap-y-3">
                    <UploadImageEvent
                      file={thumbImageFile}
                      setFile={setThumbImageFile}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <label className="text-base font-semibold">
                    Event images
                  </label>
                  <div className="flex flex-col gap-y-3">
                    <UploadImageEvent file={imageFile} setFile={setImageFile} />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-4">
                  <button
                    type="submit"
                    className="bg-blue-400 px-4 py-2 rounded-lg shadow-sm"
                  >
                    <span className="text-white">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Backdrop open={isPending} />
    </div>
  );
}
