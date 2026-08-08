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
  profileSchema,
  ProfileFormValues,
} from "@/schemas/profile.schema";

import {
  updateProfile,
} from "@/services/profile.service";

import {
  UserProfile,
} from "@/types/profile";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import {
  Label,
} from "@/components/ui/label";

interface Props {
  user: UserProfile;
}

export default function ProfileForm({
  user,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<ProfileFormValues>({
    resolver:
      zodResolver(profileSchema),

    defaultValues: {
      name: user.name,

      phone:
        user.phone ?? "",

      address:
        user.address ?? "",

      avatar:
        user.avatar ?? "",
    },
  });

  async function onSubmit(
    values: ProfileFormValues
  ) {
    try {
      setLoading(true);

      await updateProfile(values);

      toast.success(
        "Profile updated successfully."
      );
    } catch (error) {
      toast.error(
        "Failed to update profile."
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
          Personal Information
        </h2>

        <p className="text-sm text-muted-foreground">
          Update your profile information.
        </p>
      </div>

      {/* Name */}

      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name
        </Label>

        <Input
          id="name"
          {...register("name")}
          placeholder="Enter your name"
        />

        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}

      <div className="space-y-2">
        <Label htmlFor="email">
          Email
        </Label>

        <Input
          id="email"
          value={user.email}
          disabled
        />

        <p className="text-xs text-muted-foreground">
          Email cannot be changed here.
        </p>
      </div>

      {/* Phone */}

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone
        </Label>

        <Input
          id="phone"
          {...register("phone")}
          placeholder="01XXXXXXXXX"
        />

        {errors.phone && (
          <p className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Address */}

      <div className="space-y-2">
        <Label htmlFor="address">
          Address
        </Label>

        <Textarea
          id="address"
          {...register("address")}
          placeholder="Enter your address"
        />

        {errors.address && (
          <p className="text-sm text-destructive">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Avatar */}

      <div className="space-y-2">
        <Label htmlFor="avatar">
          Profile Image URL
        </Label>

        <Input
          id="avatar"
          {...register("avatar")}
          placeholder="https://example.com/avatar.jpg"
        />

        {errors.avatar && (
          <p className="text-sm text-destructive">
            {errors.avatar.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Updating..."
          : "Update Profile"}
      </Button>

    </form>
  );
}