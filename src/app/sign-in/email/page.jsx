"use client";

import { signInEmailPassword } from "@/src/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function SignInWithEmailPasswordPage() {
  const router = useRouter();

  async function signIn(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await signInEmailPassword({ email, password });
      router.replace("/");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        action={signIn}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "4px" }}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" />
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
