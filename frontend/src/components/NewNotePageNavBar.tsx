import { NavLink } from "react-router";
import backIcon from "../assets/images/icon-arrow-left.svg";

const NewNotePageNavBar = () => {
  return (
    <div className="h-8.5 border-b border-b-neutral-200 text-neutral-600 flex justify-between text-preset-5 lg:hidden">
      <NavLink to={"/"}>
        <div className="flex items-center gap-1 cursor-pointer">
          <img className="w-3 h-3" src={backIcon} alt="back" />
          <span>Go Back</span>
        </div>
      </NavLink>

      <div className="flex gap-4">
        <NavLink to={"/"}>
          <span className="cursor-pointer">Cancel</span>
        </NavLink>
        <span className="text-blue-500 cursor-pointer">Save Note</span>
      </div>
    </div>
  );
};
export default NewNotePageNavBar;
