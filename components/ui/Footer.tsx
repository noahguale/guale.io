import { FOCUS_VISIBLE_OUTLINE, LINK_SUBTLE_STYLES } from "../../lib/constants";
import cx from "clsx";
import Link from "next/link";
import Github from "components/icons/Github";
import LinkedinIcon from "components/icons/LinkedinIcon";
import InstagramIcon from "components/icons/InstagramIcon";

export const Footer = () => {
  return (
    <div className="mt-36 pb-36 text-base ">
      <div className="text-gray-300">
        <div className="flex flex-col items-center justify-center font-medium lg:flex-row ">
          <div className="flex space-x-10 items-center">
            <div>
              <Link
                href="https://www.instagram.com/noahguale"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
              >
                <InstagramIcon className="text-gray-300" />
              </Link>
            </div>

            {/* <div>
              <Link
                href="/blog"
                className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
              >
                <TwitterIcon className="text-gray-300 w-[18px]" />
              </Link>
            </div> */}

            <a
              href="https://github.com/noahguale"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              <Github className="text-gray-300 w-[18px]" />
            </a>
            <a
              href="https://github.com/noahguale"
              className={cx(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}
            >
              <LinkedinIcon className="text-gray-300 w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center mt-4 text-gray-400">
        © 2023 Noah Guale
      </p>
    </div>
  );
};
