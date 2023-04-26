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
                <ProfileImage size="small" isInteractive />
              </Link>
            </div>
            <Navbar currentFilters={currentFilters} />
          </div>
        </Transition>
      </div>

      <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-32 font-sans text-base text-gray-600 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3 ">
        <div className="flex items-center justify-center ">
          <Image
            src={boxer}
            alt="my gif"
            height={250}
            width={250}
            className="z-40"
          />
          <div className="text-center -ml-16">
            <h1 className="text-3xl font-medium text-white	 sm:text-4xl">
              Noah Guale
            </h1>
            <h2 className="align-middle text-lg leading-6 text-white">
              <span className="text-gray-400 ">
                <span className="hidden sm:inline">Software Engineer</span>
                <span className="inline sm:hidden" title="Developer Experience">
                  SWE
                </span>{" "}
                @
              </span>
              <span className="text-sky-300 text-xl">{" Google"}</span>
              <span className="font-medium text-white"></span>
            </h2>
          </div>
        </div>

        <div className="mt-7 sm:mt-4 content-center animated animatedFadeInUp fadeInUp block rounded-2xl  bg-white/5">
          <p className="text-xl text-white p-4">
            Hello, my name is Noah Guale and I love to create! My interest in
            coding started back in 2013 when I decided to start playing
            Minecraft. From creating my own mods to running a full-scale server,
            I became passionate about coding.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};
