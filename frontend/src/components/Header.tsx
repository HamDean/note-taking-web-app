import settingsIcon from "../assets/images/icon-settings.svg";

const Header = () => {
  return (
    <div className="h-20 w-full border-b border-b-neutral-200 hidden lg:flex
                    justify-between items-center py-5 px-8
    ">
      <h1 className="text-neutral-950 text-preset-1">All Notes</h1>

      <div className="flex">
        <form action="">
            <label htmlFor=""></label>
            <input type="text" placeholder="search" />
        </form>
        <img src={settingsIcon} alt="Settings" />
      </div>
    </div>
  );
};
export default Header;
