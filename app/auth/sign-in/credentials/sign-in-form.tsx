"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { SignInButton } from "./sign-in-button";
import { toast } from "sonner";
import { signInWithEmail } from "../action";

import { useRouter } from "next/navigation";

export function UserAuthForm() {
  const { push } = useRouter();
  return (
    <div className={cn("grid gap-6")}>
      <form
        action={async (FormData) => {
          try {
            const data = await signInWithEmail(FormData);
            if (data.success) {
              toast.success("Login realizado com sucesso!");
              const resp = data.data;
              push(resp.link);
              return;
            }
          } catch {
            toast.error("Não foi possível realizar login");
            return;
          }
        }}
      >
        <div className="grid gap-2 p-2">
          <Label className="text-zinc-800 font-normal" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoCorrect="off"
            autoComplete="email"
            autoCapitalize="none"
            placeholder="name@example.com"
            className="text-zinc-800 rounded-lg h-10 placeholder:text-black border border-slate-300 hover:border-blue-400 focus:border-blue-400"
          />

          <Label className="text-zinc-800 mt-2 font-normal" htmlFor="email">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Your password"
            autoCorrect="off"
            autoComplete="email"
            autoCapitalize="none"
            className="text-zinc-800 mb-4 rounded-lg h-10 placeholder:text-black border border-slate-300 hover:border-blue-400 focus:border-blue-400"
          />

          <SignInButton />
        </div>
      </form>
    </div>
  );
}
