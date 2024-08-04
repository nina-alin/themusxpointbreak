import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { GoogleIcon, SpinnerIcon } from "../icons/";
import { useSearchParams } from "next/navigation";

interface Props {
  typeSubmit: "signin" | "signup";
  callbackUrl?: string;
}

export default function GoogleButtonSignin({ typeSubmit, callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const errorParams = searchParams.get("error");

  const errorMap = (error: string) => {
    switch (error) {
      case "OAuthAccountNotLinked": {
        return "You already have an account registered with this mail address.";
      }
      case "callback": {
        return "Callback error occurred.";
      }
      case "AccessDenied": {
        return "You are not allowed to access this. Please try again or contact your administrator.";
      }
      default: {
        return "An unexpected error occurred.";
      }
    }
  };

  return (
    <>
      {errorParams && (
        <div className="text-center p-2 text-red-600 my-2">
          Error: {errorMap(errorParams)}
        </div>
      )}
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 "
        onClick={async () => {
          setIsLoading(true);
          await signIn("google", { callbackUrl });
          setIsLoading(false);
        }}
      >
        {isLoading ? (
          <span className="animate-spin">
            <SpinnerIcon size={16} />
          </span>
        ) : (
          <GoogleIcon size={16} />
        )}
        {typeSubmit === "signup"
          ? "Sign Up with Google"
          : "Sign in with Google"}
      </Button>
    </>
  );
}
