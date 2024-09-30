"use client";
import { Button } from "@/components/ui/button";
import StepForm from "@/components/step-form";

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
export default function DonationPage() {
    return (
        <div className="h-[2000px]">
            <div className="relative">
                <img
                    src="/background.jpg"
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
        </div>
    );
}
