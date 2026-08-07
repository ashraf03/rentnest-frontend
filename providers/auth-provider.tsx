"use client";

import {
  useEffect,
  useState,
} from "react";

import { AuthContext } from "@/context/auth-context";

import { getCurrentUser } from "@/services/auth.service";

import { User } from "@/types/user";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function refreshUser() {
    try {
      const response =
        await getCurrentUser();

      setUser(response.data);

    } catch {
      setUser(null);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}