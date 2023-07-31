"use server";
import { revalidatePath } from "next/cache";
import { RedirectType } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import fs from "node:fs/promises";
import path from "node:path";

export async function getCookieCounter() {
  return Number.parseInt(cookies().get("_counter")?.value ?? "0");
}

export async function incrementCookieCounter(fd: FormData) {
  const counter = await getCookieCounter();

  cookies().set("_counter", (counter + 1).toString());
  if (fd.get("_redirect")) {
    redirect("/target");
  }
}

export async function getFileCounter(): Promise<number> {
  const dbPath = path.resolve(__dirname, "./db.json");

  try {
    const rawContent = await fs.readFile(dbPath, "utf8");
    const data = JSON.parse(rawContent);
    return data.counter;
  } catch (error) {
    return 0;
  }
}

export async function incrementFileCounter(fd: FormData) {
  const dbPath = path.resolve(__dirname, "./db.json");

  const currentCounter = await getFileCounter();
  const newCounter = currentCounter + 1;

  const newData = {
    counter: newCounter,
  };

  await fs.writeFile(dbPath, JSON.stringify(newData, null, 2), "utf8");

  revalidatePath("/");
  if (fd.get("_redirect")) {
    redirect("/target", RedirectType.push);
  }
}
