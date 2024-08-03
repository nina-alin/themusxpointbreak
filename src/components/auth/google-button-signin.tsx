import { useState } from "react";
import { signIn } from "next-auth/react";
import React from "react";

interface Props {
  typeSubmit: "signin" | "signup";
  callbackUrl?: string;
}

export default function GoogleButtonSignin({ typeSubmit, callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      disabled={isLoading}
      onClick={() => {
        setIsLoading(true);
        signIn("google", { callbackUrl });
      }}
    >
      {typeSubmit === "signup" ? "Sign Up with Google" : "Sign in with Google"}
    </button>
  );
}
