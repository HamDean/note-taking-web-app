import tagIcon from "../assets/images/icon-tag.svg";

const TagMobile = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-2 text-neutral-700 items-center h-10 border-b border-b-neutral-200 py-3">
      <img className="w-3.75 h-3.75" src={tagIcon} alt="Tag icon" />
      <span>{name}</span>
    </div>
  );
};
export default TagMobile;
