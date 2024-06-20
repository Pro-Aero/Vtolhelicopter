"use server";

import { API_AUTH, URL_API } from "@/utils/constants";
import { z } from "zod";
const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

export async function signInWithEmail(data: FormData) {
  const { email, password } = signInFormSchema.parse(Object.fromEntries(data));

  const form = new FormData();
  form.append("email", email);
  form.append("password", password);

  const response = await fetch(`${URL_API}/api/1/login`, {
    method: "POST",
    headers: {
      "x-auth-token": API_AUTH,
    },
    body: form,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();
  const resp = json.data;

  return { success: true, data: resp };
}
