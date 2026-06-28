import type { ReactNode } from "react";
import ChevronRightIcon from "./icon-components/ChevronRightIcon";

interface Props {
  name: string;
  isSelected?: boolean;
  children: ReactNode;
  onSelectTab: (name: string) => void;
}

const SideMenuTab = ({
  name,
  children,
  isSelected = false,
  onSelectTab,
}: Props) => {
  return (
    <div
      onClick={() => onSelectTab(name)}
      className={`flex h-10 w-60 cursor-pointer items-center hover:bg-neutral-100 hover:dark:bg-neutral-800
                    rounded-8 px-3 py-2.5 transition-colors 
                    ${isSelected && "justify-between bg-neutral-100 dark:bg-neutral-800"}`}
    >
      <div className="flex gap-2 items-center text-preset-4 text-neutral-950">
        {children}
        <span className="dark:text-white">{name}</span>
      </div>

      {isSelected && <ChevronRightIcon />}
    </div>
  );
};
export default SideMenuTab;
