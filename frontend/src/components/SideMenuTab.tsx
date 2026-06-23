import HomeIcon from "./icon-components/HomeIcon";
import chevronRight from "../assets/images/icon-chevron-right.svg";

const SideMenuTab = () => {
  return (
    <div
      className="flex h-10 cursor-pointer items-center hover:bg-neutral-100
                    rounded-8 px-3 py-2.5 transition-colors"
    >
      <div className="flex gap-2 items-center min-w-60 text-preset-4 text-neutral-950">
        <HomeIcon />
        <span>All Notes</span>
      </div>

      <img src={chevronRight} alt="Icon chevron right" />
    </div>
  );
};
export default SideMenuTab;
