import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className=" flex flex-row max-w-full w-full ">
        <nav className="max-w-3/10 w-2/10 ">
          <Navbar />
          {/* <AppSidebar /> */}
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;
