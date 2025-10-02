"use client";

import React from "react";
// import Image from "next/image";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      aria-label="Site Header"
      className="fixed z-50 w-full border-b bg-white/95"
    >
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <div className="text-primary flex items-center space-x-2">
            {/* <span className="text-4xl">
              <Image src={"./logo.svg"} alt="logo" width={30} height={30} />
            </span> */}
            <span className={"text-2xl tracking-tight text-[#132C65]"}>
              cerebase
            </span>
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Site Nav"
            className="hidden w-full justify-end md:flex"
          >
            {/** navigation links */}
            <ul className="flex items-center gap-6 text-sm">
              <NavItem href="/research" pathname={pathname}>
                Research
              </NavItem>

              <NavItem href="/open-source" pathname={pathname}>
                Open Source
              </NavItem>

              <NavItem href="/about" pathname={pathname}>
                About
              </NavItem>

              <NavItem href="/careers" pathname={pathname}>
                Careers
              </NavItem>
            </ul>
          </nav>

          {/** auth buttons */}
          <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface props {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  pathname: string;
}

const NavItem = ({ href, children, pathname }: props) => {
  const active = pathname === href;
  return (
    <li>
      <Link href={href}>
        <span
          className={clsx(
            "transition hover:text-gray-500/75",
            active ? "text-highlight" : "text-gray-800",
            active ? "cursor-not-allowed" : "cursor-pointer"
          )}
        >
          {children}
        </span>
      </Link>
    </li>
  );
};
