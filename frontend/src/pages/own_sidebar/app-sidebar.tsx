import {
  SidebarHeader,
  Sidebar,
  SidebarFooter,
  SidebarContent,
} from "@/components/ui/sidebar";
import MainHeader from "./MainHeader";
import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { darkTheme } from "@/store/atoms/theme";
import { Moon, Sun } from "lucide-react";

const AppSidebar = () => {
  const data = [
    {
      title: "Home",
      link: "/",
      icon: "H",
      isActive: true,
    },
    {
      title: "About",
      link: "/about",
      icon: "A",
    },
    {
      title: "Contact",
      link: "/contact",
      icon: "C",
    },
    {
      title: "Settings",
      link: "/settings",
      icon: "S",
    },
    {
      title: "Help",
      link: "/help",
      icon: "H",
    },
    {
      title: "Login",
      link: "/login",
      icon: "L",
    },
    {
      title: "Signup",
      link: "/signup",
      icon: "S",
    },
  ];
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <h1 className="text-(--primary)">Sidebar</h1>
          <ThemeButton />
        </SidebarHeader>
        <SidebarContent>
          <MainHeader data={data} />
        </SidebarContent>
        <SidebarFooter>
          <h1 className="text-(--primary)">Sidebar</h1>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkTheme);
  return (
    <Button onClick={() => setDarkMode((c) => !c)}>
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
};
export default AppSidebar;
