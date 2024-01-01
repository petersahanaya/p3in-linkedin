import { z } from "zod";

export const joinFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username should at least 3 character")
    .max(20, "Username max length is 20 character"),
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
  role: z.string(),
});

export type JoinFormSchema = z.infer<typeof joinFormSchema>;
