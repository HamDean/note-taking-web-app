import { Outlet } from "react-router";
import MenuTab from "./components/MenuTab";
import SideMenu from "./components/SideMenu";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div>
          <MenuTab />
          <SideMenu />
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
