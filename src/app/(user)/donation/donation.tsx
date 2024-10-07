"use client";
import { Button } from "@/components/ui/button";
import StepForm from "@/components/step-form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useAnimation } from "framer-motion";
export default function Donation() {
    return (
        <div>
            <div className="relative">
                <img
                    src="/images/background.jpg"
                    alt="thumb hero"
                    className="w-[100%]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-20 transform pl-[10%]"
                >
                    <div className="text-lg text-white text-[1.6rem] w-[60%] font-semibold">
                        Donate to the Cat Adoption Foundation right now to help
                        save a life.
                    </div>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
                    className="absolute top-[200px] transform pl-[10%]"
                >
                    <Tabs defaultValue="one-time" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="one-time">One-Time</TabsTrigger>
                            <TabsTrigger value="weekly">Weekly</TabsTrigger>
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        </TabsList>
                        <TabsContent value="one-time">
                            <StepForm />
                        </TabsContent>
                        <TabsContent value="weekly">
                            <StepForm />
                        </TabsContent>
                        <TabsContent value="monthly">
                            <StepForm />
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
            <div className="w-[100%] px-[20%] mt-[50px] mb-[100px]">
                <h1 className="text-[2rem] w-[100%]">
                    Frequently requested inquiries
                </h1>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Do my donation secure ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-[0.7rem]">
                                Indeed. Protecting the privacy and security of
                                your data is our top concern. We offer a safe
                                and secure online donation environment by
                                utilizing industry-standard SSL technology to
                                safeguard your information. Your personal
                                information won't be traded, sold, or shared
                                with anybody else, and we won't send you letters
                                representing other companies.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Why do you need donation ?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-[0.7rem]">
                                The organization is run by volunteers and is not
                                part of the government. It charges low adoption
                                fees to help cats find new homes. Volunteers
                                handle most of the costs, while donations are
                                used to cover veterinary expenses, desexing,
                                vaccinations, and microchipping for sick and
                                injured cats.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Why should I consider giving monthly?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-[0.7rem]">
                                The care we can offer is greatly improved by
                                even a tiny monthly contribution. Contributions
                                on a regular basis let us to pay our veterans on
                                time, which keeps us operating.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Why does the form ask for my name and email
                                address?
                            </AccordionTrigger>
                            <AccordionContent className="text-[#00000076] text-[0.7rem]">
                                <div>
                                    The purpose of these details is to only
                                    issue a tax receipt to you following your
                                    donation. Your information will never be
                                    sold to third parties or used for unrelated
                                    purposes.
                                </div>
                                <div className="mt-2">
                                    To join our mailing list, simply check the
                                    box. We'll send emails to the address you
                                    provide. Unsubscribing is possible at any
                                    time.
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
