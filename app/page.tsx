import Link from "next/link";
import {
  getCookieCounter,
  getFileCounter,
  incrementCookieCounter,
  incrementFileCounter,
} from "./_action";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieCounter = await getCookieCounter();
  const fileCounter = await getFileCounter();
  const session = cookies().get("session")?.value;

  return (
    <main>
      <h1>Path: / (home) </h1>
      <h1>
        File Counter = {fileCounter} | cookie Counter = {cookieCounter} |
        session = {session}
      </h1>

      <form>
        <input type="hidden" name="_redirect" value={"something"} />
        <button formAction={incrementCookieCounter}>
          Increment cookie counter
        </button>
        <br />
        <br />
        <button formAction={incrementFileCounter}>
          Increment file counter (uses revalidatePath)
        </button>
      </form>
    </main>
  );
}
