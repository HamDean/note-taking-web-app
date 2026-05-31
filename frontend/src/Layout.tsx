import { Outlet } from "react-router";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
