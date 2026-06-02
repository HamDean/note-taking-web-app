import { NavLink } from "react-router";
import { tabs } from "../utils/constansts";

const Menubar = () => {
  return (
    <section className="fixed bg-white lg:hidden inset-x-0 bottom-0 shadow-2xl shadow-neutral-300 px-4 py-3">
      <ul className="flex justify-between tags-section ">
        {tabs.map((tab, index) => (
          <NavLink to={tab.pageLink} key={index}>
            <div className="tag-section">
              <div>
                <img src={tab.iconSource} alt={tab.altText} />
              </div>
              <span>{tab.tab}</span>
            </div>
          </NavLink>
        ))}
      </ul>
    </section>
  );
};
export default Menubar;
