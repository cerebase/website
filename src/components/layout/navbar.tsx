import React from "react";

export const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white border-b fixed w-full">
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="block text-primary" href="/">
          <span className="text-4xl">🔮</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Site Nav"
            className="hidden md:flex justify-end w-full"
          >
            {/** navigation links */}
            <ul className="flex items-center gap-6 text-sm">
              <NavItem href="/">Overview</NavItem>

              <NavItem href="/feed" isDisabled>
                Research
              </NavItem>

              <NavItem href="/pricing" isDisabled>
                Blog
              </NavItem>

              <NavItem href="/api-reference" isDisabled>
                Resources
              </NavItem>

              <NavItem href="/about" isDisabled>
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
  isDisabled?: boolean | null; // TODO: should be removed before launch
}

const NavItem = ({ href, children, isDisabled = false }: props) => {
  return (
    <li>
      <a
        className={
          isDisabled
            ? "text-gray-800 transition hover:text-gray-500/75 pointer-events-none cursor-not-allowed select-none"
            : "text-gray-800 transition hover:text-gray-500/75"
        }
        href={href}
      >
        {children}
      </a>
    </li>
  );
};
