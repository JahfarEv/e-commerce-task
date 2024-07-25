"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../../src/app/globals.css";
import { MdLogin } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setUser(token);
    }
  });
  // logout
  const logout = () => {
    localStorage.clear();
    router.refresh();
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <nav className="block w-full px-6 py-3 mx-auto text-white bg-gradient-to-t from-slate-800 via-stone-700 to-gray-900 shadow-md  bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased hover:text-slate-400"
            onClick={closeMenu}
          >
            FashionFinesse
          </Link>

          {!isOpen && (
            <button
              className="relative ml-auto h-6 w-6 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
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
          )}

          {isOpen && (
            <button
              className="relative h-6 w-6 select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
              onClick={closeMenu}
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          )}

          <div
            className={`lg:flex lg:items-center w-full ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-4 my-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6 w-full">
              <div className="dropdown dropdown-bottom text-black">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-white border-none hover:text-slate-400 hover:bg-transparent">
                  Categories
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-gradient-to-r from-violet-200 to-pink-200 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href="/products"
                  className="flex items-center transition-colors hover:text-white"
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href="/services"
                  className="flex items-center transition-colors hover:text-white"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
                </ul>
              </div>

             
              
              <li
                className={`block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 ${
                  !isOpen ? "ml-auto" : "mr-auto"
                }`}
              >
                <Link
                  href="/about"
                  className="flex items-center transition-colors hover:text-slate-400"
                  onClick={closeMenu}
                >
                  <MdOutlineShoppingBag size={25} />
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                {user ? (
                  <IoMdLogOut
                    size={25}
                    onClick={logout}
                    className="cursor-pointer"
                  />
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center transition-colors hover:text-slate-400"
                    onClick={closeMenu}
                  >
                    <MdLogin size={25} />
                  </Link>
                )}
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <Link
                  href="/admin/login"
                  className="flex items-center transition-colors hover:text-slate-400"
                  onClick={closeMenu}
                >
                  <RiAdminFill size={25} />
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
