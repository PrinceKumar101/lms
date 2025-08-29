import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

const MainHeader = ({ data }) => {
  return (
    <>
      <SidebarMenu>
        {data.map((item, index) => {
          return (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton title={item.title} link={item.link} />
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </>
  );
};
export default MainHeader;

const SidebarMenuButton = ({
  title,
  link,
}: {
  link: string;
  title: string;
}) => {
  return <NavLink to={link} className={({ isActive }) => (isActive ? "isactive-true" : "")}>{title}</NavLink>;
};
