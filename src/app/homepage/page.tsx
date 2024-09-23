"use client";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
            <div className="bg-[url('/background.jpg')] bg-cover bg-center w-full h-[120vh] rounded-lg shadow-md flex flex-col items-center justify-center ">
                <h1 className={`text-7xl w-1/2 font-bold text-center text-white mb-4 transform transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    Welcome to Cat Adoption Foundation
                </h1>
                <div className="max-w-lg text-center mb-4">
                    <h5 className={`text-lg transform transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        "Time spent with cats is never wasted" - Sigmund Freud
                    </h5>
                </div>
                <div className="flex gap-6">
                    <Button className={`text-lg transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            learn about us
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                    <Button className={`text-lg bg-pink-600 border-none transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            donate
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                    <Button className={`text-lg transform transition-transform duration-700 relative group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} uppercase p-6`} variant="outline">
                        <span className="inline-block transition-transform duration-300 transform group-hover:-translate-x-2">
                            latest news
                        </span>
                        <span className="inline-block ml-2 opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Button>
                </div>
            </div>
            <div className="p-20">
                <div className="text-center text-9xl">10000</div>
                <div className="text-center text-2xl py-5">cats and kittens rehomed to date</div>
            </div>
            <div className="grid grid-cols-12">
                <div className="flex flex-col justify-center items-center col-span-6 p-36 bg-zinc-200 ">
                    <h2 className="text-5xl font-medium mb-4">Looking to adopt your new furry best friend?</h2>
                    <p className="text-gray-500 text-xl mb-4">Our beautiful cats and kittens are waiting to find their furever family - could that be you? Visit our Facebook page to see regular updates of the cats currently available, as well as details about our Adoption Days.</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300">Learn more about adopt</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 bg-[url('/home1.jpg')] bg-cover bg-center w-full h-[80vh]"></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-6 bg-[url('/home2.webp')] bg-cover bg-center w-full h-[84vh]"></div>
                <div className="flex flex-col justify-center items-center col-span-6 p-36">
                    <div className="self-start mb-4">
                        <h5>Would you like to help?</h5>
                    </div>
                    <h2 className="text-5xl font-medium mb-4">We're always looking for enthusiastic volunteers</h2>
                    <p className="text-gray-500 text-xl mb-4">We have a range of volunteer roles available, from opening your home as a foster carer, to ferrying felines as a kitty cabber, to helping out at our Adoption Days - we'd love to have you on board!</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className={`text-lg transform transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-gray-600 uppercase p-8 border-black hover:bg-teal-400`}>become a volunteer</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="flex flex-col justify-center items-center col-span-6 p-36 bg-zinc-200 ">
                    <div className="self-start mb-4">
                        <h5>Like what we're doing?</h5>
                    </div>
                    <h2 className="text-5xl font-medium mb-4">We need your help - donate, sponsor or fundraise</h2>
                    <p className="text-gray-500 text-xl mb-4">As a small, volunteer-run organisation, we rely on your generosity. We are a registered Australian charity, so all donations are tax-deductible.</p>
                    <div className="self-start mt-4">
                        <Link href="/adopt">
                            <Button variant="outline" className="text-gray-600 bg-teal-400 uppercase p-8 hover:bg-teal-300">way to help</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 bg-[url('/home3.webp')] bg-cover bg-center w-full h-[87vh]"></div>
            </div>
        </div>
    );
};

export default HomePage;