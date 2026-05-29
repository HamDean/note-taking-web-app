import tagIcon from "../assets/images/icon-tag.svg";
import arrowIcon from "../assets/images/icon-chevron-right.svg";

interface Props {
  tag: string;
  onSelectTag: (tag: string) => void;
  isSelected: boolean;
}

const Tag = ({ tag, onSelectTag, isSelected }: Props) => {
  return (
    <div
      onClick={() => onSelectTag(tag)}
      className={`flex justify-between p-3
                  cursor-pointer
                  ${isSelected ? "bg-neutral-100 rounded-8" : ""}
                  `}
    >
      <div className="flex gap-2 items-center text-neutral-700">
        <img className="w-3.75 h-3.75" src={tagIcon} alt="Tag" />
        <span>{tag}</span>
      </div>
      { isSelected && <img src={arrowIcon} alt="" />}
    </div>
  );
};
export default Tag;
