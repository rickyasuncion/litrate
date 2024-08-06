"use client";
import Header from "@/components/header";
import React from "react";
import Image from "next/image";
import { UserAuth } from "../_utils/auth-context";

function Page() {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } =
    UserAuth();

  const handleGitSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log("Sign up unsuccessful");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Sign up unsuccessful");
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Sign out unsuccessful");
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mx-auto mt-16">
        <div className="space-y-4">
          {user ? (
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white border border-red-600 rounded-lg shadow-sm hover:bg-red-600"
            >
              <span>Sign Out</span>
            </button>
          ) : (
            <>
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200"
              >
                <Image
                  src="/google-logo.png"
                  width={20}
                  height={20}
                  alt="Google"
                  className="button-icon"
                />
                <span>Sign in with Google</span>
              </button>
              <button
                onClick={handleGitSignIn}
                className="w-full flex items-center justify-center px-4 py-2 bg-black text-white border border-gray-800 rounded-lg shadow-sm hover:bg-gray-800"
              >
                <Image
                  src="/github.png"
                  width={20}
                  height={20}
                  alt="GitHub"
                  className="button-icon"
                />
                <span>Sign in with GitHub</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
