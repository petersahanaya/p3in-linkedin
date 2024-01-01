import Spacing from "@components/spacing/spacing";
import { JoinFormSchema } from "@validations/joinValidation/joinValidation";
import { SignInFormSchema } from "@validations/signinValidation/signInValidation";
import { UseFormRegister } from "react-hook-form";

type TextFieldProps = {
  label: keyof JoinFormSchema | keyof SignInFormSchema;
  type: "text" | "password" | "email";
  error?: string;
  register: UseFormRegister<JoinFormSchema | SignInFormSchema>;
};

const TextField = ({ label, type, register, error }: TextFieldProps) => {
  return (
    <Spacing className="h-max w-full flex-col items-start gap-3 p-2 ">
      <label htmlFor={label} className="font-[500] capitalize text-stone-700">
        {label}
      </label>
      <input
        id={label}
        {...register(label)}
        className="h-[50px] w-full rounded-lg border-[1px] border-stone-600 p-3 transition-colors hover:bg-stone-800/10"
        type={type}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </Spacing>
  );
};

export default TextField;
