import AuthCarousel from '@/components/auth-carousel';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative text-base flex items-center h-[100vh]">
            <section className="w-[45%] h-full bg-auth-gradient bg-[#7a3cdd]">
                {/* <div className='px-[20px] flex flex-col items-center'>
                    <Image src="/images/auth01.png"
                        width={450}
                        height={450}
                        alt="Picture of the author"
                    />
                    <span className='text-2xl text-gray-50 text-center font-montserrat_alternates'>Love is action <br /> Together we give second chances to four-legged friends.</span>
                </div> */}
                <AuthCarousel />
            </section>
            <section className="bg-white flex-1" >
                <div className="absolute top-5 right-10 p-2 bg-slate-200 rounded-full hover:bg-slate-300 cursor-pointer">
                    <Link href="/"><X /></Link>
                </div>
                {children}
            </section>
        </div>
    )
}
