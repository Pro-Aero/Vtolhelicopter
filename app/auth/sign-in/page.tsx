import { Metadata } from "next";

import Image from "next/image";
// import Logo from "@/public/logo.png";

import { UserAuthForm } from "./credentials/sign-in-form";

export const runtime = "edge";

// export const metadata: Metadata = {
//   title: "Sign-in",
// };

export default function SignIn() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 bg-white px-6 rounded-xl border-slate-300 p-4 sm:w-[350px]">
        <UserAuthForm />
      </div>
    </div>
  );
}
