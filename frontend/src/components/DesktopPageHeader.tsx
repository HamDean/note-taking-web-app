import SearchInput from "./SearchInput";
import settingsIcon from "../assets/images/icon-settings.svg";
import { Link } from "react-router";

const DesktopPageHeader = ({ pageTitle } : { pageTitle?: string}) => {
  return (
    <nav
      className="hidden lg:flex border-b-neutral-200 border-b 
                    ml-68  h-20.5  px-8 py-6.5 justify-between"
    >
      <span className="text-preset-1">{pageTitle || 'All Notes'}</span>

      <div className="flex gap-4 items-center">
        <SearchInput />
        <Link to='/settings'><img src={settingsIcon} alt="Settings icon" /></Link>
      </div>
    </nav>
  );
};
export default DesktopPageHeader;
