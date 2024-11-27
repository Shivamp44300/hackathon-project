"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/app/_components/Spinner";

const Signup = () => {
  const [error, setError] = useState(""); // Local state for error handling
  const router = useRouter(); // `useRouter` hook from 'next/navigation'
  const { status } = useSession(); // `useSession` hook to manage authentication status

  // Google Signup handler
  

  // Show loading spinner while session is being fetched
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sign Up</h2>

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

        <button
          onClick={() => signIn("google")}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Sign Up with Google
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
