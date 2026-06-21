import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string
}

const MenuItem = ({ children, name }: Props) => {
  return (
    <div className="w-full flex gap-1 items-center flex-col py-1 px-5.5 cursor-pointer hover:bg-neutral-50">
      {children}
      <span className="hidden md:block text-preset-6 text-neutral-600">{name}</span>
    </div>
  );
};
export default MenuItem;
