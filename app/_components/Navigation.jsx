"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Import the hamburger icon from react-icons
import Button from "./Button";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full px-5 md:px-10 py-4 flex justify-between items-center md:block">
      {/* Desktop and larger screens */}
      <div className="flex items-center justify-between w-full">
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex justify-end gap-10 text-2xl items-center font-medium w-full">
          <li>
            <Link href="#home" className="hover:text-fuchsia-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="#feature" className="hover:text-fuchsia-900">
              Features
            </Link>
          </li>
          <li>
            <Link href="#docs" className="hover:text-fuchsia-900">
              Docs
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-fuchsia-900">
              Contact
            </Link>
          </li>
          <li>
            <Button
              backgroundColor="bg-fuchsia-900"
              hoverColor="hover:bg-fuchsia-700"
            >
              <Link href="auth/signin">Login</Link>
            </Button>
          </li>
          <li>
            <Button
              backgroundColor="bg-fuchsia-900"
              hoverColor="hover:bg-fuchsia-700"
            >
              <Link href="auth/signup">Signup</Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between w-full">
        {/* Hamburger Icon (React Icon) */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-fuchsia-900 place-self-end"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-white shadow-lg py-5 px-5 space-y-4 transition-all duration-300 ease-in-out z-50`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg">
          <li>
            <Link
              href="#home"
              className="hover:text-fuchsia-900"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#feature"
              className="hover:text-fuchsia-900"
              onClick={toggleMenu}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#docs"
              className="hover:text-fuchsia-900"
              onClick={toggleMenu}
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-fuchsia-900"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          {/* Buttons inside mobile menu now */}
          <li>
            <Button
              backgroundColor="bg-fuchsia-900"
              hoverColor="hover:bg-fuchsia-700"
            >
              <Link href="auth/signin">Login</Link>
            </Button>
          </li>
          <li>
            <Button
              backgroundColor="bg-fuchsia-900"
              hoverColor="hover:bg-fuchsia-700"
            >
              <Link href="auth/signup">Signup</Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Backdrop Blur Effect */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out`}
        onClick={toggleMenu} // Close menu if the backdrop is clicked
      ></div>
    </nav>
  );
}

export default Navigation;
