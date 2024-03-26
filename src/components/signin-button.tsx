"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";

export default function SignInButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    // Simulate a delay of 200 milliseconds before updating the loading state
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a 200ms delay
    }, 200);

    // Clean up the timer in case the component unmounts before the delay completes
    return () => clearTimeout(timeout);
  }, [session]); // Execute the effect when the session changes

  return (
    <>
      {loading ? ( // Display loading message if loading is true
        <p className="py-3">Loading...</p>
      ) : (
        // Render content based on session state
        <>
          {session && session.user ? (
            <div className="py-3">
              <p>
                Welcome,{" "}
                <span className="font-medium">{session.user.name}</span>
              </p>
            </div>
          ) : (
            <Link href={"/api/auth/signin"}>
              <Button />
            </Link>
          )}
        </>
      )}
    </>
  );
}
