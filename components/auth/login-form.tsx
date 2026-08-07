"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  loginSchema,
  LoginSchema,
} from "@/schemas/auth.schema";

import { login } from "@/services/auth.service";

import {
  AuthCard,
  AuthHeader,
  AuthFooter,
} from "@/components/auth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import PasswordInput from "./password-input";

import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();

  const form =
    useForm<LoginSchema>({
      resolver: zodResolver(loginSchema),

      defaultValues: {
        email: "",
        password: "",
      },
    });

  async function onSubmit(
    values: LoginSchema
  ) {
    try {
      await login(values);

      toast.success(
        "Login successful."
      );

      router.push("/");
      router.refresh();

    } catch {
      toast.error(
        "Invalid email or password."
      );
    }
  }

  return (
    <AuthCard>

      <AuthHeader
        title="Welcome Back"
        subtitle="Login to your RentNest account"
      />

      <Form {...form}>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>

                <FormLabel>
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>

                <FormLabel>
                  Password
                </FormLabel>

                <FormControl>

                  <PasswordInput
                    placeholder="Password"
                    {...field}
                  />

                </FormControl>

                <FormMessage />

              </FormItem>
            )}
          />

          <Button
            className="w-full"
            disabled={
              form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting
              ? "Logging in..."
              : "Login"}
          </Button>

        </form>

      </Form>

      <AuthFooter
        text="Don't have an account?"
        href="/register"
        label="Register"
      />

    </AuthCard>
  );
}