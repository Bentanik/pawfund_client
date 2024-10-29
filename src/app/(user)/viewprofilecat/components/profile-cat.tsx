"use client";
import React, { useState, useEffect } from "react";
import CatProfile from "@/components/catprofile";
import useGetCat from "@/app/(user)/viewprofilecat/hooks/useGetCat";
import { Backdrop } from "@/components/backdrop";

// Định nghĩa interface cho dữ liệu mèo
interface CatData {
  mainImage: string;
  otherImages: string[];
  name: string;
  gender: string;
  age: string;
  breed: string;
  size: string;
  color: string;
  chipStatus: string;
  description: string;
  catId: string;
}

interface ViewProfileCatProps {
  catId: string;
}

const ViewProfileCat = ({ catId }: ViewProfileCatProps) => {
  const { getCatApi, isPending } = useGetCat();

  const [catData, setCatData] = useState<API.TGetCat | null>(null);
  useEffect(() => {
    // Mô phỏng việc lấy dữ liệu từ API
    const fetchCatData = async () => {
      const res = await getCatApi({
        Id: catId,
      });
      if (res) setCatData(res?.value?.data);
    };

    fetchCatData();
  }, []);

  return (
    <div>
      {isPending ? (
        <Backdrop open={isPending} />
      ) : (
        <CatProfile
          mainImage={catData?.images?.at(0) || ""}
          otherImages={catData?.images || []}
          name={catData?.name || ""}
          gender={catData?.sex || ""}
          age={catData?.age || ""}
          breed={catData?.breed || ""}
          color={catData?.color || ""}
          description={catData?.description || ""}
          weight={catData?.weight.toString() || ""}
          catId={catId}
        />
      )}
    </div>
  );
};

export default ViewProfileCat;
