import React from "react"
import { Navbar } from "components/ui/Navbar"
import { GradientBackground } from "components/ui/GradientBackground"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { CurrentFilters } from "@/lib/types"
import { ProfileImage } from "components/ui/ProfileImage"
import cx from "clsx"
import { FOCUS_VISIBLE_OUTLINE } from "../../lib/constants"

export const NavBackground = ({
    children,
    showNav = true,
    currentFilters = null,
  }: {
    children: React.ReactNode
    showNav?: any
    currentFilters?: CurrentFilters
  }) => {

    return (
        <div>
            <GradientBackground />

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



        </div>
    )
}
