import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import { BACKEND_URL } from "@/config/config";
import { fetchHomeContent } from "@/store/home/homeSlice";
import type { AppDispatch, RootState } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/theme`)
      .then((res) => {
        const theme = res.data;
        const root = document.documentElement;

        root.style.setProperty("--portfolio-primary", theme.portfolioPrimary);
        root.style.setProperty("--portfolio-accent", theme.portfolioAccent);
        root.style.setProperty("--portfolio-muted", theme.portfolioMuted);
        root.style.setProperty(
          "--portfolio-primary-50",
          theme.portfolioPrimary50
        );
        root.style.setProperty(
          "--portfolio-primary-100",
          theme.portfolioPrimary100
        );
        root.style.setProperty(
          "--portfolio-primary-200",
          theme.portfolioPrimary200
        );
        root.style.setProperty(
          "--portfolio-primary-300",
          theme.portfolioPrimary300
        );
        root.style.setProperty(
          "--portfolio-primary-400",
          theme.portfolioPrimary400
        );
        root.style.setProperty(
          "--portfolio-primary-500",
          theme.portfolioPrimary500
        );
        root.style.setProperty(
          "--portfolio-primary-600",
          theme.portfolioPrimary600
        );
        root.style.setProperty(
          "--portfolio-primary-700",
          theme.portfolioPrimary700
        );
        root.style.setProperty(
          "--portfolio-primary-800",
          theme.portfolioPrimary800
        );
        root.style.setProperty(
          "--portfolio-primary-900",
          theme.portfolioPrimary900
        );
      })
      .catch((err) => {
        console.error("Failed to load theme:", err);
      });
  }, []);


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
