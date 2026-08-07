import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters."),

    email: z
      .email("Please enter a valid email."),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "Password must contain uppercase, lowercase and number."
      ),

    confirmPassword: z.string(),

    role: z.enum([
      "TENANT",
      "LANDLORD",
    ]),

    avatar: z.string().optional(),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match.",
    }
  );

export type RegisterSchema =
  z.infer<typeof registerSchema>;