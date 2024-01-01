import type { ReactChildrenWithClass } from "@/types/types";
import { twMerge } from "tailwind-merge";

const Spacing = ({ className, children }: ReactChildrenWithClass) => {
  return (
    <div
      className={twMerge(
        `flex h-full w-full items-center justify-around ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Spacing;
