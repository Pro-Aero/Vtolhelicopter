import Image from "next/image";

import { UserAuthForm } from "./credentials/sign-in-form";

export const runtime = "edge";

export default function SignIn() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-3 xl:min-h-[800px]">
      <div className="flex justify-center py-28 col-span-1">
        <div className="mx-auto w-[350px]">
          <div className="flex flex-col text-center mb-10">
            <Image
              src="/logo_vt.svg"
              alt="Image"
              width="160"
              height="160"
              className="object-cover mx-auto dark:brightness-[0.2] dark:grayscale"
            />
            <p className="text-balance text-muted-foreground mt-8">
              Entre com sua conta
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
      <div className="hidden bg-muted lg:block col-span-2">
        <Image
          src="/background.png"
          alt="Image"
          width="1000"
          height="800"
          className="dark:brightness-[0.2] h-full w-full dark:grayscale"
        />
      </div>
    </div>
  );
}
