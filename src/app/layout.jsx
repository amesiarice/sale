import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Saifco Basmati Rice — SKU Catalogue",
  description:
    "Manufacturer, Exporter & Supplier of Premium Basmati Rice. Browse Uttam, Golden, Silver, and Premium SKU lines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
