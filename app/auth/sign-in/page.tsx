"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { API_AUTH, URL_API } from "@/utils/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("x-auth-token", API_AUTH);

    const options = {
      method: "POST",
      url: "https://corsproxy.io/",
      params: { "https://academy.proaero.aero/api/1/login": "" },
      headers: {
        "Content-Type": "multipart/form-data;",
        "x-auth-token": API_AUTH,
      },
      data: "[form]",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // const form = new FormData();
    // form.append("email", email);
    // form.append("password", password);
    // form.append("x-auth-token", API_AUTH);

    // const url =
    //   "https://corsproxy.io/?" + encodeURIComponent(`${URL_API}/api/1/login`);

    // try {
    //   const res = await axios.post(url, form, {
    //     headers: {
    //       accept: "application/json",
    //       Authorization: `x-auth-token: ${API_AUTH}`,
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   });

    //   console.log(res.data);
    // } catch (error) {
    //   console.error("Error:");
    // }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 bg-white px-6 rounded-xl border-slate-300 p-4 sm:w-[350px]">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 p-2">
            <Label className="text-zinc-800 font-normal" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              autoCorrect="off"
              autoComplete="email"
              autoCapitalize="none"
              className="text-zinc-800 mb-4 rounded-lg h-10 placeholder:text-black border border-slate-300 hover:border-blue-400 focus:border-blue-400"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
