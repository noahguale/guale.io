import { CurrentFilters } from "@/lib/types";
import { NavBackground } from "components/ui/NavBackground";
import { Footer } from "components/ui/Footer";
import { getSortedPostsData, getSortedPostsDataDb } from "../../lib/posts";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Github from "components/icons/Github";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Projects = ({
  children,
  showNav = true,
  currentFilters = null,
  allPostsData,
}: {
  children: React.ReactNode;
  showNav?: any;
  currentFilters?: CurrentFilters;
  allPostsData?: any;
}) => {
  return (
    <div className="scrollbar-hide">
      <NavBackground children></NavBackground>

      {/* <div className="flex items-center justify-center animated animatedFadeInUp fadeInUp"> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 w-6/12 place-items-center gap-10"> */}
      <div className="flex flex-col justify-between items-center  mt-28">
        <div className="container py-12 max-w-2xl px-4  sm:px-6 xl:max-w-2xl xl:px-0">
          {/* <h1 className="text-3xl mb-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
              <p className="text-lg mb-10 leading-7 text-gray-300 dark:text-gray-300">Things I Have Made in the Past. Mostly open source</p>   */}
          <div className="flex flex-col ml-14 items-center">
            {allPostsData.map(
              ({
                id,
                date,
                title,
                excerpt,
                coverImage,
                stack,
                blogpost,
                githubUrl,
              }: {
                id: any;
                date: any;
                title: any;
                excerpt: any;
                coverImage: any;
                stack: Array<String>;
                blogpost: any;
                githubUrl: any;
              }) => (
                <div key={id} className="p-2 w-5/6 xs:w-1/2 md:w-7/12	 ">
                  <div className="h-full overflow-hidden border-2 border-gray-400 rounded-md border-opacity-60 dark:border-gray-400 shadow-surface-elevation-low transition duration-200 hover:bg-sky-100/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:sky-500/70">
                    <div className="p-3">
                      <h2 className="mb-1 text-xl font-bold tracking-tight text-white">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={githubUrl}
                          aria-label="Link to Take A Break"
                        >
                          {title}
                        </a>
                      </h2>

                      <p className="h-max mb-1 prose text-gray-500 max-w-none dark:text-gray-300 grow">
                        {excerpt}
                      </p>

                      <div className="flex flex-wrap justify-end my-4 object-left-bottom">
                        {stack.map((item) => (
                          // <div className="w-fit text-center text-xs font-bold text-white/100 bg-gradient-to-tl from-sky-500/80 to-sky-300/80 rounded p-1 mr-2 mt-2">
                          <div className="w-fit text-center text-xs font-bold text-white/100 bg-gradient-to-tl from-slate-500/80 to-stone-300/80 rounded p-1 mr-2 mt-2">
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row gap-2">
                        {blogpost ? (
                          <Link href={blogpost}>
                            <ArrowTopRightOnSquareIcon className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                          </Link>
                          
                        ) : null}
                        {githubUrl ? (
                          <Link href={githubUrl}>
                            <Github className="w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* </div> */}

      {/* </div> */}

      <Footer />
    </div>
  );
};

export default Projects;
