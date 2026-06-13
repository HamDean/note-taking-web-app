import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MenuItem = ({ children }: Props) => {
  return (
    <div className="h-8 w-[68.6px] py-1 px-5.5 cursor-pointer hover:bg-neutral-50">
      {children}
    </div>
  );
};
export default MenuItem;
