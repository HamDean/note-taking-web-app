import logo from "../assets/images/logo.svg";
import homeIcon from "../assets/images/icon-home.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import Tab from "./Tab";

const SideBar = () => {
  const tabs = [
    { src: homeIcon, title: "All Notes" },
    { src: archiveIcon, title: "Archived Notes" },
  ];

  return (
    <article className="hidden lg:flex w-68 flex-col gap-4 border-r border-neutral-200 h-screen px-4 py-3">
      <div>
        <img src={logo} />
      </div>

      <div>
        {tabs.map((tab, index) => (
          <Tab key={index} iconSrc={tab.src} tabTitle={tab.title} />
        ))}
      </div>
    </article>
  );
};
export default SideBar;
