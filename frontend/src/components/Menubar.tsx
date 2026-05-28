import homeIcon from "../assets/images/icon-home.svg";
import searchIcon from "../assets/images/icon-search.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import tagIcon from "../assets/images/icon-tag.svg";
import settingIcon from "../assets/images/icon-settings.svg";

const Menubar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 shadow-2xl shadow-neutral-300 px-4 py-3">
      <ul className="flex justify-between tags-section ">
        <div className="tag-section">
          <div>
            <img src={homeIcon} alt="home icon" />

          </div>
          <span>Home</span>
        </div>
        <div className="tag-section">
          <div>
            <img src={searchIcon} alt="search icon" />
          </div>
          <span>Search</span>
        </div>
        <div className="tag-section">
          <div>
            <img src={archiveIcon} alt="archived icons" />
          </div>
          <span>Archived</span>
        </div>
        <div className="tag-section">
          <div>
            <img src={tagIcon} alt="tags icon" />
          </div>
          <span>Tags</span>
        </div>
        <div className="tag-section">
          <div>
            <img src={settingIcon} alt="settings icon" />
          </div>
          <span>Settings</span>
        </div>
      </ul>
    </nav>
  );
};
export default Menubar;
