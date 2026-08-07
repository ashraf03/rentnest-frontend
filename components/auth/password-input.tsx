"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput(props: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={show ? "text" : "password"}
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        {show ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}