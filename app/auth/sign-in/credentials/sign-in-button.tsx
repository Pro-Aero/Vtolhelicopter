"use client";

import { useFormStatus } from "react-dom";
import { Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SignInButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant="outline"
      type="submit"
      className="w-full mt-6 bg-blue-400 hover:bg-blue-300 text-white hover:text-white"
    >
      {pending ? (
        <Loader2 className="mr-2 size-4 animate-spin" />
      ) : (
        <Mail className="mr-2 size-4" />
      )}
      Realizar login
    </Button>
  );
}
