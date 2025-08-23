import { createBrowserRouter } from "react-router-dom";
import MainLayout from '@/layout/MainLayout';
import Home from "./pages/home/Home";
import Projects from "@/pages/projects/Project";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import SkillCard from "./components/Skills/SkillCard";

const mainLayoutRoutes = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <SkillCard />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
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