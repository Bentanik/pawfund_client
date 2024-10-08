"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Volunteer() {
    return (
        <motion.div
            className="container mx-auto px-4 py-20 font-open_sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-12 gap-8">
                <motion.div
                    className="col-span-6 flex flex-col justify-center items-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="bg-[url('/images/volunteer3.webp')] bg-cover bg-center w-[40vh] h-[30vh] shadow-md"></div>
                    <div className="flex">
                        <motion.div
                            className="mt-[-2vh] relative z-0 bg-[url('/images/volunteer1.jpg')] bg-cover bg-center w-[40vh] h-[30vh] shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className="bg-[url('/images/volunteer2.webp')] bg-cover bg-center w-[30vh] h-[30vh] shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="col-span-6 flex flex-col justify-center space-y-4"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-gray-400 font-semibold text-base">
                        Love cats and want to help?
                    </span>
                    <h2 className="font-semibold text-4xl text-gray-700">
                        Volunteers are our lifeblood
                    </h2>
                    <p className="text-gray-600">
                        People helping people and animals is what Cat Adoption
                        Foundation Incorporated stands for. CAFinc would not
                        exist without its dedicated volunteers, and without them
                        so many cats and kittens would never be rescued from
                        dire circumstances.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="mt-16 text-start"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3 className="w-1/3 mx-auto font-semibold text-xl text-gray-600">
                    We have all sorts of volunteer roles available, depending on
                    how involved you’d like to be, how much time you have, and
                    even whether you’d like a new furry houseguest (or three!)
                </h3>
            </motion.div>

            <motion.div
                className="mt-12 space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2, duration: 1 }}
            >
                {[
                    {
                        title: "Foster Carers",
                        description:
                            "We are always in need of foster carers who provide a safe inside environment for a kitten, a litter, a mum and litter, a teen or an adult cat.",
                    },
                    {
                        title: "Kitty Cabbies",
                        description:
                            "Often we require kitties to be transported between homes or to vet appointments and our kitty cabbies are a vital part of our organisation.",
                    },
                    {
                        title: "Adoption Day Assistants",
                        description:
                            "Adoption Day assistants help to set up our crates with blankets, food, water and litter trays before we open and pack down afterwards, as well as assist the public in cuddling and choosing their new kitty companion. You can also be trained to do adoption contracts as kitties find their furrever homes!",
                    },
                    {
                        title: "Admin",
                        description:
                            "Administration volunteers help to transfer data into our database and organise follow up vet appointments for adopters.",
                    },
                    {
                        title: "Photoshop Assistants",
                        description:
                            "Our Facebook posts are created from templates with personalised information on each kitty. Photoshop assistants are needed to make these posts each week, especially as we grow and take in more and more kitties.",
                    },
                    {
                        title: "Fundraising",
                        description:
                            "We welcome anyone who can make items for our auctions and trading tables (items must not contain any animal products), people who can organise and staff trading tables, people who can organise fundraising events and anyone with fundraising ideas or skills.",
                    },
                    {
                        title: "Interested?",
                        description:
                            "If you are interested in any of our volunteer roles, please contact us via email at info@cafinc.org.au or phone Sayla 0422 652 837.",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-center -space-x-32"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <p className="w-1/4 font-semibold text-base text-teal-400">
                            {item.title}
                        </p>
                        <p className="w-1/2 text-base text-gray-500">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="col-span-12 flex justify-center mt-12 font-semibold text-4xl text-gray-700"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2>Frequently asked questions</h2>
            </motion.div>
            <hr className="my-4 border-gray-300 mt-10 w-4/5 mx-auto" />

            <motion.div
                className="col-span-12 grid grid-cols-12 gap-6 mt-8 py-8 px-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="col-span-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">
                                How much time commitment is required?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-base">
                                The amount of time you can give is entirely up
                                to you and the volunteer role you would like to
                                assist with.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">
                                Do I need experience to be a foster carer?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-base">
                                No experience is required. You will be given
                                full training and support along the way.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">
                                Is there any financial commitment involved?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-base">
                                Cat Adoption Foundation pays for all vet work
                                including desexing, microchipping, vaccination
                                and medications and surgeries if required. Many
                                volunteers donate food, litter and other basic
                                requirements and this cost is a tax deductible
                                donation. CAFinc can provide these if needed, so
                                your financial commitment is commensurate to
                                your circumstances.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg">
                                Can I take a break from volunteering if I need
                                to?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-base">
                                Absolutely! What you can give is entirely up to
                                you and many of our volunteers remain supportive
                                of other volunteers while taking a break from
                                their active roles.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <motion.div
                    className="col-span-6 col-start-8 flex flex-col space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="text-gray-500 font-medium text-lg">
                        It’s a great feeling to be able to give back and help,
                        plus you get to cuddle kitties – it’s a win win!
                    </p>
                    <h5 className="font-semibold">- Kelly, volunteer</h5>
                    <p className="text-gray-500 font-medium text-lg">
                        I finally found my purpose in life; helping frightened
                        kitties trust again. There is nothing more heartwarming
                        than flicking that switch, then finding them loving
                        homes.
                    </p>
                    <h5 className="font-semibold">- Heidi, volunteer</h5>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
