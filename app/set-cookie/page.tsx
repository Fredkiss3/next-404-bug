import { cookies } from "next/headers";

export default function FruitCommentForm() {
  async function updateSession(formData: FormData) {
    "use server";
    const session = formData.get("session") as string;

    cookies().set({
      name: "session",
      value: JSON.stringify(session),
      sameSite: "none",
      secure: true,
    });
  }
  return (
    <form>
      <textarea name="session" />
      <button formAction={updateSession}>Update Session</button>
    </form>
  );
}
