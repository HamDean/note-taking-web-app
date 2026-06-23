import logo from "../assets/images/logo.svg";
import SideMenuTab from "./SideMenuTab";

const SideMenu = () => {
  return (
    <nav className="hidden lg:inline-flex flex-col px-4 py-3
                    border-r border-r-neutral-200 h-screen gap-4">
      <img className="h-7 w-23.75" src={logo} alt="Logo" />

      <div>
        {/* tabs */}
        <div>
          <SideMenuTab />
        </div>

        {/* tags */}
        <div></div>
      </div>
    </nav>
  );
};
export default SideMenu;
