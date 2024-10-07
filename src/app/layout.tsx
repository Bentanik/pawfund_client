import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home",
    description: "This is PawFund",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${poppins.className}`}>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
