import chevronRight from "../assets/images/icon-chevron-right.svg";
import type { ReactNode } from "react";

interface Props {
  name: string;
  isSelected?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const SideMenuTab = ({ name, children, isSelected = false }: Props) => {
  return (
    <div
      className="flex h-10 cursor-pointer items-center hover:bg-neutral-100
                    rounded-8 px-3 py-2.5 transition-colors"
    >
      <div className="flex gap-2 items-center min-w-60 text-preset-4 text-neutral-950">
        {children}
        <span>{name}</span>
      </div>

      {isSelected && <img src={chevronRight} alt="Icon chevron right" />}
    </div>
  );
};
export default SideMenuTab;
