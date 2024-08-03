"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-end gap-4">
      {session && session.user ? (
        <p>Logged in</p>
      ) : (
        <>
          <button onClick={() => signIn()}>Sign In</button>
          <button>
            <Link href="/auth/signup">Sign Up</Link>
          </button>
        </>
      )}
    </div>
  );
}
