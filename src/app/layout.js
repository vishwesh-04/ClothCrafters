import { Geist, Geist_Mono } from "next/font/google";
import AddBootstrap from "./AddBootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./styles.css"
import "./global.css"
import { CartProvider } from "./contexts/CartContext"
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClothCrafters",
  description: "Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} global-background`}>
        <AddBootstrap />
        <CartProvider>
          {children}
        </CartProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
