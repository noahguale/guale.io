import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "../../lib/constants"
import { CurrentFilters } from "../../lib/types"
import TwitterIcon from "../icons/TwitterIcon"
import YouTubeIcon from "../icons/YouTubeIcon"
import N from "../icons/Logo"
import Github from "../icons/Github"
import Linkedin from "../icons/LinkedinIcon"


import { BeakerIcon } from '@heroicons/react/24/solid'
import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { ArchiveBoxIcon } from '@heroicons/react/24/solid'

import { NewspaperIcon } from '@heroicons/react/24/solid'

import { DocumentTextIcon } from '@heroicons/react/24/solid'

import cx from "clsx"
import Link from "next/link"

//set the schema of the filter prop as the CurrentFilter type from the types file in the lib folder
export const Navbar = ({currentFilters} : {currentFilters?: CurrentFilters}) => {

    return (
        <div className="flex items-center space-x-7 text-base font-semibold leading-none text-rose-100/90">
          
          <Link href="/projects" className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div
                  className={cx(
                    "rounded-lg bg-gradient-to-tl from-sky-500/80 to-sky-300/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1",
                    {
                      "ring-[2px] ring-blue-500/30 ring-offset-1 ring-offset-black/5":
                        currentFilters?.type === "videos",
                    },
                  )}
                >
                  <CodeBracketIcon className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                </div>
              </div>
              <div className="text-white">Projects</div>
            </div>
          </Link>
    
          <Link href="/blog" className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div
                  className={cx(
                    "rounded-lg bg-gradient-to-tl from-sky-500/80 to-sky-300/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1",
                    {
                      "ring-[2px] ring-blue-500/30 ring-offset-1 ring-offset-black/5":
                        currentFilters?.type === "blog",
                    },
                  )}
                >
                  <NewspaperIcon className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                </div>
              </div>
              <div className="text-white">Blog</div>
            </div>
          </Link>
    
        
          <Link
            className={cx("group", FOCUS_VISIBLE_OUTLINE)}
            href="https://www.linkedin.com/in/noahguale/"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-tl from-sky-500/80 to-sky-300/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1">
                  <Linkedin className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                </div>
              </div>
              <div className="text-white">LinkedIn</div>
            </div>
          </Link>

          <Link
            className={cx("group", FOCUS_VISIBLE_OUTLINE)}
            href="/files/resume.pdf"
          >
            <div className="sm:flex sm:items-center sm:space-x-2">
              <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                <div className="rounded-lg bg-gradient-to-tl from-sky-500/80 to-sky-300/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1">
                  <DocumentTextIcon className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                </div>
              </div>
              <div className="text-white">Resume</div>
            </div>
          </Link>


        </div>
      )}
