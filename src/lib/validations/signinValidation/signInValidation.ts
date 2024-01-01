import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Should be valid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(5, "Password should at least 5 characters long"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
