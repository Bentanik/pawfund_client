"use client";

import { Input } from "@/components/ui/input";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePropertyCat from "../hooks/usePropertyCat";
import UploadImageCat from "./upload-images-cat";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import ImageModal from "@/components/image-cat-modal";
import { useState } from "react";
import CarouselStaffCat from "@/components/CarouselStaffCat";



export default function CreatePetForm() {
  // Quill
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [
        [{ header: "1" }, { header: "2" }],
        [{ size: [] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
    formats: [
      "size",
      "header",
      "bold",
      "italic",
      "underline",
      "list",
      "script",
    ],
  });

  // Get api proptery cat
  const { sexProperties, breedProperties, colorProperties } = usePropertyCat();

  // Handle upload image

  return (
    <div className="flex flex-col gap-y-4">
      <div>Product</div>
      <h1 className="text-3xl font-semibold">Create pet</h1>
      <form>
        <div className="w-full flex gap-x-3">
          <div className="basis-6/10 rounded-lg border-2 border-gray-300">
            <div className="px-5 py-4">
              <h3 className="text-[18px] text-gray-500">Cat</h3>
              <div className="my-3 flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-2">
                  <label>Cat name</label>
                  <Input className="border-2 border-gray-400 focus-visible:ring-0 focus-visible:none" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label>Age</label>
                  <Input
                    type="number"
                    className="border-2 border-gray-400 focus-visible:ring-0 focus-visible:none"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label>Description</label>
                  <div ref={quillRef} className="quill-custom-styles" />
                </div>
                <div className="grid grid-cols-4 gap-x-2">
                  <div className="flex flex-col gap-y-2">
                    <label>Sex</label>
                    <Select>
                      <SelectTrigger className="w-[180px] border-2 border-gray-400">
                        <SelectValue placeholder="Choose gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {sexProperties?.map((item, index) => {
                            return (
                              <SelectItem key={index} value={item?.id}>
                                {item?.value}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label>Breed</label>
                    <Select>
                      <SelectTrigger className="w-[180px] border-2 border-gray-400">
                        <SelectValue placeholder="Choose breed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {breedProperties?.map((item, index) => {
                            return (
                              <SelectItem key={index} value={item?.id}>
                                {item?.value}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label>Color</label>
                    <Select>
                      <SelectTrigger className="w-[180px] border-2 border-gray-400">
                        <SelectValue placeholder="Choose color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {colorProperties?.map((item, index) => {
                            return (
                              <SelectItem key={index} value={item?.id}>
                                {item?.value}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label>Size</label>
                    <Select>
                      <SelectTrigger className="w-[180px] border-2 border-gray-400">
                        <SelectValue placeholder="Choose size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {sexProperties?.map((item, index) => {
                            return (
                              <SelectItem key={index} value={item?.id}>
                                {item?.value}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg border-2 border-gray-300">
            <div className="px-5 py-4">
              <h3 className="text-[18px] text-gray-500">Cat</h3>
              <div className="my-3 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col gap-y-2">
                    <label>Images</label>
                    <UploadImageCat />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-x-4">
                  <button
                    type="button"
                    className="bg-blue-400 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <span className="text-white">Review</span>
                  </button>
                  <button
                    type="button"
                    className="bg-blue-400 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <span className="text-white">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
