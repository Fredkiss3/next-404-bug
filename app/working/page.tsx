import Link from "next/link";
import {
  getCookieCounter,
  getFileCounter,
  incrementCookieCounter,
  incrementFileCounter,
} from "../_action";

export default async function Page() {
  const cookieCounter = await getCookieCounter();
  const fileCounter = await getFileCounter();
  return (
    <main>
      <h1>Path: /working </h1>
      <h1>
        File Counter = {fileCounter} | cookie Counter = {cookieCounter}
      </h1>

      <form>
        <button formAction={incrementCookieCounter}>
          Increment cookie counter
        </button>
        <br />
        <br />
        <button formAction={incrementFileCounter}>
          Increment file counter (uses revalidatePath)
        </button>
      </form>

      <br />
    </main>
  );
}
