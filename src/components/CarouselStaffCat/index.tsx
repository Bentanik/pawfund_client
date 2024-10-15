import { Card, CardContent } from "@/components/ui/card";

interface CarouselStaffCat {
  otherImages: string[];
}

export default function CarouselStaffCat({ otherImages }: CarouselStaffCat) {
  return (
    <div>
      {otherImages?.length > 0 ? (
        <div className="relative overflow-x-scroll whitespace-nowrap">
          <div>
            {otherImages.map((image, index) => (
              <div
                key={index}
                className="inline-block md:basis-1/3 lg:basis-1/4 p-1"
              >
                <Card>
                  <CardContent className="w-full p-1 transition-transform transform hover:scale-105">
                    <img
                      src={image}
                      alt={`Other image ${index + 1}`}
                      className="h-20 w-20 object-cover rounded-lg cursor-pointer"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Modal for displaying selected image */}
          {/* <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} /> */}
        </div>
      ) : (
        <p>No image</p>
      )}
    </div>
  );
}
