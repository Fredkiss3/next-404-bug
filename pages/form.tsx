export default function PagePage() {
  return (
    <form>
      <fieldset>
        <legend>Select a maintenance drone:</legend>
        <input
          type="radio"
          name="theme"
          defaultValue={"light"}
          id="light"
          defaultChecked
        />
        <label htmlFor="light">Light</label>
        <input type="radio" name="theme" defaultValue={"dark"} id="dark" />
        <label htmlFor="dark">Dark</label>

        <input type="radio" name="theme" defaultValue={"system"} id="system" />
        <label htmlFor="system">System</label>
      </fieldset>
    </form>
  );
}
