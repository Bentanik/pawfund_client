"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UploadImageCat from "@/app/staff/create-pet/components/upload-images-cat";
import useCreatePetForm from "@/app/staff/create-pet/hooks/useCreatePetForm";
import { useState } from "react";
import { breedCats, sexCats, TSexCat } from "@/const/propteryCat";
import { Textarea } from "@/components/ui/textarea";
import { CreatePetBodyType } from "@/utils/schemaValidations/create-pet.schema";
import { Backdrop } from "@/components/backdrop";

export default function CreatePetForm() {
  // Use create pet form
  const {
    register,
    handleSubmit,
    watch,
    onSubmit,
    errors,
    setError,
    setValue,
    isPending,
  } = useCreatePetForm();

  const [fileList, setFileList] = useState<
    { file: File; previewUrl: string }[]
  >([]);

  const [breed, setBreed] = useState<string>(breedCats[0]?.name || "");
  const [sexCat, setSexCat] = useState<TSexCat>(sexCats[0]);

  const handleFormSubmit = (data: CreatePetBodyType) => {
    try {
      const form: REQUEST.TCreateCat = {
        catName: data.catName,
        age: data.age,
        sex: sexCat.id,
        weight: data.weight,
        breed: breed,
        description: data.description,
        color: data.color,
        images: fileList.map((item) => item.file),
      };
      onSubmit(form, () => setFileList([]));
      setBreed("");
    } catch (err) {}
  };

  const handleSearchBreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = breedCats.filter((breed) =>
      breed.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    const value = filtered?.length > 0 ? filtered[0].name : breedCats[0].name;
    setBreed(value);
  };

  return (
    <div className="flex">
      <form className="w-full h-full" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="w-full flex gap-x-7">
          <div className="w-[60%] rounded-lg">
            <div>
              <h4 className="text-2xl font-semibold">Cat information</h4>
              <div className="my-5 flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <label className="text-base font-semibold">Cat name</label>
                  <Input
                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                    autoComplete="off"
                    placeholder="e.g. Hehe"
                    {...register("catName")}
                  />
                  {errors?.catName && (
                    <span className="text-red-500">
                      {errors?.catName?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="flex items-center gap-x-5">
                    <div className="w-[70%] flex flex-col gap-y-2">
                      <label className="text-base font-semibold">Age</label>
                      <Input
                        className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                        autoComplete="off"
                        placeholder="e.g. YoungOlder"
                        {...register("age")}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-y-2">
                        <label className="text-base font-semibold">Sex</label>
                        <Select
                          value={sexCat.sex}
                          onValueChange={(value) =>
                            setSexCat(
                              value === "Male" ? sexCats[0] : sexCats[1]
                            )
                          }
                        >
                          <SelectTrigger className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none">
                            <SelectValue placeholder="Choose sex cat" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {sexCats?.map((item, index) => (
                                <SelectItem key={index} value={item.sex}>
                                  {item?.sex}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  {errors?.age && (
                    <span className="text-red-500">{errors?.age?.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <label className="text-base font-semibold">Color</label>
                  <Input
                    className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none"
                    autoComplete="off"
                    placeholder="e.g. Mau dom"
                    {...register("color")}
                  />
                  {errors?.color && (
                    <span className="text-red-500">
                      {errors?.color?.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <label className="text-base font-semibold">Weight</label>
                  <div className="relative">
                    <Input
                      type="number"
                      className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none pr-11"
                      placeholder="eg. 10"
                      {...register("weight", { valueAsNumber: true })}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 right-5 text-base text-gray-400">
                      Kg
                    </span>
                  </div>
                  {errors?.weight && (
                    <span className="text-red-500">
                      {errors?.weight?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-4">
                    <label className="text-[15px] font-semibold">Breed</label>
                    <div>
                      <div className="w-[200px]">
                        <Input
                          type="text"
                          className="text-xs py-3 h-6 border bg-[#f2f4f7] focus-visible:ring-1 focus-visible:none"
                          placeholder="eg. Abyssinian"
                          onChange={handleSearchBreed}
                        />
                      </div>
                    </div>
                  </div>
                  <Select
                    value={breed}
                    onValueChange={(value) => setBreed(value)}
                  >
                    <SelectTrigger className="border bg-[#f2f4f7] focus-visible:ring-0 focus-visible:none">
                      <SelectValue placeholder="Choose breed cat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {breedCats?.map((item, index) => (
                          <SelectItem key={index} value={item?.name}>
                            {item?.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label className="text-base font-semibold">Description</label>
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
                        {watch("description").length} character
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
                <div className="flex flex-col gap-y-4">
                  <label className="text-base font-semibold">Cat name</label>
                  <UploadImageCat
                    fileList={fileList}
                    setFileList={setFileList}
                  />
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
      </form>
      <Backdrop open={isPending} />
    </div>
  );
}
