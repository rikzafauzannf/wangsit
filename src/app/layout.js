import { Poppins } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Dashboard Wangsit",
  description: "Sebuah website untuk pemantauan penjualan wangsit yang berada di kota Tasikmalaya dalam hal penjualan bahan pangan terjangkau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={poppins.className}>
        <Navbar/>
        <div className="p-5">
          {children}
        </div>
      </body>
    </html>
  );
}