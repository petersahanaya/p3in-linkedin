"use client";

import Spacing from "@components/spacing/spacing";
import Button from "@components/button/button";
import TextField from "@components/textField/textField";
import SelectForm from "@components/select/select";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaDoorOpen } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";

import { SubmitHandler, useForm } from "react-hook-form";

import {
  JoinFormSchema,
  joinFormSchema,
} from "@validations/joinValidation/joinValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const JoinForm = () => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { disabled, errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
    mode: "onBlur",
    resolver: zodResolver(joinFormSchema),
  });

  const onSubmit: SubmitHandler<JoinFormSchema> = (data) => {};

  return (
    <Spacing className="mt-4 w-full flex-col items-start justify-start gap-2 pb-10">
      <TextField
        error={errors?.username?.message}
        label="username"
        register={register as any}
        type="text"
      />
      <TextField
        error={errors?.email?.message}
        label="email"
        register={register as any}
        type="email"
      />
      <TextField
        error={errors?.password?.message}
        label="password"
        register={register as any}
        type="password"
      />

      <SelectForm error={errors?.role?.message} setValue={setValue} />

      <Button
        props={{
          disabled: isSubmitting,
          onClick: handleSubmit(onSubmit),
        }}
        className={`flex items-center justify-center p-4 ${
          disabled || isSubmitting ? "opacity-80" : ""
        } transition-opacity`}
      >
        {isSubmitting ? (
          <RiLoader4Fill size={30} className="animate-spin" />
        ) : (
          "Agree & Join"
        )}
      </Button>
      <Link className="w-full" href="/signin">
        <Button className="flex items-center justify-center gap-3 border-2 border-stone-700 bg-white text-stone-800 transition-opacity hover:opacity-75">
          <FaDoorOpen />
          Already have an account?
        </Button>
      </Link>

      <Spacing className="mt-4 h-max justify-between gap-3 px-3">
        <div className="w-full border-[.5px] border-stone-500"></div>
        <p className="font-[600] text-stone-700">Or</p>
        <div className="w-full border-[.5px] border-stone-500"></div>
      </Spacing>

      <div className="text-xs text-stone-500">
        By clicking Join, you agree to P3In’s{" "}
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
          Join with Google
        </Button>
      </Spacing>
    </Spacing>
  );
};

export default JoinForm;
