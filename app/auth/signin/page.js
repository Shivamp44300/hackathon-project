"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation'
import Spinner from "@/app/_components/Spinner";

const Login = () => {
  const { data: session, status } = useSession(); // `useSession` hook is always called
  const router = useRouter(); // `useRouter` hook from 'next/navigation'

  
  // Handle loading state
  if (status === "loading") {
    return <Spinner />;
  }
  console.log(session);

  // If the user is authenticated, redirect to the user dashboard

  if (status === "authenticated") {
    router.push("/userdashboard"); // Redirect to user dashboard using next/navigation
  }

  // If the user is unauthenticated
  if (status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            You are not logged in.
          </h2>
          <button
            onClick={() => signIn("google")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Login;
