import { getCookieCounter, incrementCookieCounter } from "./_action";

export default async function Page() {
  const cookieCounter = await getCookieCounter();

  return (
    <main>
      <h1>Path: / (home) </h1>
      <h1>cookie Counter = {cookieCounter}</h1>

      <form action={incrementCookieCounter}>
        <input type="hidden" name="_redirect" value={"/"} />
        <button>Increment cookie counter</button>
        <br />
        <br />
      </form>

      <form action={incrementCookieCounter}>
        <input type="hidden" name="_redirect" value={"/target"} />
        <button>Increment cookie counter (Redirects to target)</button>
        <br />
        <br />
      </form>
    </main>
  );
}
