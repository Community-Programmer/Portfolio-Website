import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster richColors />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
