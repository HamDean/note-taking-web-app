import rightArrow from "../assets/images/icon-chevron-right.svg";
import { useState } from "react";

interface Props {
  iconSrc: string;
  tabTitle: string;
}

const Tab = ({ iconSrc, tabTitle }: Props) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      className={`flex justify-between items-center cursor-pointer p-3 rounded-10
                 text-neutral-950 text-preset-4 h-10 ${isSelected ? "bg-neutral-100" : ""}`}
      onClick={() => setSelected(!isSelected)}
    >
      <div className="flex justify-center items-center gap-[1.5px]">
        <img className="h-5 w-5" src={iconSrc} alt="" />
        <span className="mt-0.5">{tabTitle}</span>
      </div>
      {isSelected && (
        <div>
          <img src={rightArrow} alt="" />
        </div>
      )}
    </div>
  );
};
export default Tab;
