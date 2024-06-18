"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInButton } from "./sign-in-button";
import { toast } from "sonner";
import { signInWithEmail } from "../action";
import { Eye, EyeOff } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function UserAuthForm() {
  const { push } = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="grid">
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
        <div className="grid gap-2 p-2 mt-10">
          <Label className="text-[#5B5757] font-bold" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            autoCorrect="off"
            autoComplete="email"
            autoCapitalize="none"
            placeholder="Digite seu email"
            className="text-[#5B5757] rounded-xl h-10 mb-4 placeholder:text-[#536779] border border-slate-300 hover:bg-transparent focus:border-0 focus:bg-transparent"
          />

          <Label className="text-[#5B5757] font-bold" htmlFor="password">
            Senha
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Digite sua senha"
              autoCorrect="off"
              autoComplete="current-password"
              autoCapitalize="none"
              className="text-[#5B5757] rounded-xl h-10 placeholder:text-[#536779] border border-slate-300 hover:bg-transparent focus:border-0 focus:bg-transparent pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#536779]"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <SignInButton />
        </div>
      </form>
    </div>
  );
}
