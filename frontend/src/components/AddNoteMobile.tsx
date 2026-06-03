import { NavLink } from "react-router";
import plusIcon from "../assets/images/icon-plus.svg";

const AddNoteMobile = () => {
  return (
    <NavLink to={"/create"}>
      <div
        className="w-12 h-12 md:w-[64px] md:h-[64px] cursor-pointer bg-blue-500 rounded-full flex flex-col 
        items-center justify-center text-white lg:hidden fixed bottom-18 md:bottom-26.5 right-0"
      >
        <img src={plusIcon} alt="Add new note icon" />
      </div>
    </NavLink>
  );
};
export default AddNoteMobile;
