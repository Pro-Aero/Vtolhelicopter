export const URL_API: string =
  process.env.NEXT_PUBLIC_API_URL !== undefined
    ? process.env.NEXT_PUBLIC_API_URL
    : "";

export const API_AUTH: string =
  process.env.NEXT_PUBLIC_API_REQ !== undefined
    ? process.env.NEXT_PUBLIC_API_REQ
    : "";
