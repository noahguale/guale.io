import cx from "clsx"
import Image from "next/image"
import N from "../icons/Logo"

export const ProfileImage = ({
  size = "large",
  isInteractive,
}: {
  size: "small" | "large"
  isInteractive?: boolean
}) => {
  return (
    <div className="">
    <div
      className={cx(
        "rounded-full bg-gradient-to-tl from-sky-700/60 to-sky-400/60 shadow-lg ",
        {
          "p-[2px]": size === "small",
          "p-[3px]": size === "large",
          "group transform transition ease-out hover:scale-105 hover:from-blue-700 hover:to-sky-400 hover:shadow-sky-500/25 active:translate-y-px":
            isInteractive,
          "ring-[5px] ring-blue-500/10": !isInteractive,
        },
      )}
    >

      <div
        className={cx("flex justify-center items-center rounded-full p-px fill-sky-50", {
          "h-[36px] w-[36px] ": size === "small",
          "h-[64px] w-[64px]": size === "large",
          "transition duration-300 group-hover:scale-105": isInteractive,
        })}
      >
        <N/>
      </div>

    </div>
    </div>

  )
}
