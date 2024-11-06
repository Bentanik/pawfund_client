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
import { motion } from "framer-motion";
import { IoColorFill } from "react-icons/io5";

interface CatProfileProps {
  mainImage: string;
  otherImages: string[];
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 w-full mx-auto bg-white rounded-lg shadow-md font-open_sans">
      {/* Image gallery */}
      <div className="flex flex-col items-center">
        <img
          src={mainImage}
          alt={`Main image of ${name}`}
          className={`w-full h-96 rounded-lg object-cover cursor-pointer ${isDisabled ? "" : "transition-transform transform hover:scale-105"
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
                          src={image}
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

        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          images={allImages}
          currentIndex={currentImageIndex}
        />
      </div>

      {/* Cat information */}
      <div className="space-y-6 rounded-lg shadow-sm p-8">
        <motion.h2
          className="text-2xl font-semibold text-gray-700 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Gender</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {gender}
                </span>
                <i className="fas fa-paw text-teal-400"></i>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Age</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {age}
                </span>
                <i className="fa-regular fa-calendar-days text-teal-400"></i>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Status</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {"Adopted"}
                </span>
                <i className="fa-solid fa-circle-info text-teal-400"></i>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Breed</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {breed}
                </span>
                <i className="fa-solid fa-cat text-teal-400"></i>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Size</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {weight}
                </span>
                <i className="fa-solid fa-weight-scale text-teal-400"></i>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Color</label>
              <div className="flex items-center border rounded-sm p-2">
                <span className="border-none w-full text-gray-500">
                  {color}
                </span>
                <i className="fa-solid fa-droplet text-teal-400"></i>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="text-gray-600 font-semibold">Description</label>
            <div className="mt-4 text-gray-500 text-justify">
              {description}
            </div>
          </motion.div>

          <div className="flex justify-center mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-3/4 lg:w-1/2 bg-teal-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-teal-500 focus:outline-none"
              onClick={openAdoptionModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Apply for Adoption
            </motion.button>
          </div>
        </div>
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
