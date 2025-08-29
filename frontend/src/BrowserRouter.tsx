import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Mainlayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feed from "./pages/Feed";
import About from "./pages/About";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default BrowserRouter;
