import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-row items-center space-x-2">
              <span className="text-3xl">🔮</span>
              <span>cerebase</span>
            </div>

            <p className="mt-4 max-w-xs text-sm text-gray-500">
              cerebase is a forward-thinking technology company dedicated to
              create intuitive solutions that empower individuals and businesses
              to thrive in the digital age.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://www.linkedin.com/company/ai-saga-labs"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/saga-labs"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div aria-label="footer-services">
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <LinkExternal
                  text="Chat Client"
                  url="https://chat.saga-labs.com"
                />
                {/* <LinkExternal
                  text="Desktop Client"
                  url="https://github.com/saga-labs/saga-gpt"
                /> */}
                {/* <LinkExternal
                  text="Model Cloud"
                  url="https://cloud.saga-labs.com"
                /> */}
              </ul>
            </div>

            <div aria-label="footer-company">
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <LinkInternal text="About" url="/about" />
                <LinkExternal
                  text="Meet the Team"
                  url="https://www.linkedin.com/company/ai-saga-labs/people/"
                />
                <LinkExternal
                  text="Open Positions"
                  url="https://www.linkedin.com/company/ai-saga-labs/jobs/"
                />
              </ul>
            </div>

            <div aria-label="footer-links">
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <LinkInternal text="Blog" url="/blog" />
                <LinkInternal text="Research" url="/research" />
                <LinkInternal text="Open Source" url="/open-source" />
              </ul>
            </div>

            <div aria-label="footer-legal">
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <LinkInternal text="Privacy Policy" url="/privacy-policy" />
                <LinkInternal text="Cookie Policy" url="/cookie-policy" />
                <LinkInternal text="Terms of Service" url="/terms-of-service" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className=" space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; 2023. cerebase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface LinkProps {
  url: string;
  text: string;
}

const LinkExternal = ({ url, text }: LinkProps) => (
  <li>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 transition hover:underline hover:opacity-75"
    >
      {text}
    </a>
  </li>
);

const LinkInternal = ({ url, text }: LinkProps) => (
  <li>
    <Link
      href={url}
      className="text-gray-700 transition hover:underline hover:opacity-75"
    >
      {text}
    </Link>
  </li>
);
