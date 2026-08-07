"use client";

import { createContext } from "react";

import { User } from "@/types/user";

interface AuthContextValue {
  user: User | null;

  loading: boolean;

  refreshUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextValue | null>(
    null
  );