import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { darkTheme } from "@/store/atoms/theme";
import { useRecoilValue } from "recoil";

const MainLayout = () => {

  return (
    <div
      className={`flex min-h-screen w-full ${
        useRecoilValue(darkTheme) ?? "dark"
      }`}
    >
      <nav className="hidden md:block w-1/4 lg:w-1/5 xl:w-1/6 border-r border-gray-200 dark:border-gray-700">
        <Navbar />
      </nav>

      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Navbar />
      </div>

      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
