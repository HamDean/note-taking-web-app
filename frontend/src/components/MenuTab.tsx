import HomeIcon from "./icon-components/HomeIcon";
import SearchIcon from './icon-components/SearchIcon'
import ArchivedIcon from './icon-components/ArchivedIcon'
import TagsIcon from './icon-components/TagsIcon'
import MenuItem from "./MenuItem";

const MenuTab = () => {
  return (
    <nav className="flex items-center w-full justify-between py-3 px-4 fixed bottom-0 border-t border-t-neutral-100">
      <MenuItem>
        <HomeIcon />
      </MenuItem>
      <MenuItem>
        <SearchIcon />
      </MenuItem>
      <MenuItem>
        <ArchivedIcon />
      </MenuItem>
      <MenuItem>
        <TagsIcon />
      </MenuItem>
      <MenuItem>
        <HomeIcon />
      </MenuItem>
    </nav>
  );
};
export default MenuTab;
