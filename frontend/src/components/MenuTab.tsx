import HomeIcon from "./icon-components/HomeIcon";
import MenuItem from "./MenuItem";

const MenuTab = () => {
  return (
    <nav className="flex items-center justify-between py-3 px-4 fixed bottom-0 border-t border-t-neutral-100">
      <MenuItem>
        <HomeIcon />
      </MenuItem>
      <MenuItem>
        <HomeIcon />
      </MenuItem>
      <MenuItem>
        <HomeIcon />
      </MenuItem>
      <MenuItem>
        <HomeIcon />
      </MenuItem>
      <MenuItem>
        <HomeIcon />
      </MenuItem>
    </nav>
  );
};
export default MenuTab;
