import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface CatProfileProps {
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
}

const CatProfile: React.FC<CatProfileProps> = ({
    mainImage,
    otherImages,
    name,
    gender,
    age,
    breed,
    size,
    color,
    chipStatus,
    description,
}) => {
    return (
        <div className="grid grid-cols-12 gap-6 p-6 w-full mx-auto bg-white rounded-lg shadow-md">
            {/* Image gallery */}
            <div className="col-span-12 md:col-span-6 mb-6 ml-20">
                <img
                    src={mainImage}
                    alt={`Main image of ${name}`}
                    className="w-full h-96 rounded-lg object-cover transition-transform transform hover:scale-105"
                />
                <div className="flex flex-wrap justify-between mt-4">
                    {otherImages.length > 0 ? (
                        otherImages.map((image, index) => (
                            <div className="w-1/2 p-1 transition-transform transform hover:scale-105" key={index}>
                                <img
                                    src={image}
                                    alt={`Other image ${index + 1}`}
                                    className="h-48 w-full object-cover rounded-lg" // Đảm bảo ảnh phụ có chiều cao cố định và căn chỉnh
                                />
                            </div>
                        ))
                    ) : (
                        <p>No additional images</p>
                    )}
                </div>
            </div>

            {/* Cat information */}
            <div className="col-span-12 md:col-span-6 mr-20">
                <h2 className="text-4xl font-bold mb-4 text-center">Cat Profile</h2>
                <div className='space-y-4'>
                    <div className="flex items-center justify-center gap-40">
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Gender:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={gender} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fas fa-paw"></i>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Age:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={age} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fa-regular fa-calendar-days"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-40">
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Status:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={chipStatus} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Breed:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={breed} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-40">
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Size:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={size} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className="font-semibold w-32 text-xl">Color:</label>
                            <div className="flex items-center border rounded-lg p-2 w-40">
                                <input type="text" value={color} className="border-none w-full focus:outline-none text-gray-500" readOnly />
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-4 ml-20'>
                        <label className="font-semibold w-32 text-xl">Description</label>
                        <hr className="my-4 border-gray-600" />
                        <h3 className='text-gray-500'>Mèo (Felis catus) là loài động vật có vú phổ biến và được nuôi làm thú cưng. Chúng có nhiều giống với hình dáng và màu sắc đa dạng. Mèo nổi bật với tính cách độc lập, khả năng tự chăm sóc và kỹ năng săn mồi. Chúng giao tiếp qua âm thanh như kêu và cử chỉ thân thiện như cọ mũi. Mèo không chỉ mang lại niềm vui cho con người mà còn giúp giảm căng thẳng.</h3>
                    </div>
                </div>
                <button className="mt-6 bg-teal-400 text-white px-6 py-3 rounded-lg hover:bg-teal-300 transition-transform transform hover:scale-105 ml-20">
                    GIÚP ĐỠ
                </button>

            </div>
        </div>
    );
};

export default CatProfile;