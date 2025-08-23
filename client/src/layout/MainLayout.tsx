import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import { fetchHomeContent } from "@/store/home/homeSlice";
import type { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHomeContent());
  }, []);

  const { loading } = useSelector((state: RootState) => state.home);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Toaster richColors />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
