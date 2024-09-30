"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const AboutUs = () => {

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.2 });


    return (
        <div className='grid grid-cols-12'>
            <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className='col-span-12 space-y-4 py-10 px-28 mt-20'
            >
                <h1 className='text-4xl font-semibold'>Cat Adoption Foundation Incorporated is a foster care network</h1>
                <h2 className='text-2xl text-teal-400'>We rescue, rehabilitate and rehome cats and kittens in need.</h2>
            </motion.div>

            <div className='flex col-span-12 py-10 px-28 gap-10'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-6 space-y-10 text-gray-500'
                >
                    <p>Cat Adoption Foundation believes that helping animals is helping people.</p>
                    <p>We aim to create a No-Kill Australia by using information, cooperation and assistance of companion animal owners and the general public, while rescuing, fostering and rehoming the cats and kittens that come into our care.</p>
                    <p>All our cats and kittens are rehomed with desexing, microchipping, vaccinating and parasite treatment included in their adoption fee.</p>
                    <p>We are run solely by an amazing group of dedicated volunteers and without any government funding. To keep our adoption fees affordable we rely on your generosity via donations and fundraising.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-6 bg-[url('/images/meoaboutus1.jpg')] bg-cover bg-center w-2/3 h-[50vh] rounded-lg shadow-md flex flex-col items-center justify-center"
                />
            </div>

            <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.7 }}
                className="col-span-12 bg-[url('/images/meoaboutus4.jpg')] bg-cover bg-center w-full h-[60vh] shadow-md flex flex-col items-end justify-center relative p-4 mt-4"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className='w-4/12 p-8 mr-10'>
                    <h1 className="text-white text-3xl font-bold z-10 text-center">The greatness of a nation and its moral progress can be judged by the way its animals are treated.</h1>
                    <p className="text-white text-lg z-10 text-center">- Gandhi</p>
                </div>
            </motion.div>

            <div className='col-span-12 py-16 px-28 gap-10 grid grid-cols-12'>
                <motion.div
                    ref={ref3}
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.7 }}
                    className='col-span-4 flex flex-col items-center justify-center'
                >
                    <div className="bg-[url('/images/meoaboutus1.jpg')] bg-cover bg-center w-[30vh] h-[25vh] shadow-md"></div>
                    <div className='flex '>
                        <div className="mt-[-2vh] relative z-0 bg-[url('/images/meoaboutus2.jpg')] bg-cover bg-center w-[30vh] h-[30vh] shadow-md"></div>
                        <div className="bg-[url('/images/meoaboutus3.jpg')] bg-cover bg-center w-[25vh] h-[25vh] shadow-md"></div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref4}
                    initial="hidden"
                    animate={inView4 ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.7 }}
                    className='col-span-8 space-y-10 '
                >
                    <h1 className='text-4xl font-semibold'>Rescue, rehabilitate and rehome</h1>
                    <p className='text-gray-500'>Cats and kittens come into our care from many different sources – abandoned or lost, when their owners pass or go into care, undesexed companion animals having litters or unowned animals in the community that need assistance.</p>
                    <p className='text-gray-500'>Whenever we can we work with people to keep their animals, providing information and assistance, but when that isn’t possible, the cats and kittens go into foster care. There they are given the medical treatment they need, from simple flea and worm treatments, to illness medication or even surgery. Our foster care system also provides the socialisation they need to become loving family companions.</p>
                    <p className='text-gray-500'>Many of our foster carers have other cats, dogs and children which helps our kitties to become well rounded family members. This also helps us to know which kitties have their limitations so we can match them with just the right conditions for their perfect forever home.</p>
                    <p className='text-gray-500'>Cats and kittens can be adopted directly from their foster carer’s homes or at our Adoption Days. Our currently available kittens (up to twelve months) and cats (over twelve months) can be seen on this website under Adopt, and also in our Available for Adoption albums in the photos section on our Facebook page. These albums are updated regularly and contact details for carers are in the text with each photo.</p>
                    <p className='text-gray-500'>Adoption Days are held most weekends and announced on our Facebook page the night before. The Available for Adoption albums are also updated the night before with the new kitties that will be coming to the Adoption Day.</p>
                </motion.div>
            </div>

            <div className='flex col-span-12 py-16 px-28 gap-10'>
                <motion.div
                    ref={ref5}
                    initial="hidden"
                    animate={inView5 ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.7 }}
                    className='w-1/2 space-y-10'
                >
                    <h1 className='text-4xl font-semibold'>The Cat Adoption Foundation team</h1>
                    <div className='space-y-6 text-gray-500'>
                        <div>
                            <h3 className='text-2xl font-medium text-black'>Our founders</h3>
                            <p>Cat Adoption Foundation Incorporated was founded by Sayla Kimber, Trish Pengilly, Kathryn Musolino, Nadine Gurney, Nikki Mazzone, Desiree Pavier Hughes, Rob Everett, and Sam Brincat in September 2015. A dedicated group of caring people who are passionate about cats, together they encompass a broad range of skills including animal care, marketing, IT, bookkeeping, and business management.</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium text-black'>Our volunteers</h3>
                            <p>Our volunteers come from diverse backgrounds and locations and are the backbone of our organisation. Please visit the volunteering page to learn more about how you can help.</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 uppercase p-4 border-black hover:bg-teal-400">Become a Volunteer</Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref6}
                    initial="hidden"
                    animate={inView6 ? "visible" : "hidden"}
                    variants={sectionVariants}
                    transition={{ duration: 0.7 }}
                    className='w-1/2 flex flex-col items-center'
                >
                    <div className="bg-[url('/images/tinhnguyenvien.jpg')] bg-cover bg-center w-2/3 h-[50vh] shadow-md rounded-lg"></div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;
