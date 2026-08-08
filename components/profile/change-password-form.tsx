"use client";

import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  changePasswordSchema,
  ChangePasswordFormValues,
} from "@/schemas/profile.schema";

import {
  changePassword,
} from "@/services/profile.service";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

export default function ChangePasswordForm() {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } =
    useForm<ChangePasswordFormValues>({
      resolver:
        zodResolver(
          changePasswordSchema
        ),
    });

  async function onSubmit(
    values: ChangePasswordFormValues
  ) {
    try {
      setLoading(true);

      await changePassword(values);

      toast.success(
        "Password changed successfully."
      );

      reset();
    } catch {
      toast.error(
        "Failed to change password."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border bg-background p-6"
    >

      <div>
        <h2 className="text-xl font-semibold">
          Change Password
        </h2>

        <p className="text-sm text-muted-foreground">
          Keep your account secure with a
          strong password.
        </p>
      </div>

      {/* Current Password */}

      <div className="space-y-2">
        <Label>
          Current Password
        </Label>

        <Input
          type="password"
          {...register(
            "currentPassword"
          )}
        />

        {errors.currentPassword && (
          <p className="text-sm text-destructive">
            {
              errors.currentPassword
                .message
            }
          </p>
        )}
      </div>

      {/* New Password */}

      <div className="space-y-2">
        <Label>
          New Password
        </Label>

        <Input
          type="password"
          {...register("newPassword")}
        />

        {errors.newPassword && (
          <p className="text-sm text-destructive">
            {
              errors.newPassword
                .message
            }
          </p>
        )}
      </div>

      {/* Confirm Password */}

      <div className="space-y-2">
        <Label>
          Confirm New Password
        </Label>

        <Input
          type="password"
          {...register(
            "confirmPassword"
          )}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-destructive">
            {
              errors.confirmPassword
                .message
            }
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Changing..."
          : "Change Password"}
      </Button>

    </form>
  );
}