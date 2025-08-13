import { createBrowserRouter } from "react-router-dom";
import MainLayout from '@/layout/MainLayout';
import Home from "./pages/home/Home";

const mainLayoutRoutes = [
  {
    path: "/",
    index: true,
    element: <Home />,
  }
];

const router = createBrowserRouter([

  {
   path: "/",
    element: <MainLayout />,
    children: mainLayoutRoutes,
  }

]);



export default router;