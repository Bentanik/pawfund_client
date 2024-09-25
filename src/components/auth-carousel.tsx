'use client'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

export default function AuthCarousel() {
    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: false
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className='px-[20px] flex flex-col items-center'>
                            <figure className="w-[450px] h-[450px] flex items-end justify-between">
                                <Image src="/images/auth01.png"
                                    width={430}
                                    height={430}
                                    alt="image"
                                    objectFit="cover"
                                />
                            </figure>
                            <span className='text-2xl text-gray-50 text-center font-montserrat_alternates'>Love is action <br /> Together, we create a loving home for pets</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='px-[20px] flex flex-col items-center'>
                            <figure className="w-[450px] h-[450px] flex items-center justify-between">
                                <Image src="/images/auth02.png"
                                    width={430}
                                    height={430}
                                    alt="image"
                                    objectFit="cover"
                                />
                            </figure>
                            <span className='text-2xl text-gray-50 text-center font-montserrat_alternates'>Healing Hearts, One Paw at a Time <br /> Adopt and Let Animals Mend Your Soul</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='px-[20px] flex flex-col items-center'>
                            <figure className="w-[450px] h-[450px] flex items-center justify-between">
                                <Image src="/images/auth03.png"
                                    width={430}
                                    height={430}
                                    alt="image"
                                    objectFit="cover"
                                />
                            </figure>
                            <span className='text-2xl text-gray-50 text-center font-montserrat_alternates'>Adopt, Don’t Shop <br />  Give a Rescue Pet a Loving Home</span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

        </div>
    )
}
