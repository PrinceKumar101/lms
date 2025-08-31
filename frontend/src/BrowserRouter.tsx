import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Mainlayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feed from "./pages/Feed";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
      {
        path:"/login",
        element:<Login/>
      },{
        path:"/signup",
        element:<Signup/>
      }
    ],
  },
]);
export default BrowserRouter;
