"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  catAges,
  catColors,
  sexCats,
  sterilizations,
} from "@/const/propteryCat";
import { Fragment, useEffect, useState } from "react";
import useGetDataStaffCats from "@/app/staff/pet/view-pet/hooks/useGetDataStaffCats";
import useDebounce from "@/hooks/use-debounce";
import PaginatedComponent from "@/components/paginated";
import Link from "next/link";
import useDeleteCat from "@/app/staff/pet/view-pet/hooks/useDeleteCats";
import { Backdrop } from "@/components/backdrop";
import DeleteCatDialog from "@/app/staff/pet/view-pet/components/delete-cat-dialog";

export default function ViewCatComponent() {
  const [age, setAge] = useState<string>("all");
  const [color, setColor] = useState<string>("all");
  const [sexCat, setSexCat] = useState<string>("all");
  const [sterilization, setSterilization] = useState<string>("all");
  const [data, setData] = useState<API.CatAdopt[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [deleteCatItem, setDeleteCatItem] = useState<API.CatAdopt | null>(null);

  const [searchName, setSearchName] = useState("");
  const debouncedSearchTerm = useDebounce(searchName, 500);
  const [deletePopup, setDeletePopup] = useState(false);

  const { getCatsApi } = useGetDataStaffCats();

  const { onSubmit, isPending } = useDeleteCat();

  const handleCloseDeletePopup = () => {
    setDeletePopup(false);
  };

  const handleGetData = async (pageIndex: number) => {
    try {
      const res = await getCatsApi({
        pageIndex: pageIndex,
        pageSize: 14,
        age: age,
        color: color,
        sex: sexCat,
        catName: searchName,
        sterilization: sterilization,
      });
      setTotalPage(res?.value.data.totalPages || 1);
      setData(res?.value.data.items || []);
    } catch (err) {
      setData([]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleGetData(page);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleOpenDeleteCatPopup = (catItem: API.CatAdopt) => {
    setDeleteCatItem(catItem);
    setDeletePopup(true);
  };

  const handleDeleteCat = (id: string) => {
    onSubmit({ id }, () => {
      setCurrentPage(1);
      handleCloseDeletePopup();
      handleGetData(1);
    });
  };

  useEffect(() => {
    if (currentPage !== 1) {
      handleGetData(1);
      setCurrentPage(1);
    } else handleGetData(currentPage);
  }, [age, color, sexCat, sterilization, debouncedSearchTerm]);

  const cardPet = (index: number, card: API.CatAdopt) => {
    return (
      <div
        key={index}
        className="w-[250px] min-h-[300px] bg-[#f0efef] flex flex-col px-5 py-4 items-center rounded-sm"
      >
        <figure className="border border-gray-200 rounded-sm w-full">
          {card?.imageCats[0]?.imageUrl ? (
            <img
              src={card.imageCats[0]?.imageUrl}
              alt="avatar"
              className="block rounded-sm w-full h-[200px] object-cover"
            />
          ) : (
            <div className="rounded-sm w-full h-[200px] object-cover flex items-center justify-center">
              <span className="text-xl">No Image</span>
            </div>
          )}
        </figure>

        <div className="py-3 w-full">
          <header className="flex items-center justify-between">
            <h4 className="flex-1 text-xl font-semibold text-gray-900">
              {card?.name}
            </h4>
          </header>
          <div className="mt-2">
            <button
              type="button"
              className="h-7 bg-red-500 px-3 rounded-lg hover:opacity-85"
            >
              <Link href={`/staff/pet/update-pet/${card.id}`}>
                <span className="text-[15px] text-white">Update</span>
              </Link>
            </button>
            <button
              type="button"
              onClick={() => handleOpenDeleteCatPopup(card)}
              className="ml-2 h-7 bg-black px-3 rounded-lg hover:opacity-85"
            >
              <span className="text-[15px] text-white">Delete</span>
            </button>
          </div>
          <div className="mt-4 w-14 border border-[#cecece] my-1"></div>
          <div className="my-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-x-1">
                <h5 className="text-[15px] font-semibold">Gender:</h5>
                <span className="text-[15px]">
                  {card.sex === 0 ? "Male" : "Female"}
                </span>
              </div>
              <div className="my-2 border border-dashed border-zinc-600"></div>
              <div className="flex items-center gap-x-1 ">
                <h5 className="text-[15px] font-semibold">Age:</h5>
                <span className="text-[15px]">{card.age}</span>
              </div>
              <div className="my-2 border border-dashed border-zinc-600"></div>
              <div className="flex items-center gap-x-1">
                <h5 className="text-[15px] font-semibold">Color:</h5>
                <span className="text-[15px]">{card.color}</span>
              </div>
              <div className="my-2 border border-dashed border-zinc-600"></div>
              <div className="flex items-center gap-x-1">
                <h5 className="text-[15px] font-semibold">Sterilization:</h5>
                <span className="text-[15px]">
                  {card.sterilization ? "Neutered" : "Intact"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderListCardPet = () => {
    return data?.map((item, index) => {
      return cardPet(index, item);
    });
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-4xl uppercase font-semibold text-center text-gray-900">
        View cats
      </h1>
      <div className="mt-7 grid grid-cols-3 gap-x-10 gap-y-3">
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-base text-[#6f6f6f]">Gender</label>
          <Select value={sexCat} onValueChange={(value) => setSexCat(value)}>
            <SelectTrigger className="w-full border-2 border-gray-500">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"all"}>All</SelectItem>
              {sexCats?.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.sex}>
                    {item.sex}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-base text-[#6f6f6f]">Age</label>
          <Select value={age} onValueChange={(value) => setAge(value)}>
            <SelectTrigger className="w-full border-2 border-gray-500">
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {catAges?.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-base text-[#6f6f6f]">Color</label>
          <Select value={color} onValueChange={(value) => setColor(value)}>
            <SelectTrigger className="w-full border-2 border-gray-500">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {catColors?.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-base text-[#6f6f6f]">Sterilization</label>
          <Select
            value={sterilization}
            onValueChange={(value) => setSterilization(value)}
          >
            <SelectTrigger className="w-full border-2 border-gray-500">
              <SelectValue placeholder="Sterilization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {sterilizations?.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value ? "true" : "false"}>
                    {item.value ? "True" : "False"}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label className="text-base text-[#6f6f6f]">Name</label>
          <Input
            type="text"
            className="w-full border-2 border-gray-500 focus-visible:ring-0"
            value={searchName}
            onChange={handleChangeName}
          />
        </div>
      </div>
      <div className="mt-10">
        {data?.length > 0 ? (
          <Fragment>
            <div className="grid grid-cols-4 gap-y-3">
              {renderListCardPet()}
            </div>
            <div className="mt-5">
              <PaginatedComponent
                totalPages={totalPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </Fragment>
        ) : (
          <h4 className="text-xl">Not available for adoption</h4>
        )}
      </div>
      <DeleteCatDialog
        open={deletePopup}
        onClose={handleCloseDeletePopup}
        catItem={deleteCatItem || null}
        onDelete={handleDeleteCat}
        isPending={isPending}
      />
    </div>
  );
}
