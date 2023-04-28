import React from "react";
import { FOCUS_VISIBLE_OUTLINE } from "../../lib/constants";
import { CurrentFilters } from "../../lib/types";
import cx from "clsx";
import Link from "next/link";
import { Footer } from "./Footer";
import { ProfileImage } from "./ProfileImage";
import { Navbar } from "./Navbar";
import { Transition } from "@headlessui/react";
import { GradientBackground } from "./GradientBackground";
import Image from "next/image";
import boxer from "public/images/boxer.gif";
import Logo from "../icons/Logo";
import { LogoSphere } from "./VectorSphere";
import Typewriter from "typewriter-effect";

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className="block items-center gap-4">
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150 text-white"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{" "}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <p className="text-secondary hover:text-primary transition-opacity duration-150 text-white ">
          {title}
        </p>
      )}
    </span>
  );
}

export const Layout = ({
  children,
  showNav = true,
  currentFilters = null,
}: {
  children: React.ReactNode;
  showNav?: any;
  currentFilters?: CurrentFilters;
}) => {
  return (
    <>
      {/* <GradientBackground /> */}

      <div className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(780px,100%),1fr] px-4">
        <Transition
          className="pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]"
          show={showNav}
          enter="transition duration-100 ease-in-out"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                title="View home page"
                className={cx("rounded-full", FOCUS_VISIBLE_OUTLINE)}
              >
                <Logo className="w-[32px] transform text-white transition delay-100 duration-300 ease-out hover:scale-125" />
              </Link>
            </div>
            <Navbar currentFilters={currentFilters} />
          </div>
        </Transition>
      </div>

      <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-32 mt-8 font-sans text-base text-gray-600 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3 ">
        <LogoSphere />

        <div className="flex items-center justify-center ">
          {/* <Image
            src={boxer}
            alt="my gif"
            height={250}
            width={250}
            className="z-40"
          /> */}
          <div className="items-center text-center mt-4">
            <h1 className="text-3xl font-medium text-white	 sm:text-4xl">
              Noah Guale
            </h1>
            <h2 className="align-middle text-lg leading-6 text-white mt-2">
              <span className="text-gray-400 ">
                <span className="hidden sm:inline">Software Engineer</span>
                {/* <span className="inline sm:hidden" title="Software Engineer">
                  SWE
                </span>{" "} */}
                <span
                  className="inline sm:hidden text-md"
                  title="Software Engineer"
                >
                  Software Engineer
                </span>{" "}
                {/* @ */}
              </span>
              <span className="text-sky-300 text-xl"> </span>
              <span className="font-medium text-white"></span>
            </h2>
          </div>
        </div>

        <div className="mt-4 sm:mt-4 content-center  block rounded-2xl  bg-white/5">
          <p className="text-md text-white p-4 text-center">
            Hello, I'm a full-stack developer based currently in Chicago!
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mt-4">
          <span className="text-lg text-gray-400">Contact</span>

          <div className="grid grid-cols-2 gap-4 gap-x-10 md:grid-cols-3 justify-items-center	">
            <ContactLink href="https://github.com/noahguale" title="github" />
            <ContactLink href="mailto:noahguale@gmail.com" title="email" />
            <ContactLink href="/files/resume.pdf" title="resume" />

            <ContactLink href="https://twitter.com/noahguale" title="twitter" />
            <ContactLink
              href="https://instagram.com/noahguale"
              title="instagram"
            />

            <ContactLink href="https://codepen.io/noahguale" title="codepen" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
