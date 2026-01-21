import Footer from "@/app/(main)/_components/Footer";
import Navbar from "@/app/(main)/_components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
