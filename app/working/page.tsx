import Link from "next/link";
import { getCookieCounter, incrementCookieCounter } from "../_action";

export default async function Page() {
  const cookieCounter = await getCookieCounter();
  return (
    <main>
      <h1>Path: /working </h1>
      <h1>cookie Counter = {cookieCounter}</h1>

      <form>
        <input type="hidden" name="_redirect" value={"/working"} />
        <button formAction={incrementCookieCounter}>
          Increment cookie counter
        </button>
        <br />
        <br />
      </form>

      <br />
    </main>
  );
}
