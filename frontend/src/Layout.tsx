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
    </>
  );
};
export default Layout;
