import { useState } from "react";
import logo from "../assets/images/logo.svg";
import ArchivedIcon from "./icon-components/ArchivedIcon";
import HomeIcon from "./icon-components/HomeIcon";
import SideMenuTab from "./SideMenuTab";
import Tag from "./Tag";

const SideMenu = () => {
  const [tab, setSelectedTab] = useState("All Notes");

  // temporal
  const tags = ["Work", "Personal", "Ideas", "Projects"];

  return (
    <nav
      className="hidden lg:inline-flex flex-col px-4 py-3
                    border-r border-r-neutral-200 h-screen 
                    gap-4 dark:border-r-neutral-800"
    >
      <img className="h-7 w-23.75" src={logo} alt="Logo" />

      <div className="flex flex-col gap-2">
        {/* tabs */}
        <div className="flex flex-col gap-0.5">
          <SideMenuTab
            name="All Notes"
            onSelectTab={(name) => setSelectedTab(name)}
            isSelected={tab == "All Notes"}
          >
            <HomeIcon
              strokeColor={tab == "All Notes" ? "#335CFF" : "#2B303B"}
            />
          </SideMenuTab>
          <SideMenuTab
            name="Archived Notes"
            onSelectTab={(name) => setSelectedTab(name)}
            isSelected={tab == "Archived Notes"}
          >
            <ArchivedIcon
              strokeColor={tab == "Archived Notes" ? "#335CFF" : "#2B303B"}
            />
          </SideMenuTab>
        </div>

        {/* tags */}
        <div className="border-t border-t-neutral-200 py-2">
          <span className="text-neutral-500 text-preset-4">Tags</span>

          <div className="flex flex-col gap-1 mt-2">
            {tags.map((tagName) => (
              <Tag
                key={tagName}
                name={tagName}
                onSelectTag={setSelectedTab}
                isSelected={tab === tagName}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default SideMenu;
