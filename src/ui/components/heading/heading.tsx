import { ReactChildrenWithClass } from "@/types/types";
import { twMerge } from "tailwind-merge";

const Heading = ({ children, className }: ReactChildrenWithClass) => {
  return (
    <h3 className={twMerge(`text-3xl font-[600] ${className}`)}>{children}</h3>
  );
};

export default Heading;
