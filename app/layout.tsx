import * as React from "react";
import { getCookieCounter } from "./_action";
import Link from "next/link";

export const metadata = {
  title: "Next redirect server actions bug",
};

export const runtime = "edge";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieCounter = await getCookieCounter();

  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT (cookie = {cookieCounter})</h2>
        {children}

        <br />
        <Link href={"/"}>Go home</Link>
        <br />
        <Link href={"/target"}>Go to `/target`</Link>
        <br />
        <Link href={"/working"}>Go to `/working`</Link>
        <br />
        <Link href={"/not-found"}>Go to `/not-found`</Link>
        <br />
        <Link href={"/set-cookie"}>Go to `/set-cookie`</Link>
      </body>
    </html>
  );
}
