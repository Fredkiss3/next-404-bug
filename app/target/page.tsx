import Link from "next/link";
import { getCookieCounter, getFileCounter } from "../_action";

export default async function Page() {
  const cookieCounter = await getCookieCounter();
  const fileCounter = await getFileCounter();
  return (
    <main>
      <h1>Path: /redirect </h1>
      <h1>
        File Counter = {fileCounter} | cookie Counter = {cookieCounter}
      </h1>
      <br />
    </main>
  );
}
