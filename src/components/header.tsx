import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const { data: session } = useSession();
  const user = session?.user;

  const logoutAction = async () => {
    "use server";
    await signOut();
  };

  return (
    <header className="bg-white h-20">
      <nav className="h-full flex justify-between container items-center">
        {!user && (
          <>
            <li>
              <button onClick={() => signIn()}>Sign in</button>
            </li>
          </>
        )}
        {user && (
          <form action={logoutAction} className="flex">
            <li>
              <Link href="/client-side" className="text-ct-dark-600">
                Client
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/profile" className="text-ct-dark-600">
                Profile
              </Link>
            </li>
            <li className="ml-4">
              <button>Logout</button>
            </li>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Header;
