import SearchInput from "./SearchInput";
import settingsIcon from "../assets/images/icon-settings.svg";

const DesktopPageHeader = () => {
  return (
    <nav
      className="hidden lg:flex border-b-neutral-200 border-b 
                    ml-68  h-20.5  px-8 py-6.5 justify-between"
    >
      <span className="text-preset-1">All Notes</span>

      <div className="flex gap-4 items-center">
        <SearchInput />
        <img src={settingsIcon} alt="Settings icon" />
      </div>
    </nav>
  );
};
export default DesktopPageHeader;
