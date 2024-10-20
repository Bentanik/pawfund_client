"use client";
import React, { useState, useEffect } from "react";
import CatProfile from "@/components/catprofile";

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
    console.log(catId);
    const [catData, setCatData] = useState<CatData>({
        mainImage: "", // Khởi tạo rỗng, q sau này sẽ được cập nhật từ API
        otherImages: [],
        name: "",
        gender: "",
        age: "",
        breed: "",
        size: "",
        color: "",
        chipStatus: "",
        description: "",
        catId: "",
    });

    useEffect(() => {
        // Mô phỏng việc lấy dữ liệu từ API
        const fetchCatData = async () => {
            // Giả sử bạn sẽ gọi API ở đây
            // const response = await fetch('URL_TO_API');
            // const data = await response.json();

            // Mô phỏng dữ liệu được trả về từ API
            const data: CatData = {
                mainImage: '/images/meo5.jpeg',
                otherImages: ['/images/meo2.jpg', '/images/meo3.jpg', '/images/meo4.jpg', '/images/meo3.jpg', '/images/meo3.jpg', '/images/meo3.jpg', '/images/meo3.jpg'],
                name: 'hello',
                gender: 'Male',
                age: '5',
                breed: '',
                size: '',
                color: '',
                chipStatus: 'Adopted',
                description: '123',
                catId: 'A7AF8EAA-2E88-4B47-B618-78F66114CBCXs',
            };

            setCatData(data);
        };

        fetchCatData();
    }, []);

    return (
        <div>
            <CatProfile
                mainImage={catData.mainImage}
                otherImages={catData.otherImages}
                name={catData.name}
                gender={catData.gender}
                age={catData.age}
                breed={catData.breed}
                size={catData.size}
                color={catData.color}
                chipStatus={catData.chipStatus}
                description={catData.description}
                catId={catId}
            />
        </div>
    );
};

export default ViewProfileCat;