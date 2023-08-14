import * as React from "react";
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
  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT (Date = {Date.now()})</h2>
        {children}

        <br />
        <Link href={"/"}>Go home</Link>
        <br />
        <Link href={"/target"}>Go to `/target`</Link>
      </body>
    </html>
  );
}
