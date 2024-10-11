import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "This is PawFund",
};

const StoreProvider = dynamic(
  () => import("@/provider/redux-provider").then((mod) => mod.StoreProvider),
  {
    ssr: false,
  }
);

const ReactQueryProvider = dynamic(
  () => import("@/provider/query-provider").then((mod) => mod.default),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <StoreProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
