import Link from "next/link";
import { getCookieCounter } from "../_action";

export default async function Page() {
  const cookieCounter = await getCookieCounter();

  return (
    <main>
      <h1>Path: /redirect </h1>
      <h1>cookie Counter = {cookieCounter}</h1>
      <br />
    </main>
  );
}
