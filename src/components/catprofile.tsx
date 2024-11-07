import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageModal from "./image-cat-modal";
import AdoptionModal from "./adoptionmodal";
import { useServiceCreateAdoptApplication } from "@/services/adopt/services";
import useToast from "@/hooks/use-toast";
interface CatProfileProps {
  mainImage: string;
  otherImages: API.CatImage[];
  name: string;
  gender: string;
  age: string;
  breed: string;
  weight: string;
  color: string;
  description: string;
  catId: string;
}

const CatProfile: React.FC<CatProfileProps> = ({
  mainImage,
  otherImages,
  name,
  gender,
  age,
  breed,
  color,
  weight,
  description,
  catId,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [adoptionModalIsOpen, setAdoptionModalIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { mutate, isPending } = useServiceCreateAdoptApplication();
  const { addToast } = useToast();

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsDisabled(true);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsDisabled(false);
  };

  const openAdoptionModal = () => {
    setAdoptionModalIsOpen(true);
  };

  const closeAdoptionModal = () => {
    setAdoptionModalIsOpen(false);
  };

  const handleAdopt = async (data: any) => {
    const applicationData = {
      description: data?.description,
      catId: catId,
    };
    try {
      mutate(applicationData, {
        onSuccess: async (data) => {
          if (data) {
            if (data.value.code.includes("adopt_noti")) {
              addToast({
                description: data.value.message,
                type: "success",
                duration: 5000,
              });
            }
          }
        },
        onError: (error) => {
          if (error.errorCode.includes("adopt_noti")) {
            addToast({
              description: error.detail,
              type: "error",
              duration: 5000,
            });
          }
        },
      });
    } catch (error) {
      console.error("Có lỗi xảy ra khi gửi yêu cầu nhận nuôi:", error);
    }
  };

  const allImages = [mainImage, ...otherImages];

  return (
    <div className="grid grid-cols-12 gap-6 p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      {/* Image gallery */}
      <div className="col-span-12 md:col-span-6 mb-6 ml-20">
        <img
          src={mainImage}
          alt={`Main image of ${name}`}
          className={`w-full h-96 rounded-lg object-cover cursor-pointer ${
            isDisabled ? "" : "transition-transform transform hover:scale-105"
          }`}
          onClick={() => openModal(0)}
        />

        <Carousel
          opts={{
            align: "start",
          }}
          className="flex flex-wrap justify-between mt-4"
        >
          <CarouselContent>
            {otherImages.length > 0 ? (
              otherImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="w-full p-1 transition-transform transform hover:scale-105">
                        <img
                          src={image.imageUrl}
                          alt={`Other image ${index + 1}`}
                          className="h-48 w-full object-cover rounded-lg cursor-pointer"
                          onClick={() => openModal(index + 1)}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p>No additional images</p>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Modal component */}
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          images={allImages?.map((image) => image.toString())}
          currentIndex={currentImageIndex}
        />
      </div>

      {/* Cat information */}
      <div className="col-span-12 md:col-span-6 mr-20">
        <h2 className="text-4xl font-bold mb-4 text-center">Cat Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-40">
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Gender:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={gender}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fas fa-paw"></i>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Age:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={age}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fa-regular fa-calendar-days"></i>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-40">
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Status:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={"Adopted"}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Breed:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={breed}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fa-solid fa-cat"></i>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-40">
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Size:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={weight}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fa-solid fa-weight-scale"></i>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold w-32 text-xl">Color:</label>
              <div className="flex items-center border rounded-lg p-2 w-40">
                <input
                  type="text"
                  value={color}
                  className="border-none w-full focus:outline-none text-gray-500"
                  readOnly
                />
                <i className="fa-solid fa-droplet"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 ml-20">
            <label className="font-semibold w-32 text-xl">Description</label>
            <hr className="my-2 border-gray-600" />
            <h3 className="text-gray-500">{description}</h3>
          </div>
        </div>
        <button
          className="mt-6 bg-teal-400 text-white px-6 py-3 rounded-lg hover:bg-teal-300 transition-transform transform hover:scale-105 ml-20"
          onClick={openAdoptionModal}
        >
          Adopt
        </button>
      </div>
      <AdoptionModal
        isOpen={adoptionModalIsOpen}
        onRequestClose={closeAdoptionModal}
        onSubmit={handleAdopt}
      />
    </div>
  );
};

export default CatProfile;
