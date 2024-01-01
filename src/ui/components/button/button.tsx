import { ReactChildrenWithClass } from "@types";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
} & ReactChildrenWithClass;

const Button = ({ children, className, props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        `w-full rounded-full bg-primary p-3 font-[600] text-white transition-opacity hover:opacity-75 ${className}`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
