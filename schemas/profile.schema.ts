import { z } from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(
      3,
      "Name must be at least 3 characters."
    ),

  phone: z
    .string()
    .min(
      11,
      "Phone number must be at least 11 characters."
    )
    .max(
      15,
      "Phone number is too long."
    ),

  address: z
    .string()
    .min(
      5,
      "Address must be at least 5 characters."
    ),

  avatar: z
    .url("Please enter a valid image URL.")
    .or(z.literal(""))
    .optional(),
});

export type ProfileFormValues =
  z.infer<typeof profileSchema>;



export const changePasswordSchema =
  z
    .object({
      currentPassword: z
        .string()
        .min(
          1,
          "Current password is required."
        ),

      newPassword: z
        .string()
        .min(
          8,
          "Password must be at least 8 characters."
        )
        .regex(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
          "Password must contain uppercase, lowercase and number."
        ),

      confirmPassword: z.string(),
    })
    .refine(
      (data) =>
        data.newPassword ===
        data.confirmPassword,
      {
        path: ["confirmPassword"],
        message:
          "Passwords do not match.",
      }
    );

export type ChangePasswordFormValues =
  z.infer<
    typeof changePasswordSchema
  >;