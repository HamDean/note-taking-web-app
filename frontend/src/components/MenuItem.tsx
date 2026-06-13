import home from "../assets/images/icon-home.svg";

const MenuItem = () => {
  return (
    <div className="h-8 w-[68.6px] py-1 px-5.5 cursor-pointer hover:bg-neutral-50">
      <img src={home} alt="Home Tab" />
    </div>
  );
};
export default MenuItem;
