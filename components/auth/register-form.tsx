"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  registerSchema,
  RegisterSchema,
} from "@/schemas/auth.schema";

import { register } from "@/services/auth.service";

async function onSubmit(
  values: RegisterSchema
) {
  await register({
    name: values.name,
    email: values.email,
    password: values.password,
    role: values.role,
    avatar: values.avatar,
  });

  toast.success(
    "Registration successful."
  );

  router.push("/login");
}