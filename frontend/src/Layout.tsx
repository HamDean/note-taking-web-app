import { Outlet } from "react-router";
import DesktopPageHeader from "./components/DesktopPageHeader";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <DesktopPageHeader />
      <Menubar />
      <SideBar />
      <Outlet />
    </>
  );
};
export default Layout;
