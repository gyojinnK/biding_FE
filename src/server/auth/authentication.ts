"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { AuthApi } from "@/lib/openapi";
import { getServerSession } from "next-auth";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const authApi = new AuthApi();
  const response = await authApi.authControllerLogin({
    email,
    password,
  });

  if (response.status !== 400) {
    return response.data;
  }

  throw new Error("Failed to login");
}

export async function getUserSession() {
  const session = await getServerSession(authOptions);
  return session;
}
