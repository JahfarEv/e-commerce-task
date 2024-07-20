"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../src/app/globals.css";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full top-0 left-0">
      <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            href={"/"}
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
            onClick={closeMenu}
          >
            FashionFinesse
          </Link>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
          <div
            className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href={"/products"}
                  className="flex items-center transition-colors hover:text-black"
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href={"/login"}
                  className="flex items-center transition-colors hover:text-black"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
