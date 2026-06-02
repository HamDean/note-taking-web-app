import { Outlet } from "react-router";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AddNoteMobile from "./components/AddNoteMobile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Menubar />
      <SideBar />
      <AddNoteMobile />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
