import logo from "../assets/images/logo.svg";
import Tab from "./Tab";
import TagsSection from "./TagsSection";
import { sidetabs } from '../utils/constansts'

const SideBar = () => {
  const tags = ["Cooking", "Finance"];

  return (
    <article className="hidden fixed top-0 lg:flex w-68 flex-col gap-4 border-r border-neutral-200 h-screen px-4 py-3">
      <div>
        <img src={logo} />
      </div>

      <div>
        {sidetabs.map((tab, index) => (
          <Tab key={index} iconSrc={tab.src} tabTitle={tab.title} />
        ))}
      </div>

      <hr className="text-neutral-200 h-px" />

      {tags.length > 0 && <TagsSection tags={tags} />}
    </article>
  );
};
export default SideBar;
