import { getCookieCounter, incrementCookieCounter } from "./_action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function updateTheme(formData: FormData) {
  "use server";

  const newTheme = formData.get("theme")?.toString();
  cookies().set("theme", newTheme ?? "system");
  redirect("/");
}

export default async function Page() {
  const cookieCounter = await getCookieCounter();

  const session = cookies().get("session")?.value;
  const theme = cookies().get("theme")?.value ?? "system";

  return (
    <main>
      <h1>Path: / (home) </h1>
      <h1>
        cookie Counter = {cookieCounter} | session = {session} | theme = {theme}
      </h1>

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

      <form action={updateTheme}>
        <fieldset>
          <legend>Select a maintenance drone:</legend>
          <input
            type="radio"
            name="theme"
            defaultValue={"light"}
            id="light"
            defaultChecked={theme === "light"}
          />
          <label htmlFor="light">Light</label>
          <input
            type="radio"
            name="theme"
            defaultValue={"dark"}
            id="dark"
            defaultChecked={theme === "dark"}
          />
          <label htmlFor="dark">Dark</label>
          <input
            type="radio"
            name="theme"
            defaultValue={"system"}
            id="system"
            defaultChecked={theme === "system"}
          />
          <label htmlFor="system">System</label>
          <input
            type="radio"
            name="theme"
            defaultValue={"fancy"}
            id="fancy"
            defaultChecked={theme === "fancy"}
          />
          <label htmlFor="fancy">Fancy</label>
        </fieldset>

        <button>Update form</button>
      </form>
    </main>
  );
}
