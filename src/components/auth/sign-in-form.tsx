"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import GoogleButtonSignin from "./google-button-signin";

interface Props {
  callbackUrl?: string;
}

export function SignInForm({ callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(values: any) {
    try {
      setIsLoading(true);

      const response = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (!response?.ok) {
        if (response?.error === "EmailNotVerified") {
          return;
        }

        return;
      }

      router.push(callbackUrl ? callbackUrl : "/");
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <GoogleButtonSignin typeSubmit="signin" />
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Your Email" />
      </form>
    </>
  );
}
