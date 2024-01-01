"use client";
import Spacing from "@components/spacing/spacing";
import Button from "@components/button/button";
import { FcGoogle } from "react-icons/fc";
import { IoMdPerson } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "@components/textField/textField";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInFormSchema,
  signInFormSchema,
} from "@validations/signinValidation/signInValidation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInFormSchema> = () => {};

  return (
    <Spacing className="mt-4 w-full flex-col items-start justify-start gap-2">
      <TextField
        label="email"
        register={register}
        type="email"
        error={errors?.email?.message}
      />
      <TextField
        label="password"
        register={register}
        type="password"
        error={errors?.password?.message}
      />

      <Button
        props={{
          onClick: handleSubmit(onSubmit),
        }}
        className="p-4"
      >
        Sign in
      </Button>
      <Button className="flex items-center justify-center gap-3 border-2 border-stone-700 bg-white text-stone-800 transition-opacity hover:opacity-75">
        <IoMdPerson />
        Continue As Guest
      </Button>

      <Spacing className="mt-4 h-max justify-between gap-3 px-3">
        <div className="w-full border-[.5px] border-stone-500"></div>
        <p className="font-[600] text-stone-700">Or</p>
        <div className="w-full border-[.5px] border-stone-500"></div>
      </Spacing>

      <div className="text-xs text-stone-500">
        By clicking Continue, you agree to P3In’s{" "}
        <span className="cursor-pointer text-primary hover:border-b-[1px] hover:border-b-primary">
          User Agreement
        </span>
        ,{" "}
        <span className="cursor-pointer text-primary hover:border-b-[1px] hover:border-b-primary">
          Privacy Policy
        </span>
        , and{" "}
        <span className="cursor-pointer text-primary hover:border-b-[1px] hover:border-b-primary">
          Cookie
        </span>
      </div>

      <Spacing className="mt-3 h-max w-full flex-col">
        <Button className="flex cursor-pointer items-center justify-center gap-3 border-[1px] border-stone-700 bg-white text-stone-800 transition-opacity hover:opacity-75">
          <FcGoogle size={30} />
          Continue with Google
        </Button>
      </Spacing>
    </Spacing>
  );
};

export default SignInForm;
