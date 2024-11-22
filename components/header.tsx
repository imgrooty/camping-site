// components/Header.js
"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Website Name */}
        <div className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
          <Link href="/">SummerCamper</Link>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Button or CTA */}
        <div className="flex justify-center items-center">
          {session?.data?.user ? (
            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center w-10 h-10 text-xl font-semibold text-white bg-yellow-500 rounded-full hover:cursor-pointer">
                {session.data.user.fullName.slice(0, 1).toUpperCase()}
              </div>
              <button
                className="bg-red-500 text-black px-2 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                onClick={() =>
                  signOut({ callbackUrl: "/" }).then(() => {
                    window.location.href = "/";
                  })
                }
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="bg-green-500 text-black px-2 py-1 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
              onClick={() => {
                signIn(undefined, { callbackUrl: "/dashboard" });
              }}
            >
              Sign In
            </button>
          )}

          <Link
            href="/search"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out"
          >
            Find Camps
          </Link>
        </div>
      </div>
    </header>
  );
}
