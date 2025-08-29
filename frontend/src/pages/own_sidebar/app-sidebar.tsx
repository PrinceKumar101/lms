import { NavMain } from "@/components/nav-main";
import { SidebarHeader, Sidebar, SidebarFooter, SidebarContent } from "@/components/ui/sidebar";
import MainHeader from "./MainHeader";

const AppSidebar = ( )=>{
    const data = [
        {
            title:"Home",
            link:"/",
            icon:"H",
            isActive:true
        },
        {
            title:"About",
            link:"/about",
            icon:"A",
            
        },
        {
            title:"Contact",
            link:"/contact",
            icon:"C",
            
        },
        {
            title:"Settings",
            link:"/settings",
            icon:"S",
            
        }, 
        {
            title:"Help",
            link:"/help",
            icon:"H",
            
        }
    ]
    return (
        <>
        
        <Sidebar>
            <SidebarHeader >
                <h1 className="text-(--primary)">Sidebar</h1>
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
}
export default AppSidebar;