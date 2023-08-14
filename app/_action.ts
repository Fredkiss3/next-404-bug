"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectAction(fd: FormData) {
  const redirectPath = fd.get("_redirect");
  if (redirectPath) {
    redirect(redirectPath.toString());
  }
}
