"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      aria-label="Site Header"
      className="bg-white/90 border-b fixed w-full z-50"
    >
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="flex space-x-2 text-primary items-center" href="/">
          <span className="text-4xl">🔮</span>
          <span className="text-sm font-light">
            Copenhagen based AI/NLP research lab
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Site Nav"
            className="hidden md:flex justify-end w-full"
          >
            {/** navigation links */}
            <ul className="flex items-center gap-6 text-sm">
              <NavItem href="/research" pathname={pathname}>
                Research
              </NavItem>

              <NavItem href="/blog" pathname={pathname}>
                Blog
              </NavItem>

              <NavItem href="/open-source" pathname={pathname}>
                Open Source
              </NavItem>

              <NavItem href="/about" pathname={pathname}>
                About
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
  if (pathname === href) {
    return (
      <li>
        <Link
          className={
            "text-highlight transition hover:text-gray-500/75 pointer-events-none cursor-not-allowed select-none active:text-highlight"
          }
          href={href}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        className={
          "text-gray-800 transition hover:text-gray-500/75 pointer-events-none cursor-not-allowed select-none active:text-highlight"
        }
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
