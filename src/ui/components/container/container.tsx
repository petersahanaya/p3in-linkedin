import { ReactChildrenWithClass } from "@types";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }: ReactChildrenWithClass) => {
  return (
    <section className={twMerge(`h-full w-full px-24 ${className}`)}>
      {children}
    </section>
  );
};

export default Container;
