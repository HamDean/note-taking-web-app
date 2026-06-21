import HomeIcon from "./icon-components/HomeIcon";
import SearchIcon from './icon-components/SearchIcon'
import ArchivedIcon from './icon-components/ArchivedIcon'
import TagsIcon from './icon-components/TagsIcon'
import SettingsIcon from './icon-components/SettingsIcon'
import MenuItem from "./MenuItem";

const MenuTab = () => {
  return (
    <nav className="flex items-center md:h-18.5 w-full justify-between
                    py-3 px-4 fixed bottom-0 border-t border-t-neutral-100
                    dark:bg-neutral-950 dark:text-neutral-400 lg:hidden
                    ">
      <MenuItem name="Home">
        <HomeIcon />
      </MenuItem>
      <MenuItem name="Search">
        <SearchIcon />
      </MenuItem>
      <MenuItem name="Archived">
        <ArchivedIcon />
      </MenuItem>
      <MenuItem name="Tags">
        <TagsIcon />
      </MenuItem>
      <MenuItem name="Settings">
        <SettingsIcon />
      </MenuItem>
    </nav>
  );
};
export default MenuTab;
