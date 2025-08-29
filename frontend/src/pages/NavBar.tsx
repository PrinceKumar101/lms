import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./own_sidebar/app-sidebar";

const Navbar = () => {
  return (
    <>
      <SidebarProvider>
        <SidebarTrigger/>
        <AppSidebar />
      </SidebarProvider>
    </>
  );
};
export default Navbar;
