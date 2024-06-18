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
      className="mt-6 w-[200px] mx-auto rounded-full bg-[#001A2F] hover:bg-[#001a2fc1] text-white hover:text-white"
    >
      {pending ? <Loader2 className="mr-2 size-4 animate-spin" /> : <></>}
      Entrar
    </Button>
  );
}
