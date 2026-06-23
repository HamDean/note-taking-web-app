import logo from "../assets/images/logo.svg";
import ArchivedIcon from "./icon-components/ArchivedIcon";
import HomeIcon from "./icon-components/HomeIcon";
import SideMenuTab from "./SideMenuTab";

const SideMenu = () => {
  return (
    <nav
      className="hidden lg:inline-flex flex-col px-4 py-3
                    border-r border-r-neutral-200 h-screen gap-4"
    >
      <img className="h-7 w-23.75" src={logo} alt="Logo" />

      <div>
        {/* tabs */}
        <div>
          <SideMenuTab name="All Notes">
            <HomeIcon />
          </SideMenuTab>
          <SideMenuTab name="Archived Notes">
            <ArchivedIcon />
          </SideMenuTab>
        </div>

        {/* tags */}
        <div></div>
      </div>
    </nav>
  );
};
export default SideMenu;
