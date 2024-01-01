"use client";

import { useState } from "react";
import Spacing from "@components/spacing/spacing";
import { IoIosArrowDown } from "react-icons/io";
import { UseFormSetValue } from "react-hook-form";
import { JoinFormSchema } from "@validations/joinValidation/joinValidation";

type SelectFormProps = {
  setValue: UseFormSetValue<JoinFormSchema>;
  error?: string;
};

const SelectForm = ({ setValue, error }: SelectFormProps) => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<"employee" | "recruiter" | "">("");

  return (
    <section className="w-full">
      <Spacing className="h-max w-full flex-col items-start gap-3 p-2">
        <p className="font-[500] text-stone-700">Role</p>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full cursor-pointer items-center justify-between rounded-xl border-[1px] border-stone-600 p-2"
        >
          <p
            className={`text-sm text-stone-500 ${
              role ? "font-[500] text-stone-600" : ""
            }`}
          >
            {role ? role : "Select role.."}
          </p>
          <IoIosArrowDown
            className={`${open ? "" : "rotate-[-90deg]"} transition-all`}
          />
        </div>
      </Spacing>

      {open && (
        <Spacing className="selection:none mx-auto h-max w-[95%] flex-col items-start gap-2 rounded-xl border-[1px] border-stone-600 p-0 text-sm text-stone-500">
          <p
            onClick={() => {
              setValue("role", "employee");
              setRole("employee");
              setOpen(false);
            }}
            className="h-full w-full cursor-pointer rounded-xl p-2 transition-all hover:bg-stone-800 hover:text-white"
          >
            Employee
          </p>
          <p
            onClick={() => {
              setValue("role", "recruiter");
              setRole("recruiter");
              setOpen(false);
            }}
            className="h-full w-full cursor-pointer rounded-xl p-2 transition-all hover:bg-stone-800 hover:text-white"
          >
            Recruiter
          </p>
        </Spacing>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </section>
  );
};

export default SelectForm;
