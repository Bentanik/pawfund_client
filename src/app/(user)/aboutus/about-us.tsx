import React from 'react'


export default function AboutUs() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-12 space-y-4 py-10 px-28 mt-20'>
                <h1 className='text-4xl font-semibold'>Cat Adoption Foundation Incorporated is a foster care network</h1>
                <h2 className='text-2xl text-teal-400'>We rescue, rehabilitate and rehome cats and kittens in need.</h2>
            </div>
            <div className='flex col-span-12 py-10 px-28 gap-10'>
                <div className='col-span-6 space-y-10 text-gray-500'>
                    <p>Cat Adoption Foundation believes that helping animals is helping people.</p>
                    <p>We aim to create a No-Kill Australia by using information, cooperation and assistance of companion animal owners and the general public, while rescuing, fostering and rehoming the cats and kittens that come into our care.</p>
                    <p>All our cats and kittens are rehomed with desexing, microchipping, vaccinating and parasite treatment included in their adoption fee.</p>
                    <p>We are run solely by an amazing group of dedicated volunteers and without any government funding. To keep our adoption fees affordable we rely on your generosity via donations and fundraising.</p>
                </div>
                <div className="col-span-6 bg-[url('/images/meoaboutus1.jpg')] bg-cover bg-center w-2/3 h-[50vh] rounded-lg shadow-md flex flex-col items-center justify-center"></div>
            </div>
            <div className="col-span-12 bg-[url('/images/meoaboutus4.jpg')] bg-cover bg-center w-full h-[60vh] shadow-md flex flex-col items-end justify-center relative p-4 mt-4">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className='w-4/12 p-8 mr-10'>
                    <h1 className="text-white text-3xl font-bold z-10 text-center">The greatness of a nation and its moral progress can be judged by the way its animals are treated.</h1>
                    <p className="text-white text-lg z-10 text-center">- Gandhi</p>
                </div>
            </div>
        </div>
    )
}
