import { NavLink } from "react-router";

const NewNote = () => {
  return (
    <NavLink to={"/create-note"}>
      <button className="hidden lg:block w-full h-10 bg-blue-500 rounded-8 text-white cursor-pointer mb-4">
        + Create New Note
      </button>
    </NavLink>
  );
};
export default NewNote;
