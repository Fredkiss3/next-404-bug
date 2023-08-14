import { redirectAction } from "./_action";

export default async function Page() {
  return (
    <main>
      <h1>Path: / (home) </h1>

      <form action={redirectAction}>
        <input type="hidden" name="_redirect" value={"/"} />
        <button>Redirect To / </button>
        <br />
        <br />
      </form>

      <form action={redirectAction}>
        <input type="hidden" name="_redirect" value={"/target"} />
        <button>Redirect To /target </button>
        <br />
        <br />
      </form>
    </main>
  );
}
