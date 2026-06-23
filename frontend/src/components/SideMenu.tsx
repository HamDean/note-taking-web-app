import logo from "../assets/images/logo.svg";

const SideMenu = () => {
  return (
    <nav className="hidden lg:inline-block px-4 py-3 border-r border-r-neutral-200 h-screen">
      <img src={logo} alt="Logo" />

      {/* tabs */}
      <div></div>

      {/* tags */}
      <div></div>
    </nav>
  );
};
export default SideMenu;
