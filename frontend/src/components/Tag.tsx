import ChevronRightIcon from "./icon-components/ChevronRightIcon";
import TagIcon from "./icon-components/TagIcon";

interface Props {
  name: string;
  onSelectTag: (name: string) => void;
  isSelected: boolean;
}

const Tag = ({ name, onSelectTag, isSelected }: Props) => {
  return (
    <div
      onClick={() => onSelectTag(name)}
      className={`flex justify-between items-center text-preset-4 text-neutral-700 p-3 cursor-pointer
                  h-10  ${isSelected && "bg-neutral-100 dark:bg-neutral-800 rounded-8"}
    `}
    >
      <div className="flex gap-2 items-center">
        <TagIcon strokeColor={isSelected ? "#335CFF" : "#2B303B"} />
        <span>{name}</span>
      </div>

      {isSelected && <ChevronRightIcon />}
    </div>
  );
};
export default Tag;
